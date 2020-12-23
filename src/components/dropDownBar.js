import React from "react"
import { Row, Col, Container, Navbar } from "react-bootstrap"
import { Link } from "gatsby"
const dropDownBar = ({ children, show }) => {
  return (
    <>
      <Navbar
        fixed="top"
        style={{
          display: show ? "block" : "none",
          backgroundColor: `#79B091`,
          marginTop: `5%`,
          height: `180px`,
          boxShadow:` 0 0 2px 0 rgba(0, 0, 0, 0.5)`
        }}
      >
        {" "}
        {children.map(child => (
          <Container
            fluid
            style={{
              maxWidth: `1600px`,
            }}
          >
            <Row>
              <Link key={child.id} to={child.path}>
                {child.label}
              </Link>
            </Row>
          </Container>
        ))}
      </Navbar>
    </>
  )
}

export default dropDownBar
