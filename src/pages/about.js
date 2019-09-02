import React from "react"
import Helmet from "react-helmet"
import { Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"
import Layout from "../layouts/index.js"

export default ({ location }) => {
  return (
    <Layout location={location}>
      
      <h1>Hola!</h1>
      <p>
        A blog for trying to share the world a transcendent lifestlye through stoic philosophy. 
        <br/>
        <br/>
        I work as an accountant but thinks <a href="https://tech-stoic.github.io/integral-thinking/">integrally</a> about how the world works. I create art for this blog, tinker with open source code, 
        learn french and science while doing a <a href="https://tech-stoic.github.io/keto">ketogenic lifestlye</a>.
      </p>
      <p>
        I love cycling too.
        <br/><br/>
        <img alt="pic"></img>

      </p>

      <p>
        Originally from the province of Bulacan, Philippines.
      </p>

      <p> 
        Some cool animation: <a href="https://migueldeguzman.github.io">migueldeguzman.github.io</a>.<br/>
        Github: <a href="https://github.com/migueldeguzman">migueldeguzman</a> <br/>
        Instagram: <a href="">tech-stoic</a>
      </p>
    </Layout>
  )
}
