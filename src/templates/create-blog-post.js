import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import RehabCenter from "../pages/rehabCenterPage"

export default function BlogPost({ data }) {
  console.log(data, "?>>>>>>>>>>>")
  const post = data.allWordpressPost.nodes[0]
  const category = data.allWordpressPost.nodes[0].categories[0].name
  console.log(category)

  const pageToRender = () => {
    switch (category) {
      case "Rehab Centers":
        return <RehabCenter post={post} />
        break
      default:
        break
    }
  }

  return (
    <Layout>
      <div>{pageToRender()}</div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    allWordpressPost(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
        categories {
          name
        }
        featured_media {
          localFile {
            absolutePath
            url
          }
        }
      }
    }
  }
`
