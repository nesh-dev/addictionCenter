import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"; 
import Covid19Banner from '../components/covid19Banner';
import RehabCenter from "../components/rehabCenters"

const IndexPage = ({ data }) => (
    <Layout>
      <SEO title="Home" />
{/*      
      <section>
        {data.allWpPost.nodes.map((post) => (
          <div className="post-preview" key={post.slug}>
            <Image className="featured-image" fluid={post.featuredImage.node.localFile.childImageSharp.fluid} /> // new
            <Link to={post.slug}>
              {post.title}
            </Link>
            <div className='excerpt' dangerouslySetInnerHTML={{ __html: post.excerpt }} /> // new
          </div>
        ))}
      </section> */}

      <section>
      <Covid19Banner />
      </section>
      <section> 
      <RehabCenter />
      </section>

    </Layout>
)

export default IndexPage;



export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date] }) {
        nodes {
            title
            excerpt
            slug
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    fluid {
                      src
                      aspectRatio
                      base64
                      originalImg
                      originalName
                      presentationHeight
                      presentationWidth
                      sizes
                      srcSet
                      srcSetWebp
                      srcWebp
                    }
                  }
                }
              }
            }
        }
    }
  }
`



