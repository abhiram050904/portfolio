import React from 'react';
import { motion } from "framer-motion"
const Education = () => {
  const edu = [
    {
      year: "2022 - Present",
      role: "B.Tech in Electronics and Communications Engineering",
      school: "National Institute of Technology Jamshedpur",
      percentage: "8.2 CGPA"
    },
    {
      year: "2022",
      role: "12th Standard (ICSE Board)",
      school: "Loyola Public School",
      percentage: "93.4%"
    },
    {
      year: "2020",
      role: "10th Standard (ICSE Board)",
      school: "Loyola Public School",
      percentage: "94.1%"
    }
  ];

  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className='my-20 text-center text-4xl'>Education</motion.h1>
      <div>
        {edu.map((educ, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <div className='w-full lg:w-1/4'>
              <motion.p
              whileInView={{opacity:1,x:0}}
              initial={{opacity:0,x:-100}}
              transition={{duration:2.5}}
              className='mb-2 text-sm text-neutral-400'>{educ.year}</motion.p>
            </div>
            <div className='w-full max-w-xl lg:w-3/4'>
              <motion.h6
              whileInView={{opacity:1,y:0}}
              initial={{opacity:0,y:100}}
              transition={{duration:2.5}}
              className='mb-2 font-semibold'>{educ.role}</motion.h6>
              <motion.span
              whileInView={{opacity:1,y:0}}
              initial={{opacity:0,y:-100}}
              transition={{duration:2.5}}
              className='text-lg text-red-300'>{educ.school}</motion.span> {/* Increased font size */}
             </div>
            <div className='w-full lg:w-1/4'>
            <motion.p 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:2.5}}
            className='text-green-500'>{educ.percentage}</motion.p> {/* Changed color to red */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
