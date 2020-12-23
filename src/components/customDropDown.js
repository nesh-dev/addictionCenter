import React, { useState } from "react"
import { FormControl, Dropdown, Row, Col, F } from "react-bootstrap"


export const CustomToggle = React.forwardRef(
  ({ children, onClick, filterOptions }, ref) => (
    <>
      <button
       ref={ref}
        style={{
          backgroundColor: `#ffff`,
          height: `40px`,
          border: `2px solid rgba(229, 229, 229, 0.92)`,
          borderRadius: `25px`,
          paddingRight: `2%`,
          paddingLeft: `2%`,
          marginTop: "2%",
          width: `80%`,
        }}
        onClick={e => {
            e.preventDefault()
            onClick(e)
          }}
      >
       {children}
        {" "}
        <span
          style={{
            color: `#56BC82`,
          }}
          className="material-icons"
        >
          arrow_drop_down
        </span>
      </button>
    </>
  )
)
// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
export const CustomMenu = React.forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const [value, setValue] = useState("")

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={e => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            child =>
              !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    )
  }
)
