import React from "react"
import featuredImage from "../images/featuredAuthorImage.png"

export default function featuredBlog() {
  return (
    <div>
      <div
        style={{
          display: `flex`,
          flexDirection: `row`,
          backgroundColor: `#ffff`,
        }}
      >
        <div
          style={{
            width: `50%`,
            height: `340px`,
          }}
        >
          <img
            style={{
              height: `300px`,
              width: `300px`,
              borderRadius: `50%`,
              marginLeft: `20%`,
              marginTop: `5%`,
            }}
            src={featuredImage}
            alt={featuredImage}
          />
        </div>

        <div
          style={{
            display: `flex`,
            flexDirection: `column`,
            marginTop: `30px`,
            marginLeft: `10%`,
            marginRight: `5%`,
            width: `60%`
          }}
        >
          <div
            style={{
              fontWeight: `bold`,
              fontSize: `36px`,
              lineHeight: `44px`,
              marginBottom: `5%`
             
            }}
          >
            Meet Dr. B
          </div >
          <div style={{
              marginBottom: `5%`
          }}>
            Dr. Ashish Bhatt, MD, MRO is recognized as a leading physician,
            addiction medicine specialist, and psychiatrist. He has been
            involved in medical and administrative leadership and has helped
            guide the development of both public and private substance abuse and
            dual diagnosis facilities. Get professional rehab and addiction
            education from Dr. Bhatt today!
          </div>
          <button
            style={{
              border: `1px solid #79B091`,
              backgroundColor: `#ffffff`,
              fontSize: `24px`,
              fontWeight: `normal`,
              width: `200px`,
              height: `50px`,
              color: `#56bc82`,
            }}
          >
            {" "}
            Learn More{" "}
          </button>
        </div>
      </div>
    </div>
  )
}
