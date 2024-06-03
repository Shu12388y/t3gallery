import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import {auth} from "@clerk/nextjs/server"
import { db } from "~/server/db";
import { posts } from "~/server/db/schema";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .middleware(async ({ req }) => {
      const user = await auth();
 
      
      if (!user.userId) throw new UploadThingError("Unauthorized");
 
    
      return { userId: user.userId};
    })
    .onUploadComplete(async ({ metadata, file }) => {
 
      console.log("file url", file.url);
      await db.insert(posts).values({
        name:file.name,
        imageUrl:file.url,
        userId:metadata.userId
        }
      )
 
      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;