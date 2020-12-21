import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const RehabListings = ({ children }) => {
  const data = useStaticQuery(graphql`
    query RehabListQuery {
      allWordpressPost(
        filter: { categories: { elemMatch: { name: { eq: "Rehab Centers" } } } }
      ) {
        edges {
          node {
            id
            title
            acf {
              location
              telephone
              levels_of_care
            }
            featured_media {
              localFile {
                absolutePath
                url
              }
            }
            categories {
              name
            }
          }
        }
      }
    }
  `)

  console.log(data.allWordpressPost.edges)

  return (
    <>
      <div
        style={{
          display: `flex`,
          flexDirection: `row`,
          justifyContent: `center`,
          backgroundColor: `#ffff`,
          height: `1000px`,
        }}
      >
        {data.allWordpressPost.edges.map(post => (
          <div
            key={post.node.id}
            style={{
              color: `black`,
              border: `2px solid rgba(229, 229, 229, 0.92)`,
              borderRadius: `35px`,
              height: `400px`,
              width: `250px`,
              marginLeft: `30px`,
              marginRight: `30px`,
            }}
          >
            <div style={{}}>
              <img
                style={{
                  borderRadius: `35px 35px 0px 0px`,
                  backgroundColor: `#ffffff`,
                }}
                src={post.node.featured_media.localFile.url}
                alt={"FeaturedImage"}
              />
            </div>
            <div className="imageContainer"></div>
            <div
              style={{
                textAlign: `center`,
                fontFamily: `Montserrat`,
                fontSize: `16px`,
                fontWeight: ` 600`,
                lineHeight: `22px`,
              }}
            >
              {" "}
              {post.node.title}{" "}
            </div>
            <div
              style={{
                textAlign: `center`,
              }}
            >
              <span
                style={{
                  color: `#56BC82`,
                  marginTop: `10px`,
                }}
                className="material-icons"
              >
                location_on
              </span>
              <span
                style={{
                  fontSize: `14px`,
                  color: `#9d9cb5`,
                }}
              >
                Quincy MA
              </span>
            </div>
            <div
              style={{
                letterSpacing: `normal`,
                textAlign: ` center`,
              }}
            >
              {post.node.acf.levels_of_care}
            </div>

            <div
              style={{
                letterSpacing: `normal`,
                textAlign: ` center`,
              }}
            >
              <span
                style={{
                  color: `#56BC82`,
                  marginTop: `10px`,
                }}
                className="material-icons"
              >
                local_phone
              </span>
              {post.node.acf.telephone}
            </div>
            <div>
              <div
                style={{
                  textAlign: `center`,
                }}
                href="#"
              >
                Learn More{" "}
                <span
                  style={{
                    color: `#56BC82`,
                    marginTop: `10px`,
                  }}
                  className="material-icons"
                >
                  arrow_right_alt
                </span>{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default RehabListings
