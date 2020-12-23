import { flip } from "@popperjs/core"
import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import RehabCenterHeader from "../components/rehabCentersHeader"
import VideoBanner from "../components/videoBanner"; 
import MapPlacement from "../components/mapPlacement"

const rehabCenterPage = ({ post }) => {
  console.log(post, ">>>>>")
  return (
    <div>
      <section>
        <RehabCenterHeader post={post} />
      </section>
      <section>
      <MapPlacement />
      </section>
      <div>
        <Container
          fluid
          style={{
            maxWidth: `1000px`,
          }}
        >
          <h1> About {post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </Container>
      </div>
      <div>{/* <VideoBanner /> */}</div>
    </div>
  )
}

export default rehabCenterPage
