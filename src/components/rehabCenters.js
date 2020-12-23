import React from "react"
import { Row, Col, Container, Dropdown } from "react-bootstrap"
import { CustomMenu, CustomToggle } from "../components/customDropDown"

export default function rehabCenters() {
  const filterOptions = [
    { type: "levels of Care", filters: ""},
    { type: "Payments"},
    { type: "Mental Health"},
    { type: "Substances"},
  ]
  return (
    <div>
      <div
        style={{
          height: `100%`,
          backgroundColor: `#ffff`,
        }}
      >
      <Container fluid style={{
        maxWidth: `1600px`
      }}>
        <Row>
          <Col
            lg={{ span: 1, offset: 4 }}
            xs={{ span: 2, offset: 1 }}
            style={{
              marginTop: `6%`,
            }}
          >
            <div
              className="search"
              style={{
                width: `60px`,
                height: `60px`,
                border: `solid 2px rgba(229, 229, 229, 0.92)`,
                backgroundColor: `#ffffff`,
                borderRadius: `50%`,
                textAlign: `center`,
                paddingTop: `10%`,
              }}
            >
              <span
                style={{
                  color: `#56bc82`,
                  fontSize: `36px`,
                }}
                className="material-icons"
              >
                search
              </span>
            </div>
          </Col>
          <Col
            style={{
              marginTop: `6%`,
            }}
          >
            <span
              style={{
                fontFamily: `Montserrat`,
                fontStyle: `normal`,
                fontWeight: `600`,
                fontSize: `30px`,
              }}
            >
              Browse Treatment Centers
            </span>
          </Col>
          {/* </div> */}
        </Row>

        <div
          style={{
            marginRight: `5%`,
            marginLeft: `5%`,
          }}
        >
          <Row
            style={{
              marginTop: "2%",
            }}
          >
            {filterOptions.map(option => (
              <>
                <Col lg={3} md={6} xs={12}>
                  <Dropdown
                    style={{
                      marginBottom: `15%`,
                    }}
                  >
                    <Dropdown.Toggle
                      as={CustomToggle}
                      id="dropdown-custom-components"
                    >
                      {option.type}
                    </Dropdown.Toggle>

                    <Dropdown.Menu as={CustomMenu}>
                      <Dropdown.Item ></Dropdown.Item>
                      <Dropdown.Item ></Dropdown.Item>
                      <Dropdown.Item >
                      </Dropdown.Item>
                      <Dropdown.Item ></Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </>
            ))}
          </Row>
        </div>
        </Container>
      </div>
    </div>
  )
}
