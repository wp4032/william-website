import React from 'react'
import { motion } from "framer-motion"
import './showcasepopup.css'


const ShowcaseBackdrop = ({ children, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className="william__showcase-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  )
}

export default ShowcaseBackdrop