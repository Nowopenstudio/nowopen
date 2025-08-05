"use client"

import React, { useEffect } from 'react';
import { Cross } from './svg';





export default function CrossX({pos,size,count}:any){



  
    return(
    
        <div className="col-span-1 row-span-1 relative">
               <Cross className="w-[25px] h-[25px] absolute bottom-0 left-0 fadeOn" style={{animationDelay:`${count*.02}s`}}/>
        </div>

        
    
    );
}