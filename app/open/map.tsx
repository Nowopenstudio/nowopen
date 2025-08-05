"use client"
import { useEffect, useRef, useState } from "react";
import { OpenLogo, OpenMap } from "./svg";
import useResize from "../util/useResize";
import React from "react";
import { SwitchContent } from "../util/contentSwitch";
import Scroller from "../components/scroller";
import { Logo } from "../components/svg";





export default function Map({data}:any){
    const {winX, winY} = useResize() 
    // let mousePos = {x: 0.0, y: 0.0 }
    const ref = useRef<HTMLDivElement>(null)
    let timer:any = null;
    const [active, setActive] = useState(false)
      const [info, setInfo] = useState(false)
      const [skrink, setSkrink] = useState(false)
   const [mousePos, setMousePos] = useState({ x: 0.0, y: 0.0 });
    const [pan,setPan]=useState({ x: 0.0, y: 0.0 });
   

    useEffect(()=>{
        window.addEventListener('mousemove',trackMouse);

        return () => {
          window.removeEventListener('mousemove',trackMouse);
        };
    },[])

    useEffect(()=>{
        clearTimeout(timer)
       if(skrink && ref.current){ 
        
         timer = setTimeout(()=>{
               const speed = 25
              let cx =  Math.floor(pan.x - mousePos.x*speed)
           let cy =  Math.floor(pan.y - mousePos.y*speed)
            if(cx > 0) cx=0
            if(cy > 0) cy=0
            if(cx < ((-ref.current!.offsetWidth+winX))) cx=-ref.current!.offsetWidth+winX
            if(cy < ((-ref.current!.offsetHeight+winY))) cy=-ref.current!.offsetHeight+winY
            console.log(mousePos)
        setPan({ x: cx, y: cy})
         },10)
       }
       else{clearTimeout(timer)}
    },[skrink,pan])


  const toggle=()=>{
     
    setActive(!active)
    setPan({ x: 0.0, y: 0.0 })
  
  }

    const toggleInfo=()=>{
     
    setInfo(!info)

  
  }

    const trackMouse=(e:any)=>{
        const vx =  ((e.clientX - window.innerWidth/2)/window.innerWidth)
        const vy =  ((e.clientY - window.innerHeight/2)/window.innerHeight)
        setMousePos({x: vx, y: vy});
      console.log('move')
      
    }

    const deactivate=()=>{
      setInfo(false)
      setActive(false)
      setSkrink(false)
          setPan({ x: 0.0, y: 0.0 })

    }





  
    return(
    
      <React.Fragment>
              {data.length && skrink?(
                <div className="fixed p-2 top-0 left-0 z-[100] mix-blend-difference w-[100vw] flex justify-between items-center">
                  <Logo onClick={deactivate} className="h-[40px] w-auto"/>
                  <div><p onClick={toggleInfo} className="text-[#089ed6] uppercase nav">info</p></div>
                </div>
              ):('')}

              
                  <div onClick={toggleInfo} className={`fixed p-2 top-0 left-0 w-[100vw] h-[100dvh] z-[99] info ${info?'pointer-events-auto active':'pointer-events-none'}`} style={{backgroundColor:`rgba(0,0,0,.9)`}}>
                      <div className="w-1/2 absolute center-object text-[#089ed6] uppercase nav">
                      <p className="mb-4 nav">Open Area is live on ‘New Nature’ 24/7 365 days a year.</p>
<p className="nav">A video and content radio station that has a constant feed of the world’s most fascinating pioneers actively out there in the world discovering and re-writing what we mean when we say Nature. This is a place for people, brands, and mass discovery.</p>
                      </div>
                  </div>
             
            <div className="relative">
                  <div id="fullMap" ref={ref} className="map h-auto flex relative items-center  overflow-hidden z-40 " style={{width:skrink?winX*3:winX*6,scale:skrink?1:.1667,transformOrigin:`0 16.67%`,translate:`${skrink?`${pan.x}px`:'0'} ${skrink?`${pan.y}px`:'0'}`}} >
                    <div onTransitionEnd={active?(()=>setSkrink(true)):(undefined)} onClick={toggle} className={` overflow-hidden h-auto flex-shrink-0 openLogo ${active?'pointer-events-none':""}`} style={{opacity:skrink?0:1,width:winX*3,maxWidth:active?0:10000}} ><OpenLogo fill={skrink?"#EF03AC":"#089ed6"} className={`w-full h-auto`} style={{width:winX*3}}/></div>
                     <div className=" h-auto flex-shrink-0 relative" style={{width:winX*3}}><OpenMap fill={skrink?"#EF03AC":"#089ed6"} className={` w-full h-auto` } style={{width:winX*3}}/>
                     
                     {data.length && skrink?(
                    data.map((item:any,i:number)=>{
                        return(
                            <div key={`new-${i}`} className=" bg-black fadeFull absolute z-[60]" style={{top:item.locY, left:item.locX,width:(item.head.ratio.split(':')[0]/item.head.ratio.split(':')[1] > 1)?winX*.33:winX*.2,animationDelay:`${i*.2}s`}}>
                                <div className=" relative" style={{ aspectRatio:`${item.head.ratio.split(':')[0]}/${item.head.ratio.split(':')[1]}`}}>
                                    <SwitchContent work={item.head} title={item.title} ratio={item.head.ratio} cover size={'75vw'}/>
                                </div>
                                <div className="p-2 text-white relative uppercase title">
                                    <p>{item.title}</p>
                                     <p>{item.client}</p>
                                     <div className="absolute top-2 right-2"><p className="liveAnchor relative">Live from {item.loc}</p></div>
                                </div>
                            </div>
                        )
                    })
                  ):('')} 
                     </div>
                  </div>
            </div>
            <div className="fixed bottom-0 left-0 z-[70] w-[100vw] h-[332px]" >
              {data.length && skrink?(
                <Scroller data={data} time={20}/>):('')}
            </div>
      </React.Fragment>

        
    
    );
}