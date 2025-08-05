"use client"

import React, { useEffect } from 'react';
import { Hori, Vert } from '../components/svg';





export default function Arrow({pos,size}:any){
// useEffect(()=>{
//     document.addEventListener("mousemove", arrow);

  
   
// },[])

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


  
    return(
    
        <div className="col-span-1 row-span-1 relative">
               <Hori className="w-full h-auto arrow absolute bottom-0 left-0 scale-70 line" fill={`#ffffff`} />
            <Vert className="w-auto h-full scale-70 arrow absolute right-0 lineVert" fill={`#ffffff`} data-add={true} />
        </div>

        
    
    );
}