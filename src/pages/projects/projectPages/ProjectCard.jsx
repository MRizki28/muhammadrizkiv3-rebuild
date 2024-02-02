import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const ProjectCard = () => {
    return (
            <div className="p-[46px] mt-[-35px] grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <div className="transition duration-200 ease-in-out shadow-card rounded-md overflow-hidden bg-white flex flex-col">
                    <div className="transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 h-48 bg-cover bg-gray-200 overflow-hidden block  cursor-pointer">
                        <a href="">
                            <StaticImage src="../../../images/rizki.png" alt="1" class="h-full"></StaticImage>
                        </a>

                    </div>
                    <div>
                        testing
                    </div>
                </div>
            </div>

    )
}

export default ProjectCard