import React from "react"
import Helmet from "react-helmet"
import { Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"
import Layout from "../layouts/index.js"

export default ({ location }) => {
  return (
    <Layout location={location}>
      
      <h1>Hello there!</h1>
      <p>
        This blogs are small chapters, memories on how I am trying to live a meaningful life through stoic philosophy and help create a better future for generations to come. 
        <br/>
        <br/>
        I work as an accountant but thinks <a href="https://tech-stoic.github.io/integral-thinking/">integrally</a> about how the world works. 
        I create art for this blog, tinker with open source code, learn french and science while doing a <a href="https://tech-stoic.github.io/keto">ketogenic lifestlye</a>.
      </p>
      <p>
        I love cycling for the environment too.
        <br/><br/>
        
        Originally from the province of Bulacan, Philippines.
      </p>

      <p> 
        my other website: <a href="https://migueldeguzman.github.io">migueldeguzman.github.io</a>.<br/>
        github: <a href="https://github.com/migueldeguzman">migueldeguzman</a> <br/>
        instagram: <a href="https://instagram.com/tech.stoic">tech-stoic</a>
      </p>
    </Layout>
  )
}
