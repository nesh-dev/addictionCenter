import React from "react"
import videoThumbNail from "../images/video-thumbnail.png"

export default function videoBanner() {
  return (
    <div>
      <div
        style={{
          display: `flex`,
          flexDirection: `row`,
          width: `100%`,
          background: `linear-gradient(251.4deg, #EDF1F3 7.07%, rgba(213, 215, 215, 0.412119) 28.27%, rgba(196, 196, 196, 0) 43.13%);`,
          fontFamily: `Montserrat`,
          
        }}
      >
        <div
          style={{
            width: `100%`,
          }}
        >
          <img
            src={videoThumbNail}
            alt={videoThumbNail}
            style={{
              opacity: `0.9`,
              width: `100%`,
            }}
          />
          <div
            style={{
              top: `235%`,
              left: `29%`,
              position: `absolute`,
            }}
          >
            <button
              style={{
                height: `100px`,
                width: `100px`,
                borderRadius: `50%`,
                border: ` 0.1px solid grey`,
              }}
            >
              <span
                style={{
                  color: `gray`,
                  fontSize: `60px`,
                }}
                className="material-icons"
              >
                play_arrow
              </span>
            </button>
            <div
              style={{
                fontSize: `24px`,
                lineHeight: `29px`,
                textAlign: `center`,
                fontWeight: `bold`,
                color: `white`
              }}
            >
              {" "}
              Watch Now{" "}
            </div>
          </div>
        </div>

        <div
          style={{
            height: `100%`,
            display: `flex`,
            flexDirection: `column`,
            width: `100%`,
            marginLeft: `50px`,
            marginRight: `50px`,
          }}
        >
          <div
            style={{
              fontSize: `36px`,
              lineHeight: `44px`,
              fontWeight: `bold`,
              marginTop: `10%`,
              marginBottom: `5%`,
            }}
          >
            {" "}
            Bad Habits Holding You back ?{" "}
          </div>
          <h3
            style={{
              fontWeight: `600`,
              fontSize: `24px,`,
              lineHeight: `29px`,
              fontFamily: `Montserrat`,
              marginBottom: `5%`,
            }}
          >
            {" "}
            Change Your Lifestyle today
          </h3>
          <div
            style={{
              fontSize: `20px`,
              lineHeight: `22px`,
              fontFamily: `Montserrat`,
              marginBottom: `20%`,
              width: ` 562px`,
            }}
          >
            Entrepreneur Keir Weimer created a system called the Live Free
            Lifestyle to give purpose to his life after realizing he had a
            serious problem with alcohol. A tragic accident that claimed the
            life of Weimer’s friend and landed Weimer in prison for 3 and a half
            years was the beginning of Weimer’s motivation to live differently.
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
