import { headers } from "next/headers";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic"




// server components
export default async function HomePage() {
  headers();

// Here we calling the database directly 
  const post = await db.query.posts.findMany();
  console.log(post)
  return (
  <>
  <main className="flex flex-wrap gap-10 items-center justify-center">

    {/* {post.map((ele)=><div key={ele.id}>{ele.name}</div>)} */}
    {post.map((ele,index)=>{
      return(
        <>
        <div className="w-[40rem] " key={ele.id+"-"+index}>
          <img src={ele?.imageUrl} alt="img" />

        </div>
        </>
      )
    })}
    </main>

  </> 
  );
}
