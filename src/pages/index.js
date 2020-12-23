import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Covid19Banner from "../components/covid19Banner"
import RehabCenter from "../components/rehabCenters"
import RehabListing from "../components/RehabListings"
import Image from "../components/image"
import VideoBanner from "../components/videoBanner"
import NewsLetter from "../components/newsLetter"
import FeaturedBlog from "../components/featuredBlog"; 
import Header from "../components/header"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <section><Header /></section>
    <section>
      <Covid19Banner />
    </section>
    <section>
      <RehabCenter />
    </section>
    <section>
      <RehabListing />
    </section>
    <section>
      <VideoBanner />
    </section>
    <section> 
      <NewsLetter />
    </section>
    <section> 
    <FeaturedBlog />
    </section>
  </Layout>
)

export default IndexPage

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
