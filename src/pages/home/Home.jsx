import React from "react";
import Hero from "./homePages/Hero/Hero";
import Navbar from "../../components/Navbar";

const Home = () => {
    return (
        <div className="max-w-screen-xl self-stretch m-auto w-full">
            <Navbar></Navbar>
            <article className="px-6 sm:px-12 py-6">
                <Hero></Hero>
            </article>
        </div>
    )
}

export default Home;