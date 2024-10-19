import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { SiExpress } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import {FaGithub} from 'react-icons/fa';
import { PiFileCpp } from "react-icons/pi";
import { animate, motion } from "framer-motion"

const iconvariants=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
    }
})
const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className='my-20 text-center text-4xl'>Technologies</motion.h1>
      
      <motion.div
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1.5}}
      className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div
        variants={iconvariants(2.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiMongodb className='text-7xl text-green-400'/>
        </motion.div>
        <motion.div
        variants={iconvariants(5)}
        initial="initial"
        animate="animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiExpress className='text-7xl text-yellow-400'/>
        </motion.div>
        <motion.div
        variants={iconvariants(6)}
        initial="initial"
        animate="animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>
          <RiReactjsLine className='text-7xl text-cyan-400'/>
        </motion.div>
        <motion.div
        variants={iconvariants(4)}
        initial="initial"
        animate="animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaNodeJs className='text-7xl text-green-400'/>
        </motion.div>
        <motion.div
        variants={iconvariants(3)}
        initial="initial"
        animate="animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>
          <DiMysql className='text-7xl text-cyan-100'/>
        </motion.div>
        <motion.div
        variants={iconvariants(6)}
        initial="initial"
        animate="animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>
          <PiFileCpp className='text-7xl text-cyan-400'/>
        </motion.div>
        <motion.div
        variants={iconvariants(6)}
        initial="initial"
        animate="animate"
         className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaGithub className='text-7xl text-cyan-400'/>
        </motion.div>
      </motion.div>




      <motion.div
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:100}}
      transition={{duration:2.5}}
      className='flex items-center justify-center mt-20'>
        <div className='relative w-80 h-80 rounded-full border-4 border-purple-500'>
          
          <div className='absolute inset-0 flex items-center justify-center'>
            <p className='text-xl font-bold text-purple-600'>My Skills</p>
          </div>

          
          <div className='absolute top-0  left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <span className='text-sm font-semibold bg-red-500 p-2 w-24 h-24 flex items-center justify-center rounded-full'>DBMS</span>
          </div>
          <div className='absolute top-1/4 left-full transform -translate-x-1/2'>
            <span className='text-sm font-semibold bg-green-500 p-2 w-24 h-24 flex items-center justify-center rounded-full'>Operating System</span>
          </div>
          <div className='absolute top-[72%] left-[80%] transform -translate-x-1/2'>
            <span className='text-sm font-semibold bg-blue-500 p-2 w-24 h-24 flex items-center justify-center rounded-full'>Computer Networking</span>
          </div>
          <div className='absolute bottom-[-3%] left-[25%] transform -translate-x-1/2'>
            <span className='text-sm font-semibold bg-yellow-500 p-2 w-24 h-24 flex items-center justify-center rounded-full'>Problem Solving</span>
          </div>
          <div className='absolute top-[25%] left-[-5%] transform -translate-x-1/2'>
            <span className='text-sm font-semibold bg-red-500 p-2 w-24 h-24 flex items-center justify-center rounded-full'>MERN Stack</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Technologies;
