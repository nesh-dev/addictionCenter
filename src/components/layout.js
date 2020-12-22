/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"


import Header from "./header"
import "./layout.css"

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


  return (
    <>
    <div style={{
      marginLeft: `250px`,
      marginRight: `250px`, 
      backgroundColor: `#edf1f3`,
    }}>
     <Header data={data} />
      <div
        style={{
        }}
      >
        <main>{children}</main>
      </div>
    </div>
     
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
