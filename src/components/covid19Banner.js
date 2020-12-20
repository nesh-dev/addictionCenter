import React from "react"

export default function covid19Banner() {
  return (
    <div>
      <div
        style={{
          width: `100%`,
          display: `flex`,
          height: `270px`,
          flexDirection: `row`,
          fontFamily: `Montserrat`,
        }}
      >
        <div
          style={{
            color: `#ffff`,
            width: `50%`,
            backgroundColor: `#56bc82`,
          }}
        >
          <div
            style={{
              fontSize: `36px`,
              textAlign: `center`,
              marginTop: `30px`,
            }}
          >
            GET HELP DURING COVID-19
          </div>
          <div
            style={{
              textAlign: `center`,
              margin: `30px`,
              marginTop: `50px`,
              fontSize: `18px`,
            }}
          >
            Coronavirus should be a unique opportunity for you to seek
            treatment. If your job, classes, and social life have held you back
            from getting help, why not give rehab a chance during isolation?
            With just 30 days at a professional rehab center, you can get clean
            and sober, start therapy, join a support group, and learn ways to
            manage your cravings.
          </div>
        </div>

        <div
          style={{
            backgroundColor: `#79b091`,
            width: `50%`,
           
          }}
        >
          <button
            style={{
              width: `322px`,
              height: `76px`,
              padding: `28.5px 92px 16.5px 82px`,
              border: `solid 1px #ffffff`,
              backgroundColor: `var(--tea)`,
              color: `#ffff`,
              fontSize: `18px`,
              fontWeight: `bold`,
              margin: `130px 100px 100px 200px`
            }}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}
