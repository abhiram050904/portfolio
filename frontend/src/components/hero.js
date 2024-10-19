import React from 'react';
import profile_pic from '../aa3.png';
import { motion } from "framer-motion";

const Hero = () => {
  const resumeFile = 'https://drive.google.com/file/d/1aQQEHhyqykmrPm0e6FbnQjQsgmE2qicE/view?usp=sharing';

  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>

        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>

            <motion.h1
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 2.5 }}
              className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl hover:scale-110 transform transition duration-200'
            >
              ABHIRAM GATTAMNENI
            </motion.h1>

            <motion.span
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 2.8 }}
              className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'
            >
              MERN Stack Developer
            </motion.span>

            <motion.p
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 3.1 }}
              className='my-2 max-w-xl py-6 font-light tracking-tight'
            >
             Hi, I'm Abhiram, a MERN stack developer and tech enthusiast pursuing my B.Tech at NIT Jamshedpur. I specialize in building dynamic, scalable web applications with a focus on creating seamless user experiences and efficient backend solutions. Passionate about innovation, I'm always eager to take on new challenges and grow as a developer in the ever-evolving tech landscape.


            </motion.p>

            <motion.a
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -200 }}
              transition={{ duration: 4 }}
              href={resumeFile} 
              target='_blank' 
              rel='noopener noreferrer'
              className='inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-green-700 hover:scale-125 transform transition duration-200'
            >
              Download My Resume
            </motion.a>
          </div>
        </div>

        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center'>
            <motion.img
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 600 }}
              transition={{ duration: 2 }}
              src={profile_pic}
              alt='Profile picture'
              className='rounded-full object-cover w-100 h-100 lg:w-100 lg:h-100'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
