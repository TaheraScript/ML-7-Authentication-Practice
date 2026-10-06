import MainNews from "@/components/MainNews";
import Marquee from "@/components/Marquee";
import NewsCard from "@/components/NewsCard";

interface IOtherSections{
  curationId : string,
  title:string,
  articles:{
    id : string,
    title:string,
    description:string,
    category:string,
    imageAlt:string,
    imageUrl:string
  }[]
}

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sections = data.data;
  const mainNews = sections[0].articles;
  const otherSections:IOtherSections[] = sections.slice(1);
  return (
    <div>
      <Marquee></Marquee>
      <div className="grid grid-cols-3 max-w-7xl mx-auto">
        <div className="col-span-2 ">
          <MainNews news={mainNews}></MainNews>
          <div className="grid gap-5 py-3">
            {otherSections.map((os) => (
              <div className="" key={os.curationId}>
                <h1 className="font-bold border-b-2 pb-1 border-red-600 mb-4">{os.title}</h1>
               <div className="grid grid-cols-3 gap-2">
                 {
                  os.articles.map((news) =>(
                    <NewsCard key={news.id} news={news}></NewsCard>
                  ))
                }
               </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-1 bg-amber-900 "></div>
      </div>
    </div>
  );
}
