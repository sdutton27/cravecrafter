import React from 'react'
import { motion } from 'framer-motion'

const animations = {
    // initial: {opacity: 0, x: 100},
    // animate: {opacity: 1, x: 0},
    // exit: {opacity: 0, x: -100} //unmount
    initial: {opacity: .3},
    animate: {opacity: 1},
    exit: {opacity: 0} //unmount
}

export default function AnimatedPage({children}) {
  return (
    <motion.div variants={animations} initial="initial" animate="animate" 
        exit="exit" transition={{duration: .6}}>
        {children}
    </motion.div>
  )
}
