import React, { useState } from "react"
import { Link } from "gatsby"
import { Nav } from "react-bootstrap"
import { Row, Col, Container } from "react-bootstrap"
import "./dropdownMenu.css"
import DropDownBar from "../components/dropDownBar"

const DropdownMenuItem = ({ parent, children }) => {
  const [show, setShow] = useState(false); 


  return (
    <>
      <div 
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)} 
      >

   
      <Nav
        className={show ? `highlighted` : ``}
        style={{
          fontFamily: `Montserrat`,
          fontSize: `22px`,
          height: `90px`,
        }}
       
      >
        <span
          style={{
            marginTop: `20%`,
          }}
        >
          {parent.label}
        </span>

        <div
          className={show ? `highlightedIcon` : `icon`}
          className="material-icons"
          style={{
            marginTop: `20%`,
          }}
        >
          arrow_drop_down
        </div>
      </Nav>
      <DropDownBar children={children} show={show}/>
      </div>
    </>
  )
}

export default DropdownMenuItem
