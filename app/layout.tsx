import type { Metadata } from "next";
import "./globals.css";

import { getData, getWeather } from "./util/sanity";
import React from "react";
import SmoothScrolling from "./util/SmoothScrolling";



export const metadata: Metadata = {
  title: "SKETCHES",

};

export default async function RootLayout({

  children,
}: {
  children: React.ReactNode
}) {
    


  return (
    <html lang="en" >
     <SmoothScrolling>
        <body id="body" className="w-[100vw] relative">
          
          {children}
      
          </body>
         
     </SmoothScrolling>
    </html>
  )
}
