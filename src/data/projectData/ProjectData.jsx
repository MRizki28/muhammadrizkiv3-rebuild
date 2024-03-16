import ImagesConfig from "../../config/imagesConfig/imagesConfig";

const ProjectData = () => {
    const data = ImagesConfig();
    const projects = [
        {
            img: data.liniearRegression.childImageSharp.fixed,
            title: 'Liniear Regression',
            year: "Mar 2024",
            description: 'Simple Machine Learning Liniear Regression',
            url: 'https://github.com/MRizki28/linear-regression',
            "technology": [
                "Python",
                "ML"
            ]
        },
        {
            img: data.rdailymart.childImageSharp.fixed,
            title: 'Rdaily Mart',
            year: "Jan 2024",
            description: 'Rdaily mart is a supermarket platform that was built with the aim of providing the information the public needs.',
            url: 'https://rdaily-market.vercel.app/',
            "technology": [
                "React Js",
                "TypeScript",
                "Tailwinds"
            ]
        },
        {
            img: data.kasir.childImageSharp.fixed,
            title: 'POS (Point Of Sale)',
            year: "Aug 2023",
            description: 'A POS (Point Of Sale) is a cashier application for a printing company, where I work on several features and the most impressive is finance ',
            url: '#',
            "technology": [
                "Laravel",
                "Jquery",
                "API"
            ]
        },
        {
            img: data.arsip1.childImageSharp.fixed,
            title: 'SIMAK (Sistem Management Arsip)',
            year: "Aug 2023",
            description: 'SIMAK is an archive management application managed by a government agency, namely Kawatuna sub-district',
            url: 'https://github.com/KKLP-DEV/kelurahan-kawatuna-l9',
            "technology": [
                "Laravel",
                "Jquery",
                "API"
            ]
        },
        {
            img: data.profile.childImageSharp.fixed,
            title: 'Portofolio',
            year: "Jul 2023",
            description: 'This a portofolio ',
            url: 'https://burger-kapten.vercel.app/',
            "technology": [
                "React Js",
                "Gatsby Js",
                "Tailwinds"
            ]
        },
        {
            img: data.burgerkapten.childImageSharp.fixed,
            title: 'Burger King Clone page',
            year: "Jul 2023",
            description: 'Testing a Burger King page clone using React JS and Tailwinds',
            url: 'https://burger-kapten.vercel.app/',
            "technology": [
                "React Js",
                "Tailwinds"
            ]
        },
        {
            img: data.homify.childImageSharp.fixed,
            title: 'Homifyid',
            year: "Jul 2023",
            description: 'Homifyid a platform for information house',
            url: 'https://homifyid.vercel.app/',
            "technology": [
                "React Js",
                "Tailwinds"
            ]
        },
        {
            img: data.theblue.childImageSharp.fixed,
            title: 'Backend for The blue economist',
            year: "April 2023",
            description: 'The blue economist is a membership platform specialized in the global maritime sector, In the Blue Economist project, I, as the backend, am responsible for providing the API needed by the frontend.',
            url: 'https://theblueeconomist.org',
            "technology": [
                "Laravel",
                "Jquery",
                "API"
            ]
        },
        {
            img: data.becdex.childImageSharp.fixed,
            title: 'Becdex',
            year: "May 2023",
            description: 'Becdex is a platform providing special certificate services in the maritime sector managed by Maritime Muda Nusantara.',
            url: 'https://becdex.com',
            "technology": [
                "CI3",
                "Certification"
            ]
        },
    ];

    return projects

}

export default ProjectData