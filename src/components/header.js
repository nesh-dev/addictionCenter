import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import MainMenu from "../components/menu"
import headerImage from "../images/header.svg"

const Header = ({ data }) => (
  <header
  style={{
    width: `100%`,
        height: `100%`,
        padding: `37px 27px 30px 5px`,
  }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        fontFamily: `Montserrat`,
        marginBottom: `3%`
      }}
    >
      <MainMenu menu={data} />
    </div>
    <div
      style={{
       
        display: `flex`,
        flexDirection: "row",
      }}
    >
     

      <div>
        <div
          style={{
            marginTop: `10%`,
            marginLeft: `3%`,
          }}
        >
          <p
            style={{
              fontFamily: `Montserrat`,
              fontStyle: `normal`,
              fontWeight: `bold`,
              fontSize: `64px`,
              lineHeight: `78px`,

              color: `#000000`,
            }}
          >
            We’re Here For You
          </p>
        </div>
        <div
          style={{
            fontSize: `24px`,
            lineHeight: `29px`,
            textAlign: `center`,
            marginTop: `2%`,
            marginLeft: `5%`,
            width: `50%`,
          }}
        >
          We'll help you find a drug or alcohol rehab solution. Enter your phone
          number to receive a call from a treatment professional.
        </div>

        <div
          style={{
            fontWeight: `bold`,
            fontSize: `24px`,
            lineHeight: `29px`,
            marginLeft: `5%`,
            marginTop: `10%`,
          }}
        >
          Speak with a treatment professional
        </div>

        <div
          style={{
            marginBottom: `3%`,
            backgroundSize: `cover`,
            overflow: `hidden`,
            marginTop: `5%`,
            marginLeft: `5%`,
            width: `70%`,
            backgroundColor: `#ffff`,
            height: `100px`,
            borderRadius: `10px`,
            display: `flex`,
          }}
        >
          <div
            style={{
              width: `50%`,
              background: `rgba(229, 143, 58, 0.71)`,
              zIndex: `5`,
              display: `flex`,
              flexDirection: `column`,
              alignContent: `center`,
              alignItems: `center`,
              justifyContent: `center`,
            }}
          >
            <div
              style={{
                color: `#ffff`,
                fontFamily: `Montserrat`,
                fontStyle: `normal`,
                fontWeight: `500`,
                fontSize: `24px`,
                lineHeight: `29px`,
                textAlign: `center`,
                marginLeft: `10%`,
              }}
            >
              Make A Call
            </div>
            <div
              style={{
                color: `#ffff`,
                fontFamily: `Montserrat`,
                fontStyle: `normal`,
                fontWeight: `500`,
                fontSize: `24px`,
                lineHeight: `29px`,
                marginLeft: `10%`,
              }}
            >
              (866) 661-9843
            </div>
          </div>
          <div
            style={{
              display: `flex`,
              flexDirection: `row`,
            }}
          >
            <div
              style={{
                marginLeft: "2%",
                display: `flex`,
                flexDirection: `column`,
                padding: `10px`,
              }}
            >
              <div
                style={{
                  textAlign: `center`,
                  fontSize: `14px`,
                  fontSize: `24px`,
                }}
              >
                Request A Call
              </div>
              <div
                style={{
                  marginTop: `10px`,
                  width: `8%`,
                }}
              >
                <input
                  style={{
                    border: ` solid 1px rgba(229, 229, 229, 0.92)`,
                    borderRadius: `10px`,
                    width: `200px`,
                    height: `40px`,
                    textAlign: `center`,
                  }}
                  placeholder={`(__)(__)-(__)`}
                />
              </div>
            </div>
            <div
              style={{
                height: `50px`,
                width: `50px`,
                borderRadius: ` 50%`,
                backgroundColor: `#56bc82`,
                marginTop: `10%`,
                display: `flex`,
                flexDirection: `column`,
                marginTop: `25px`,
                marginLeft: `3px`,
              }}
            >
              <span
                style={{
                  color: `#ffff`,
                  //  marginLeft: `30px`
                  marginLeft: `10px`,
                  marginTop: `10px`,
                }}
                className="material-icons"
              >
                local_phone
              </span>
            </div>
          </div>
        </div>
      </div>
      <div> 
        <img src={headerImage} alt={headerImage} style={{
          color: `#56BC82`,
          width: `100%`,
          height: `700px`
        }}/>
    </div>
    </div>
    
  </header>
  
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
