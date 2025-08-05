'use client'

import { animate, useMotionValue, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import Image from "next/image";
import { useEffect} from "react";
import { Reveal } from "../util/reveal";
import { SwitchContent } from "../util/contentSwitch";


export default function Scroller({data,time}:any) {
    const [ref, {width}] = useMeasure();
const xTranslation = useMotionValue(0)
useEffect(()=>{
    const finalPos = -width / 2 ;
  
  
    const controls = animate(xTranslation, [0, finalPos],{
      ease:'linear', duration:time, repeat:Infinity, repeatType:'loop', repeatDelay: 0
    })
  
    return controls.stop;
  }, [xTranslation, width])
  
  return (
   
    
      
        <motion.div  className="absolute flex left-0 top-0 items-center " ref={ref} style={{x:xTranslation}}>
            
           
           
                              {data.map((item:any,i:number)=>{
                                   return(
                                       <div key={`new-${i}`} className="w-[20vw]  fadeFull p-2" style={{animationDelay:`${i*.2}s`}}>
                                           <div className="aspect-video relative">
                                               <SwitchContent work={item.cover} title={item.title} ratio={item.cover.ratio} cover size={'25vw'}/>
                                           </div>
                                           <div className="p-2 text-white bg-black uppercase">
                                               <p>{item.title}</p>
                                                <p>{item.client} - {item.loc}</p>
                                           </div>
                                       </div>
                                   )
                               })}
                               {data.map((item:any,i:number)=>{
                                   return(
                                       <div key={`new-${i}`} className="w-[20vw]  fadeFull p-2" style={{animationDelay:`${i*.2}s`}}>
                                           <div className="aspect-video relative">
                                               <SwitchContent work={item.cover} title={item.title} ratio={item.cover.ratio} cover size={'25vw'}/>
                                           </div>
                                           <div className="p-2 text-white bg-black uppercase">
                                               <p>{item.title}</p>
                                                <p>{item.client} - {item.loc}</p>
                                           </div>
                                       </div>
                                   )
                               })}
                               {data.map((item:any,i:number)=>{
                                   return(
                                       <div key={`new-${i}`} className="w-[20vw]  fadeFull p-2" style={{animationDelay:`${i*.2}s`}}>
                                           <div className="aspect-video relative">
                                               <SwitchContent work={item.cover} title={item.title} ratio={item.cover.ratio} cover size={'25vw'}/>
                                           </div>
                                           <div className="p-2 text-white bg-black uppercase">
                                               <p>{item.title}</p>
                                                <p>{item.client} - {item.loc}</p>
                                           </div>
                                       </div>
                                   )
                               })}
                               {data.map((item:any,i:number)=>{
                                   return(
                                       <div key={`new-${i}`} className="w-[20vw]  fadeFull p-2" style={{animationDelay:`${i*.2}s`}}>
                                           <div className="aspect-video relative">
                                               <SwitchContent work={item.cover} title={item.title} ratio={item.cover.ratio} cover size={'25vw'}/>
                                           </div>
                                           <div className="p-2 text-white bg-black uppercase">
                                               <p>{item.title}</p>
                                                <p>{item.client} - {item.loc}</p>
                                           </div>
                                       </div>
                                   )
                               })}
                               {data.map((item:any,i:number)=>{
                                   return(
                                       <div key={`new-${i}`} className="w-[20vw]  fadeFull p-2" style={{animationDelay:`${i*.2}s`}}>
                                           <div className="aspect-video relative">
                                               <SwitchContent work={item.cover} title={item.title} ratio={item.cover.ratio} cover size={'25vw'}/>
                                           </div>
                                           <div className="p-2 text-white bg-black uppercase">
                                               <p>{item.title}</p>
                                                <p>{item.client} - {item.loc}</p>
                                           </div>
                                       </div>
                                   )
                               })}
                               {data.map((item:any,i:number)=>{
                                   return(
                                       <div key={`new-${i}`} className="w-[20vw]  fadeFull p-2" style={{animationDelay:`${i*.2}s`}}>
                                           <div className="aspect-video relative">
                                               <SwitchContent work={item.cover} title={item.title} ratio={item.cover.ratio} cover size={'25vw'}/>
                                           </div>
                                           <div className="p-2 text-white bg-black uppercase">
                                               <p>{item.title}</p>
                                                <p>{item.client} - {item.loc}</p>
                                           </div>
                                       </div>
                                   )
                               })}
                               

                          
           
        
         </motion.div>
    
  


);
}
