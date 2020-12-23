import React from "react"
import { Carousel, Container } from "react-bootstrap"

const carouselHeader = ({ post }) => {
  console.log(post, ">>>>")

  return (
    <div style={{
       marginTop: `5%`,
       marginLeft: `-10%`
    }}>
    <Container fluid style={{
      maxWidth: `600px`
    }}>
    <Carousel
        style={{
          marginTop: `6%`,
          height: `400px`,
        }}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={post.featured_media.localFile.url}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={post.featured_media.localFile.url}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={post.featured_media.localFile.url}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
      
    </div>
  )
}

export default carouselHeader
