"use client"

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import useResize from '../util/useResize';
import Arrow from './arrow';



export default function Arrows({data}:any){
    const {winX, winY, mobile} = useResize();
    const [follow, setFollow] = useState(false);
    const [rows,setRows] = useState(0);
    const [cols,setCols] = useState(0);

const startArrow =()=>{
  setFollow(true)
     const active = document.getElementsByClassName('active')
        if(active.length){
          active[0].classList.remove('active')
        }
  document.addEventListener("mousemove", arrow);
}
const arrow=(event:any)=>{

    const pupils = Array.from(document.getElementsByClassName('arrow') as HTMLCollectionOf<HTMLElement>); // Select all pupils
    pupils.forEach((pupil) => {
        const extra = pupil.getAttribute('data-add')
        console.log(extra)
        const eyeRect = pupil.getBoundingClientRect(); // Get eye position
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        // Calculate angle between mouse and eye center
        const radian = Math.atan2(event.clientX - eyeCenterX, event.clientY - eyeCenterY);
        const rotation = ((radian+(extra?(-1.5708*2):(-1.5708))) * (180 / Math.PI) * -1) // Convert to degrees

        console.log(rotation)
        pupil.style.transform = `rotate(${rotation}deg)`;
    });

}



    useEffect(()=>{
      setCols(Math.ceil(winX/300))
      setRows(Math.ceil(winY/300))
    },[winX, winY])

    const grid=()=>{
      const boxes=[]
      for (let i = 0; i < (rows*cols); i++) {
       
          boxes.push(<Arrow key={`arrow-${i}`}/>)
    }
    return boxes
  }

    const pauseArrow=(e:any)=>{
        setFollow(false)
        document.removeEventListener("mousemove", arrow);
        const active = document.getElementsByClassName('active')
        if(active.length){
          active[0].classList.remove('active')
        }
        e.currentTarget.classList.add('active')
        const item = e.currentTarget.getBoundingClientRect(); // Get eye position
        const centerX = item.left + item.width / 2;
        const centerY = item.top + item.height / 2;

        const pupils = Array.from(document.getElementsByClassName('arrow') as HTMLCollectionOf<HTMLElement>); // Select all pupils
    pupils.forEach((pupil) => {
        const extra = pupil.getAttribute('data-add')
        console.log(extra)
        const eyeRect = pupil.getBoundingClientRect(); // Get eye position
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        // Calculate angle between mouse and eye center
        const radian = Math.atan2(centerX - eyeCenterX, centerY - eyeCenterY);
        const rotation = ((radian+(extra?(-1.5708*2):(-1.5708))) * (180 / Math.PI) * -1) // Convert to degrees

        console.log(rotation)
        pupil.style.transform = `rotate(${rotation}deg)`;
    });
    }

    const resetArrow=()=>{
         setFollow(false)
         const active = document.getElementsByClassName('active')
        if(active.length){
          active[0].classList.remove('active')
        }
        document.removeEventListener("mousemove", arrow);
      const pupils = Array.from(document.getElementsByClassName('arrow') as HTMLCollectionOf<HTMLElement>); // Select all pupils
    pupils.forEach((pupil) => {
       
        pupil.style.transform = `rotate(${0}deg)`;
    });
    }
  
    return(
     
        <React.Fragment>
          {rows && cols ?(
         <div className={`fixed top-0 left-0 w-[100vw] h-[100dvh] overflow-hidden bg-black ${follow?`follow`:''}`}>
           <div className="grid absolute center-object grid-cols-7 grid-rows-5 z-0"  style={{width:cols*300,height:rows*300}}>
              {grid()} 
           </div>
           <div className="grid grid-cols-2 w-full h-full z-10">
            <div className="col-span-1 h-[50dvh] relative"><div onClick={pauseArrow} className="absolute center-object text-white clickItem"><h1 className="absolute center-object">1</h1></div></div>
             <div onClick={resetArrow}className="col-span-1 h-[50dvh] relative"></div>
              <div className="col-span-1 h-[50dvh] relative"  onClick={startArrow}></div>
               <div className="col-span-1 h-[50dvh] relative"><div onClick={pauseArrow} className="absolute center-object text-white clickItem"><h1 className="absolute center-object">2</h1></div></div>


           </div>
         </div>
 
      ):('')}
     
       </React.Fragment>
  
    )
  }

