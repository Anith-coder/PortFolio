import React from 'react'
import projectimg1 from '../assets/ecommerce-websites.jpg'
import projectimg2 from '../assets/food-ecommerce.jpg'
import projectimg3 from '../assets/website-blog.jpg'

const Projects = () => {
    const config = {
        projects : [
            {
            image: projectimg1,
            description: "A Ecommerce Website, Built With Mern Stack",
            link: "https://github.com/Anith-coder/PortFolio.git",
        },
            {
            image: projectimg2,
            description: "Food Ecommerce Website Like Swiggy, Built With React",
            link: "",
        },
            {
            image: projectimg3,
            description: "Basic Blog Website, Built WIth Js",
            link: "",
        }
        ]
    }
  return (
    <section id='projects' className='flex flex-col py-20 px-5 justify-center text-white bg-secondary font-hero-font'>
    <div className='w-full'>
    <div className='flex flex-col px-10 py-5'>
        <h1 className='text-5xl border-b-4 mb-5 w-[198px] font-bold border-primary'>Projects</h1>
        <p className='text-2xl pb-6 text-black'>These Are Some Of My Best Projects. I Have Built Thede With React, Mern And Tailwind CSS. Check Them Out.</p>
    </div>
    </div>
    <div className='w-full'>
    <div className='flex felx-col md:flex-row px-10 gap-5'>
        {config.projects.map((project)=> (
                    <div className='relative'>
                    <img className='h-[200px] w-[500px]' src={project.image}/>
                    <div className='project-dis'>
                        <p className='text-center px5 py-5'>{project.description}</p>
                        <div className='flex justify-center'>
                        <a className='button' target='_blank' href={project.link}>View Project</a>
                    </div>
                    </div>

                    </div>
        ))}

    </div>
    </div>
    </section>
  )
}

export default Projects
