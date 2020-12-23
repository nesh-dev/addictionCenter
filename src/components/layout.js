/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, {useState} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import MainMenu from "../components/menu"

import Header from "./header"
import "./layout.css"
import DropDownBar from "./dropDownBar"

const Layout = ({ children }) => {
  

  const data = useStaticQuery(graphql`
    query LayoutQuery {
      wpMenu {
        id
        menuItems {
          nodes {
            parentId
            label
            path
            id
            childItems {
              nodes {
                path
                label
                id
              }
            }
          }
        }
      }
    }
  `)

  const getChildrenItems = index => {
  
    let items = data && data.wpMenu.menuItems.nodes[index].childItems.nodes;
    console.log(items, '>>>>>>>>')
    return items
  }

  const status = () => {
    const navIdex = parseInt(localStorage.getItem("navIndex"))
    const show = localStorage.getItem("navStatus")
    console.log(show, '&&&&&&&&')
    if (show === "true") {
      return getChildrenItems(0)
    } else {
      return []
    }
  }

  const show = () => {
    const show = localStorage.getItem("navStatus")
    return show === 'true'
  }


  return (
    <>
      <Row>
        <Col lg={12}>
          <MainMenu children={data} />

            <main>{children}</main>

        </Col>
      </Row>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
