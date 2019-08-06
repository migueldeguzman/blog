import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

import typography from "../utils/typography"
const rhythm = typography.rhythm
const scale = typography.scale

const NoStyleLink = props => (
  <Link css={{ color: `inherit`, textDecoration: `none` }} {...props} />
)

class Wrapper extends React.Component {
  render() {
    return (
      <div
        css={{
          minHeight: `100vh`,
          borderTop: `${rhythm(3 / 4)} solid #000000`,
          "@media (min-width: 420px)": {
            border: `${rhythm(3 / 4)} solid #000000`,
          },
        }}
      >
        <div css={{ minHeight: rhythm(1) }}>
          <div
            css={{
              float: `left`,
              // color: `#000000`,
              marginTop: rhythm(3 / 4),
              marginLeft: rhythm(3 / 4),
              fontSize: scale(2 / 5).fontSize,
              lineHeight: scale(2 / 5).lineHeight,
            }}
          >
            <NoStyleLink to="/">tech-stoic</NoStyleLink>
          </div>
          <div
            css={{
              float: `right`,
              // color: `#000000`,
              marginTop: rhythm(3 / 4),
              marginRight: rhythm(3 / 4),
              fontSize: scale(2 / 5).fontSize,
              lineHeight: scale(2 / 5).lineHeight,
            }}
          >
            <NoStyleLink to="/blog/">blog</NoStyleLink>,{" "}
            <NoStyleLink to="/about/">about</NoStyleLink>
          </div>
        </div>
        <div
          css={{
            padding: `${rhythm(2)} ${rhythm(3 / 4)}`,
            "@media (min-width: 420px)": {
              padding: `${rhythm(3)} ${rhythm(3 / 4)}`,
            },
            maxWidth: rhythm(22),
            margin: `0 auto`,
          }}
        >
          <Helmet defaultTitle="tech-stoic" titleTemplate="tech-stoic | %s" />
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Wrapper
