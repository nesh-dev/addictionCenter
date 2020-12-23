import React from "react"
import { Row, Col, Container } from "react-bootstrap"

export default function covid19Banner() {
  return (
    <>

      <div
        style={{
          width: `100%`,
          fontFamily: `Montserrat`,
          height: `100%`
        }}
      >
        <Row>
          <Col lg={6} style={{
                color: `#ffff`,
                backgroundColor: `#56bc82`,
         
              }}>

              <Container fluid style={{
                maxWidth: `800px`
              }}>
              <div
                style={{
                  fontSize: `36px`,
                  textAlign: `center`,
                  marginTop: `30px`,
                }}
              >
                GET HELP DURING COVID-19
              </div>
              <div
                style={{
                  textAlign: `center`,
                  margin: `30px`,
                  marginTop: `50px`,
                  fontSize: `18px`,
                }}
              >
                Coronavirus should be a unique opportunity for you to seek
                treatment. If your job, classes, and social life have held you
                back from getting help, why not give rehab a chance during
                isolation? With just 30 days at a professional rehab center, you
                can get clean and sober, start therapy, join a support group,
                and learn ways to manage your cravings.
              </div>
              </Container>
          </Col>
        
          <Col lg={6} xs={12} style={{
                backgroundColor: `#79b091`,

              }}>
               <Container fluid style={{
                maxWidth: `800px`
              }}>
            <Row>
            <Col lg={{ span: 4, offset: 4 }}  md={{ span: 5, offset: 3}} xs={{ span: 6, offset: 3}} >
            
            <button
                style={{
                  width: `100%`,
                  height: `76px`,
                  border: `solid 1px #ffffff`,
                  backgroundColor: `var(--tea)`,
                  color: `#ffff`,
                  fontSize: `18px`,
                  fontWeight: `bold`,
                  marginTop: `40%`
                }}
              >
                Learn More
              </button>
              </Col>
            </Row>
              
        </Container>
          </Col>
        </Row>
      </div>
    </>
  )
}
