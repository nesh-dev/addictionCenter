import React from "react"

export default function rehabCenters() {
  return (
    <div>
      <div
        style={{
          height: `1000px`,
          width: `100%`,
          backgroundColor: `#ffff`,
        }}
      >
        <div
          style={{
            display: `flex`,
            flexDirection: `row`,
          
          }}
        >
          <div
            className="search"
            style={{
              width: ` 60px`,
              height: ` 60px`,
              border: `solid 2px rgba(229, 229, 229, 0.92)`,
              backgroundColor: `#ffffff`,
              borderRadius: `50%`,
              margin: `5% 5% `
            }}
          >
            <span
              style={{
                color: `#56bc82`,
                fontSize: `36px`,

                marginRight: `30px`,
              }}
              className="material-icons"
            >
              search
            </span>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  )
}
