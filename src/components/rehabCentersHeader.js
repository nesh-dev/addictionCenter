import React from "react"
import { Col, Row, Container } from "react-bootstrap"; 
import  CarouselHeader from "../components/carouselHeader";

const rehabCentersHeader = ({ post }) => {
    
  return (
    <div>
      <div style={{
          marginTop: `5%`,
         backgroundColor: `#79B091`,
          height: `100%`
      }}>
      <Container fluid style={{
          maxWidth: `1600px`
      }}>
        <Row>
       
          <Col lg={6}>
          <Container fluid style={{
            maxWidth: `80%`
          }}> 
                <h1 style={{
                    marginTop: `20%`,
                    fontFamily: `Montserrat`,
                    fontStyle: `normal`,
                    fontWeight: `bold`,
                    fontSize: `50px`,
                    lineHeight: `70px`,
                    color:`#ffff`
                }}> 
                    {post.title}
                </h1>

                <div
                style={{
                  color: `#fff`,
                  fontFamily: `Montserrat`,
                  fontWeight: `bold`,
                  fontSize: `20px`,
                }}
                ><span
                style={{
                  color: `#ffff`,
                  marginRight: `20px`
                  
                }}
                className="material-icons"
              >
                map 
              </span>
              Qunicy MA
              </div>
              <button
                style={{
                  height: `70px`,
                  border: `solid 1px #ffffff`,
                  backgroundColor: `var(--tea)`,
                  color: `#ffff`,
                  fontSize: `18px`,
                  fontWeight: `bold`,
                  width: `40%`,
                  marginTop: `10%`
                }}
              >
                Visit Website
              </button>
            </Container>
          </Col>
          <Col lg={6}>
            <CarouselHeader post={post}/>
          </Col>
        </Row>
        <Row> 
        <Col lg={{span: 6, offset: 3}}>
        <div
          style={{
            backgroundSize: `cover`,
            overflow: `hidden`,
            marginLeft: `5%`,
            marginBottom: `5%`,

            backgroundColor: `#ffff`,
            height: `100px`,
            borderRadius: `10px`,
            display: `flex`,
          }}
        >
          <div
            style={{
              width: `50%`,
              background: `rgba(229, 143, 58, 0.71)`,
              zIndex: `5`,
              display: `flex`,
              flexDirection: `column`,
              alignContent: `center`,
              alignItems: `center`,
              justifyContent: `center`,
            }}
          >
            <div
              style={{
                color: `#ffff`,
                fontFamily: `Montserrat`,
                fontStyle: `normal`,
                fontWeight: `500`,
                fontSize: `24px`,
                lineHeight: `29px`,
                textAlign: `center`,
                marginLeft: `10%`,
              }}
            >
              Make A Call
            </div>
            <div
              style={{
                color: `#ffff`,
                fontFamily: `Montserrat`,
                fontStyle: `normal`,
                fontWeight: `500`,
                fontSize: `24px`,
                lineHeight: `29px`,
                marginLeft: `10%`,
              }}
            >
              (866) 661-9843
            </div>
          </div>
          <div
            style={{
              display: `flex`,
              flexDirection: `row`,
            }}
          >
            <div
              style={{
                marginLeft: "2%",
                display: `flex`,
                flexDirection: `column`,
                padding: `10px`,
                marginRight: `30px`
              }}
            >
              <div
                style={{
                  textAlign: `center`,
                  fontSize: `14px`,
                  fontSize: `24px`,
                }}
              >
                Request A Call
              </div>
              <div
                style={{
                  marginTop: `10px`,
                }}
              >
                <input
                  style={{
                    border: ` solid 1px rgba(229, 229, 229, 0.92)`,
                    borderRadius: `10px`,
                    width: `250px`,
                    height: `40px`,
                    textAlign: `center`,
                  }}
                  placeholder={`(__)(__)-(__)`}
                />
              </div>
            </div>
            <div
              style={{
                height: `50px`,
                width: `50px`,
                borderRadius: ` 50%`,
                backgroundColor: `#56bc82`,
                marginTop: `10%`,
                display: `flex`,
                flexDirection: `column`,
                marginTop: `25px`,
              }}
            >
              <span
                style={{
                  color: `#ffff`,
                  //  marginLeft: `30px`
                  marginLeft: `10px`,
                  marginTop: `10px`,
                }}
                className="material-icons"
              >
                local_phone
              </span>
            </div>
          </div>
        </div>  
        </Col> 
        </Row>
     
        </Container>
      </div>
    </div>
  )
}

export default rehabCentersHeader
