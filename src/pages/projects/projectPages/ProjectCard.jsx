import React from "react";
import Img from "gatsby-image";
import ProjectData from "../../../data/projectData/ProjectData";
const ProjectCard = () => {
    const projects = ProjectData()
    return (
        <div className="p-[46px] mt-[-35px] grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((item, index) => (
                <div key={index} className="transition duration-200 ease-in-out shadow-lg border-b-black border rounded-md overflow-hidden bg-white flex flex-col">
                    <div className="transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 h-48 bg-cover bg-gray-200 overflow-hidden block  cursor-pointer">
                        <Img fixed={item.img} alt="1" />
                    </div>
                    <div className="p-6" >
                        <div className="mb-3">
                            <h3 className="transition duration-200 ease-in-out flex flex-row items-center hover:text-red-600 text-xl font-bold ">🤖 {item.title}</h3>
                        </div>
                        <div className="flex flex-row items-center mb-3 justify-between">
                            <div>
                                <div className="text-xs text-gray-500">
                                    <div className="flex flex-row items-center ">
                                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                            <line x1="16" y1="2" x2="16" y2="6"></line>
                                            <line x1="8" y1="2" x2="8" y2="6"></line>
                                            <line x1="3" y1="10" x2="21" y2="10"></line>
                                        </svg>
                                        <div>{item.year}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3 font-light font-sans">
                            <p>{item.description}</p>
                        </div>
                        <div>
                            <div className="font-sans">
                                <ul className="flex flex-row flex-wrap m-0 font-bold">
                                    {item.technology.map((tech, idx) => (
                                        <li key={idx} className="flex flex-row items-center last:mr-0 mr-2 mb-2">
                                            <span className="inline-block bg-gray-200 rounded-sm px-2 py-1 text-xs font-normal last:mr-0">{tech}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="flex flex-row items-center">
                                <a href={item.url} target="_blank" rel="noreferrer" className="transition no-underline space-x-3 duration-200 ease-in-out flex flex-row items-center text-black hover:bg-black hover:text-white  mr-4 bg-white py-2 px-3 rounded shadow-sm border border-solid border-gray-300">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M133 440a35.37 35.37 0 01-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0135.77.45l247.85 148.36a36 36 0 010 61l-247.89 148.4A35.5 35.5 0 01133 440z"></path></svg>

                                    <span>Go</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProjectCard
