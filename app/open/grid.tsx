"use client"

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import useResize from '../util/useResize';
import CrossX from './cross';



export default function Grid({data}:any){
    const {winX, winY, mobile} = useResize();
    const [rows,setRows] = useState(0);
    const [cols,setCols] = useState(0);


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
      setCols(Math.ceil(winX/100))
      setRows(Math.ceil(winY/100))
    },[winX, winY])

    const grid=()=>{
      const boxes=[]
      for (let i = 0; i < (rows*cols); i++) {
       
          boxes.push(<CrossX count={i} key={`arrow-${i}`}/>)
    }
    return boxes
  }




    return(
     
        <React.Fragment>
          {rows && cols ?(
         <div className={` mix-blend-difference fixed top-0 left-0 w-[100vw] h-[100dvh] overflow-hidden z-[22] pointer-events-none`}>
           <div className="grid absolute center-object grid-cols-14 grid-rows-8 z-0"  style={{width:cols*100,height:rows*100}}>
              {grid()} 
           </div>
         </div>
 
      ):('')}
     
       </React.Fragment>
  
    )
  }

