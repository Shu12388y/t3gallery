import Link from "next/link";

const image=[
  "https://images.pexels.com/photos/24838257/pexels-photo-24838257/free-photo-of-glacier.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/24568377/pexels-photo-24568377/free-photo-of-romanian-countryside.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/24864710/pexels-photo-24864710/free-photo-of-the-broad-museum-in-los-angeles.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/24864052/pexels-photo-24864052/free-photo-of-a-golden-building-sits-on-a-lake-in-japan.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
];


const ImageUrl = image.map((ele,index)=>({
id:index+1,
url:ele
}))


export default function HomePage() {
  return (
  <>
  <main className="flex flex-wrap gap-10 items-center justify-center">
    {[...ImageUrl,...ImageUrl,...ImageUrl].map((ele)=>{
      return(
        <>
        <div className="w-[40rem] " key={ele.id}>
          <img  src={ele.url} alt="img" />

        </div>
        </>
      )
    })}
    </main>

  </> 
  );
}
