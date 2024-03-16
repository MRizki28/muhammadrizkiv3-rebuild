import React, { lazy, Suspense } from "react";
import Navbar from "../../components/Navbar";
import Skeleton from "react-loading-skeleton";

const LazyProjectCard = lazy(() => import("./projectPages/ProjectCard"));

const SkeletonCard = () => (
    <div className="p-[46px] mt-[-35px] grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((_, index) => (
            <div key={index} className="transition duration-200 ease-in-out shadow-lg border-b-black border rounded-md overflow-hidden bg-white flex flex-col">
                <div className="transition duration-200 ease-in-out transform h-48 bg-cover bg-gray-200 overflow-hidden block">
                    <Skeleton height={192} />
                </div>
                <div className="p-6">
                    <div className="mb-3">
                        <Skeleton height={20} width={120} />
                    </div>
                    <div className="flex flex-row items-center mb-3 justify-between">
                        <div>
                            <div className="text-xs text-gray-500">
                                <Skeleton height={14} width={60} />
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 font-light font-sans">
                        <Skeleton count={2} />
                    </div>
                    <div>
                        <div className="font-sans">
                            <ul className="flex flex-row flex-wrap m-0 font-bold">
                                {[1, 2].map((_, idx) => (
                                    <li key={idx} className="flex flex-row items-center last:mr-0 mr-2 mb-2">
                                        <Skeleton height={16} width={60} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="flex flex-row items-center">
                            <Skeleton height={30} width={60} />
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

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
                <Suspense fallback={<SkeletonCard />}>
                    <LazyProjectCard />
                </Suspense>
            </div>
        </>
    )
}

export default Project;
