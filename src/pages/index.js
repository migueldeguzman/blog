import React from "react"
import { Link } from "gatsby"
import { scale, rhythm } from "../utils/typography"

const NoStyleLink = props => (
  <Link css={{ color: `blue`, textDecoration: `none` }} {...props} />
)

const black = `black`

export default () => {
  return (
    <div
      css={{
        display: `flex`,
        height: `100vh`,
        background: black,
      }}
    >
      <div
        css={{
          position: `absolute`,
          left: `33.333%`,
          width: rhythm(.30),
          height: `30vh`,
          zIndex: 10,
          background: black,
          borderBottomRightRadius: `60px 41%`,
        }}
      />
      <div
        css={{
          position: `absolute`,
          left: `28%`,
          width: rhythm(.30),
          height: `15vh`,
          zIndex: 10,
          background: black,
          borderBottomRightRadius: `60px 41%`,
        }}
      />
      <div
        css={{
          position: `absolute`,
          left: `39%`,
          width: rhythm(.30),
          height: `18vh`,
          zIndex: 10,
          background: black,
          borderBottomRightRadius: `60px 41%`,
        }}
      />
      <div
        css={{
          position: `absolute`,
          left: `33.33%`,
          bottom: 0,
          width: rhythm(.3),
          height: `24vh`,
          zIndex: 10,
          background: black,
          borderTopLeftRadius: `60px 41%`,
        }}
      />  
      <div
        css={{
          position: `absolute`,
          left: `39%`,
          bottom: 0,
          width: rhythm(.30),
          height: `32vh`,
          zIndex: 10,
          background: black,
          borderTopLeftRadius: `60px 41%`,
        }}
      />
      <div
        css={{
          position: `absolute`,
          left: `45%`,
          bottom: 0,
          width: rhythm(.30),
          height: `17vh`,
          zIndex: 10,
          background: black,
          borderTopLeftRadius: `60px 41%`,
        }}
      />
      <div
        css={{
          position: `absolute`,
          left: `66.66%`,
          bottom: 0,
          width: rhythm(.30),
          height: `17vh`,
          zIndex: 10,
          background: black,
          borderTopLeftRadius: `60px 41%`,
        }}
      />
      <div
        css={{
          position: `absolute`,
          left: `72%`,
          bottom: 0,
          width: rhythm(.30),
          height: `30vh`,
          zIndex: 10,
          background: black,
          borderTopLeftRadius: `60px 41%`,
        }}
      />
      <div
        css={{
          position: `absolute`,
          left: `78%`,
          bottom: 0,
          width: rhythm(.30),
          height: `24vh`,
          zIndex: 10,
          background: black,
          borderTopLeftRadius: `60px 41%`,
        }}
      />
      <div
        css={{
          display: `flex`,
          position: `absolute`,
          margin: rhythm(3 / 4),
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          justifyContent: `center`,
          alignItems: `center`,
          background: `#ffffff`,
        }}
      >
        <h1
          css={{
            width: `80%`,
            color: black,
            fontWeight: 600,
            fontSize: scale(5 / 5).fontSize,
            lineHeight: 1.1,
            "@media (min-width: 420px)": {
              fontSize: scale(7 / 5).fontSize,
            },
            "@media (min-width: 768px)": {
              fontSize: scale(10 / 5).fontSize,
            },
          }}
        >
          <span css={{ fontWeight: 300 }}></span> Important discussions, codified and articulated in words and art.. {` `}
          <span css={{ fontWeight: 300 }}></span>
        </h1>
      </div>
      <div
        css={{
          color: black,
          position: `absolute`,
          top: rhythm(1.5),
          zIndex: 10,
          transform: `rotate(90deg)`,
          transformOrigin: `left top 0`,
          left: rhythm(2.5),
          fontSize: scale(2 / 5).fontSize,
          lineHeight: scale(2 / 5).lineHeight,
          "@media (min-width: 420px)": {
            left: rhythm(1.5),
            transform: `none`,
          },
        }}
      >
        <NoStyleLink to="/">tech-stoic</NoStyleLink>
      </div>
      <div
        css={{
          color: black,
          position: `absolute`,
          right: rhythm(1.5),
          top: rhythm(1.5),
          zIndex: 10,
          fontSize: scale(2 / 5).fontSize,
          lineHeight: scale(2 / 5).lineHeight,
        }}
      >
        <NoStyleLink to="/blog/">blog</NoStyleLink>,{" "}
        <NoStyleLink to="/top10/">top10</NoStyleLink>,{" "}
        <NoStyleLink to="/about/">about</NoStyleLink>
      </div>
    </div>
  )
}
