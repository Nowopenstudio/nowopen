import { getData } from "../util/sanity";
import Grid from "./grid";
import Map from "./map";





export default async function Home() {

    const query = await getData(`{
    'data':*[_type=='work'] | order(orderRank){title,client,locX,locY,loc,"slug":slug.current,cover{"image":image.asset->url, "vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio},head{"image":image.asset->url, "vid":video.asset->playbackId, "ratio":video.asset->data.aspect_ratio}}
    }`)
 const {data} = query.data  
  return (
    <main className="fixed top-0 left-0 w-[100vw] h-[100dvh] bg-black overflow-hidden">
       <Map data={data}/>
       <Grid/>
    </main>
  );
}

