import React from "react";
import Navbar from "../../components/Navbar";
import ProjectCard from "./projectPages/ProjectCard";

const Project = () => {
    return (
        <>
            <div className="max-w-screen-xl self-stretch m-auto w-full">
                <Navbar></Navbar>
                <div className="px-6 sm:px-12 py-6">
                    <div className="flex flex-row items-center">
                        <h1 className="text-3xl font-sans  mb-6 uppercase font-extrabold ">Projects</h1>
                    </div>
                </div>
                <ProjectCard></ProjectCard>
            </div>
        </>
    )
}

export default Project