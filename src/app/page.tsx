import { SignedIn, SignedOut } from "@clerk/nextjs";
import { headers } from "next/headers";
import { getImage } from "~/server/query";
import Image from "next/image";

export const dynamic = "force-dynamic"




async function Images() {
  // Here we calling the database directly 
 const post = await getImage();
  // console.log(post)
  return (
  <>
  <main className="flex flex-wrap gap-10 w-45 h-45 items-center justify-center">
    {post.map((ele:any,index:any)=>{
      return(
        <>
        <div className="w-[40rem] " key={ele.id+"-"+index}>
          <Image width={480} height={480} style={{objectFit:"contain"}} src={ele.imageUrl} alt="img" />

        </div>
        </>
      )
    })}
    </main>

  </> 
  )

  
}


// server components
export default async function HomePage() {
  headers();
return(
  <>
  <SignedOut>
    <div>Please sign in</div>
  </SignedOut>
  <SignedIn>
    <Images/>
  </SignedIn>
  </>
)
}
