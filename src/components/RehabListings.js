import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Col, Row } from "react-bootstrap"
import { Link } from "gatsby"; 
import Boop from "../components/CreateBounce";


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
            slug
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

   

  return (
    <>
      <div
        style={{
          width: `100%`,
          backgroundColor: `#fff`,
          height: `100%`,
        }}
      >
      <Container fluid style={{
        maxWidth: `1600px`
      }}>
        <Row>
          {data.allWordpressPost.edges.map(post => (
            <>
              
                <Col lg={3} md={4} xs={6}>
                <Link to={post.node.slug}>
                <Boop rotation={3} timing={200}>

              
                  <div
                    key={post.node.id}
                    style={{
                      color: `black`,
                      border: `2px solid rgba(229, 229, 229, 0.92)`,
                      borderRadius: `35px`,
                      height: `450px`,
                      marginLeft: `5%`,
                      marginTop: `5%`,
                      marginRight: `5%`,
                      // maxWidth: `320px`,
                    }}
                  >
                    <div style={{}}>
                      {post.node.featured_media ? <img
                        style={{
                          borderRadius: `35px 35px 0px 0px`,
                          backgroundColor: `#ffffff`,
                          width: `100%`,
                          minHeight: `200px`,
                        }}
                        src={post.node.featured_media.localFile.url}
                        alt={"FeaturedImage"}
                      />: ''}
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
                          color: `#195EE4`,
                        }}
                        href="#"
                      >
                        Learn More{" "}
                        <span
                          style={{
                            color: `#195EE4`,
                            marginTop: `10px`,
                          }}
                          className="material-icons"
                        >
                          arrow_right_alt
                        </span>{" "}
                      </div>
                    </div>
                  </div>
                  </Boop>
                  </Link>
                </Col>
            </>
          ))}
        </Row>

        <Row
          style={{
            marginTop: `5%`,
          }}
        >
          <Col
            lg={{ span: 2, offset: 5 }}
            md={{ span: 6, offset: 3 }}
            xs={{ span: 8, offset: 2 }}
          >
            <button
              style={{
                borderRadius: `5px`,
                border: `1px solid #79B091`,
                backgroundColor: `#ffffff`,
                fontSize: `24px`,
                fontWeight: `normal`,
                marginBottom: `100px`,
                width: `100%`,
                height: `45px`,
                color: `#56bc82`,
              }}
            >
              {" "}
              View More{" "}
            </button>
          </Col>
        </Row>
        </Container>
      </div>
    </>
  )
}

export default RehabListings
