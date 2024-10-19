import React from 'react'
import images from '../chat.jpeg'
import task from '../task.png'
import expense from '../expense.jpg'
import ecommerce from '../ecommerce.png'
import { motion } from "framer-motion"
const Projects = () => {
    const pros = [
        {
            name: "Task Scheduler",
            image: task,
            description: "A web application that allows users to create, manage, and prioritize tasks efficiently. Users can set deadlines, categorize tasks, and receive reminders, helping them stay organized and on track.",
            techStack: ["React", "Node.js", "Express", "MongoDB"],
            previewLink: "https://example.com/task-scheduler",
            githubLink: "https://github.com/username/task-scheduler"
        },
        {
            name: "Real-Time Chat Application",
            image: images,
            description: "An interactive chat application that enables users to communicate in real-time. Features include user authentication, chat rooms, and message notifications, allowing for seamless conversations across devices.",
            techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
            previewLink: "https://example.com/real-time-chat",
            githubLink: "https://github.com/username/real-time-chat"
        },
        {
            name: "Expense Tracker",
            image: expense,
            description: "A personal finance application designed to help users track their expenses and manage their budgets effectively. Users can input their expenses, categorize them, and visualize spending trends over time.",
            techStack: ["React", "Node.js", "Express", "MongoDB"],
            previewLink: "https://example.com/expense-tracker",
            githubLink: "https://github.com/username/expense-tracker"
        },
        {
            name: "E-commerce Platform",
            image: ecommerce,
            description: "An online shopping platform that provides users with a seamless shopping experience. Features include product browsing, cart management, user authentication, and secure payment processing.",
            techStack: ["React", "Node.js", "Express", "MongoDB"],
            previewLink: "https://example.com/e-commerce",
            githubLink: "https://github.com/username/e-commerce"
        }
    ];

    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h1
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:1.5}}
            className='my-20 text-center text-4xl'>Projects</motion.h1>
            <div>
                {pros.map((projec, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div
                        whileInView={{opacity:1,x:0}}
                        initial={{opacity:0,x:-100}}
                        transition={{duration:2.5}}
                        className='w-full lg:w-1/4'>
                            <img src={projec.image} alt={projec.name} width={150} height={150} className='mb-6 rounded' />
                        </motion.div>
                        <motion.div 
                        whileInView={{opacity:1,y:0}}
                        initial={{opacity:0,y:100}}
                        transition={{duration:2.5}}
                        className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-2 font-semibold'>{projec.name}</h6>
                            <p className='mb-4 text-neutral-400'>{projec.description}</p>
                            {projec.techStack.map((tech, index) => (
                                <span key={index} className='mr-2 rounded bg-red-900 px-2 py-1 text-sm font-medium'>{tech}</span>
                            ))}
                        </motion.div>
                        <motion.div 
                        whileInView={{opacity:1,x:0}}
                        initial={{opacity:0,x:100}}
                        transition={{duration:2.5}}
                        className='mt-10'>
                                <a href={projec.previewLink} target="_blank" rel="noopener noreferrer" className='mr-2 rounded bg-green-900 px-2 py-1 text-sm font-medium'>Preview</a>
                                <a href={projec.githubLink} target="_blank" rel="noopener noreferrer" className='mr-2 rounded bg-green-900 px-2 py-1 text-sm font-medium'>GitHub</a>
                            </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
