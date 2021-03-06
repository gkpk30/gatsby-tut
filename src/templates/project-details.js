import React from "react"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "../styles/project-details.module.css"
import { graphql } from 'gatsby'



 const ProjectDetails = ({ data }) => {
  const featuredImg=getImage(data.markdownRemark.frontmatter.featuredImg.childImageSharp.gatsbyImageData)
  const { html } = data.markdownRemark
  const { title, stack} = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={styles.featured}>
          {/* <Img fluid={featuredImg.childImageSharp.fluid} /> */}
          <GatsbyImage image={featuredImg} alt="banner" />
        </div>
        <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}
 
export default ProjectDetails





export const query = graphql`
query ProjectDetails($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    frontmatter {
      stack
      title
      featuredImg {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
}
`



