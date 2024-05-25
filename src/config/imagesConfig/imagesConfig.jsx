import { graphql, useStaticQuery } from "gatsby";

const ImagesConfig = () => {
    const data = useStaticQuery(graphql`
        query {
            becdex: file(relativePath: { eq: "projects/becdex.png" }) {
                childImageSharp {
                    fixed(width: 363, height: 192) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            theblue: file(relativePath: { eq: "projects/theblue.png" }) {
                childImageSharp {
                    fixed(width: 363, height: 192) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            burgerkapten: file(relativePath: { eq: "projects/burgerkapten.png" }) {
                childImageSharp {
                    fixed(width: 363, height: 192) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            homify: file(relativePath: { eq: "projects/homify.png" }) {
                childImageSharp {
                    fixed(width: 363, height: 192) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            profile: file(relativePath: { eq: "projects/profile.png" }) {
                childImageSharp {
                    fixed(width: 363, height: 192) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            kasir: file(relativePath: { eq: "projects/kasir.png" }) {
                childImageSharp {
                    fixed(width: 363, height: 192) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            arsip1: file(relativePath: { eq: "projects/arsip1.png" }) {
                childImageSharp {
                    fixed(width: 363, height: 192) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            rdailymart: file(relativePath: { eq: "projects/rdailymart.png" }) {
                childImageSharp {
                    fixed(width: 363, height: 192) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            liniearRegression: file(relativePath: { eq: "projects/liniearRegression.jpg" }) {
                childImageSharp {
                    fixed(width: 363, height: 192) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            chatApp: file(relativePath: { eq: "projects/chatapp.png" }) {
                childImageSharp {
                    fixed(width: 363, height: 192) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    return data;
}

export default ImagesConfig;
