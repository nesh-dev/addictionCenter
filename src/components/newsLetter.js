import React from "react"

export default function newsLetter() {
  return (
    <div
      style={{
        backgroundColor: `#56BC82`,
        height: `150px`,
        marginTop: `-38px`,
      }}
    >
      <div
        style={{
          display: `flex`,
          flexDirection: `row`,
        }}
      >
        <div
          style={{
            display: `flex`,
            flexDirection: `column`,
            marginLeft: `20%`,
            marginTop: `3%`,
          }}
        >
          <div
            style={{
              fontSize: `24px`,
              lineHeight: `29px`,
              textAlign: `center`,
              color: `#ffff`,
              fontSize: `24px`,
              lineHeight: `29px`,
              textAlign: `center`,
              color: `#ffff`,
              fontWeight: `bold`,
            }}
          >
            Sign up for our Newsletter
          </div>
          <div
            style={{
              color: `#fff`,
              fontSize: `16px`,
              textAlign: `center`,
              marginTop: `10px`,
            }}
          >
            Get the latest on addiction and recovery
          </div>
        </div>

        <div
          style={{
            display: `flex`,
            backgroundColor: `#ffff`,
            borderRadius: `10px`,
            flexDirection: `row`,
            marginLeft: `5%`,
            marginTop: `3%`,
            width: `400px`,
          }}
        >
          <div
            style={{
              textAlign: `center`,
              marginLeft: `6%`,
              marginTop: `20px`,
            }}
          >
            <input style={{
                border: `none`
            }}  placeholder="Email Address" />
          </div>

          <div
            style={{
              textAlign: `center`,
              marginLeft: `25%`,
              backgroundColor: `#E58F3A`,
              width: `200px`,
              borderRadius: `10px`,
              marginLeft: `5%`,
              width: `185px`,
              marginTop: `8px`,
              marginRight: `5px`,
              marginBottom: `10px`,
              borderRadius: `10px`,
            }}
          >
            <div
              style={{
                color: `#fff`,
                fontSize: `16px`,
                marginTop: `10px`,
              }}
            >
              {" "}
              Get A call{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
