import React from "react"
import Helmet from "react-helmet"
import { Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"
import Layout from "../layouts/index.js"

export default ({ location }) => {
  return (
    <Layout location={location}>
      
      <h1>Hi there!</h1>
      <p>
        My blog for trying to share to the world a transcendent lifestlye. I work as an accountant but try to think <a href="https://tech-stoic.github.io/integral-thinking/">integrally</a> that is why I create art, tinker with open source code, 
        learn languages and music all at the same time while doing a <a href="https://tech-stoic.github.io/keto">ketogenic lifestlye</a>.
      </p>
      <p>
        I love cycling too.
      </p>

      <p>
        Originally from the province of Bulacan, Philippines.
      </p>

      <p> 
        My other website: <a href="https://migueldeguzman.github.io">migueldeguzman.github.io</a>.<br/>
        My github account: <a href="https://github.com/migueldeguzman">migueldeguzman</a>
        tech-stoic instagram: <a href="">tech-stoic</a>
      </p>
    </Layout>
  )
}
