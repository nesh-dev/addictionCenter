import React, { useState } from 'react';
import { Link } from 'gatsby';

const DropdownMenuItem = ({ parent, children }) => {
    const [show, setShow] = useState(false)
  
    return (
      <div
        style={{
            marginLeft: `2%`,
            width: `13%`,
            fontFamily: `Montserrat`,
            fontSize: `22px`
        }}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {parent.label}
        <span 
        style={{
            color: `#56BC82`, 
        }}
        className="material-icons">arrow_drop_down</span>
        <div style={{ 
        display: show ? "block" : "none", 
         }}>
          <div className="flex-square">
            {/* {children.map(child => (
              <Link key={child.id} to={child.path}>{child.label}</Link>
            ))} */}
          </div>
        </div>
      </div>
    )
  }

export default DropdownMenuItem;
