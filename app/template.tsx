'use client'
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Template({children}:any){

    return(
        <motion.div className="w-auto"
            initial={{opacity:0 }}
            animate={{opacity:1}}
            transition={{ease:'easeInOut', duration:1}}
        >
            {children}
        </motion.div>
    )
}

