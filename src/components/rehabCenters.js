import { left } from "@popperjs/core"
import React from "react"

export default function rehabCenters() {
  return (
    <div>
      <div
        style={{
          height: `300px`,
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
              marginLeft: `30%`,
              marginTop: `5%`,
            }}
          >
            <span
              style={{
                color: `#56bc82`,
                fontSize: `36px`,
                marginTop: `10px`,
                marginLeft: `10px`,
              }}
              className="material-icons"
            >
              search
            </span>
          </div>
          <div
            style={{
              marginLeft: `2%`,
              marginTop: `6%`,
              fontFamily: `Montserrat`,
              fontStyle: `normal`,
              fontWeight: `600`,
              fontSize: `36px`,
            }}
          >
            Browse Treatment Centers
          </div>
        </div>
        <div
          style={{
            display: `flex`,
            alignItems: `flex-start`,
            flexDirection: `row`,
            justifyContent: `space-around`,
            marginTop: `3%`,
            marginLeft: `9%`
          }}
        >
          <button
            style={{
              backgroundColor: `#ffff`,
              width: `15%`,
              height: `40px`,
              border: `2px solid rgba(229, 229, 229, 0.92)`,
              borderRadius: `25px`,
            }}
          >
            {" "}
            Payments{" "}
            <span
              style={{
                color: `#56BC82`,
              }}
              className="material-icons"
            >
              arrow_drop_down
            </span>
          </button>
          <button
            style={{
              backgroundColor: `#ffff`,
              width: `15%`,
              height: `40px`,
              border: `2px solid rgba(229, 229, 229, 0.92)`,
              borderRadius: `25px`,
            }}
          >
            {" "}
            Levels of Care{" "}
            <span
              style={{
                color: `#56BC82`,
              }}
              className="material-icons"
            >
              arrow_drop_down
            </span>
          </button>
          <button
            style={{
              backgroundColor: `#ffff`,
              width: `15%`,
              height: `40px`,
              border: `2px solid rgba(229, 229, 229, 0.92)`,
              borderRadius: `25px`,
            }}
          >
            {" "}
            Mental Health{" "}
            <span
              style={{
                color: `#56BC82`,
              }}
              className="material-icons"
            >
              arrow_drop_down
            </span>
          </button>
          <button
            style={{
              backgroundColor: `#ffff`,
              width: `15%`,
              height: `40px`,
              border: `2px solid rgba(229, 229, 229, 0.92)`,
              borderRadius: `25px`,
            }}
          >
            {" "}
            Substances{" "}
            <span
              style={{
                color: `#56BC82`,
              }}
              className="material-icons"
            >
              arrow_drop_down
            </span>
          </button>

          <div style={{
              display: `flex`,
              flexDirection: `row`,
          }}> 
          
          
          </div>
        </div>
      </div>
    </div>
  )
}
