import React from 'react';
import profile_pic from '../aa4.png';
import { motion } from "framer-motion";
import { SiGeeksforgeeks, SiCodingninjas } from "react-icons/si";
import { TbBrandLeetcode } from "react-icons/tb";

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h2 className='my-20 text-center text-4xl'>
        About <span className='text-neutral-500'>Me</span>
      </h2>
      <div className='flex flex-wrap'>
        
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className='w-full lg:w-1/2 lg:p-8'
        >
         <div className='flex items-center justify-center'>
            <img
              src={profile_pic}
              alt='Profile picture'
              className='rounded-2xl object-cover w-50 h-50 lg:w-80 lg:h-80'
            />
          </div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className='mt-8 flex justify-center gap-8 text-6xl'
          >

            <a 
              href='https://www.naukri.com/code360/profile/858af9e7-084f-4258-915e-0e87d2998f27' 
              target='_blank' 
              rel='noopener noreferrer'
            >
              <SiCodingninjas className='rounded-2xl border-4 border-red-800 p-4 hover:scale-125 transform transition duration-200' />
            </a>
            
            <a 
              href='https://www.geeksforgeeks.org/user/abhiram050904/' 
              target='_blank' 
              rel='noopener noreferrer'
            >
              <SiGeeksforgeeks className='rounded-2xl border-4 border-green-800 p-4 hover:scale-125 transform transition duration-200' />
            </a>
            
            <a 
              href='https://leetcode.com/u/abhiram050904/' 
              target='_blank' 
              rel='noopener noreferrer'
            >
              <TbBrandLeetcode className='rounded-2xl border-4 border-yellow-800 p-4 hover:scale-125 transform transition duration-200' />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className='w-full lg:w-1/2'
        >
          <div className='flex justify-center lg:justify-start'>
          <p className='my-2 max-w-xl py-6'>
  Hi, I’m Abhiram Gattamneni, a B.Tech student in Electronics and Communications Engineering at NIT Jamshedpur with a passion for both front-end and back-end development. I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) to build efficient and scalable solutions. My technical skills also include C++, MySQL, and JavaScript, with a strong understanding of Data Structures, Databases, and Operating Systems.
  <br /><br />

  I enjoy developing real-time applications that address practical challenges. My recent projects include a real-time chat application and a task scheduler, both of which leverage modern technologies to enhance communication and task management. I also participate in competitive programming, having solved numerous DSA problems on platforms like CODE360 and GeeksforGeeks.
  <br /><br />

  Beyond coding, I value leadership and teamwork, having served as a Class Representative and contributed to web development for my college fest. In my free time, you’ll find me playing football or staying active through various exercises. I’m always eager to learn new technologies and collaborate on impactful projects that drive innovation.
</p>


          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
