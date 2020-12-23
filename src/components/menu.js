import React, { Component, useState, useEffect } from "react"
import DropdownMenuItem from "../components/dropdownMenu"
import MenuItem from "../components/menuItem"
import { Row, Col, Container, Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"
import DropDownBar from "./dropDownBar"

const MainMenu = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0)


  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const data = children.wpMenu.menuItems.nodes
    ? children.wpMenu.menuItems.nodes.filter(
        menuItem => menuItem.parentId === null
      )
    : null

  return (
    <>
      <Navbar
        fixed="top"
        className ={ scrollPosition!==0 ? `box`: ''}
        style={{
          backgroundColor: `#EDF1F3`,
        }}
      >
        <Container fluid>
          <Nav
            style={{
              fontSize: `36px`,
              textAlign: `center`,
              fontWeight: `bold`,
              fontFamily: `bold`,
            }}
          >
            <Link to="/">
              <span
                style={{
                  color: `black`,
                }}
              >
                Addiction{" "}
              </span>

              <span
                style={{
                  color: `#56bc82`,
                }}
              >
                Center
              </span>
            </Link>
          </Nav>

          {data.map(menuItem => {
            const children = menuItem.childItems.nodes.length
              ? menuItem.childItems.nodes
              : null

            return children ? (
              <DropdownMenuItem
                key={menuItem.id}
                parent={menuItem}
                children={children}
              />
            ) : (
              <MenuItem menuItem={menuItem} />
            )
          })}
          <Nav>
            <div
              style={{
                width: `60px`,
                height: `60px`,
                backgroundColor: `#ffff`,
                borderRadius: `50%`,
              }}
            >
              <span
                style={{
                  color: `#56BC82`,
                  marginLeft: `15px`,
                  marginTop: `15px`,
                }}
                className="material-icons"
              >
                local_phone
              </span>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default MainMenu
