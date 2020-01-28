import React from "react"
import Helmet from "react-helmet"
import { Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"
import Layout from "../layouts/index.js"

const NoStyleLink = props => (
  <Link css={{ textDecoration: `none` }} {...props} />
)

export default ({ location }) => {
  return (
    <Layout location={location}>
      
      <h3>The blog is becoming much bigger so I added a must read page, hope you'll like these ten!</h3>
      <p>
        <ol>
          <li><NoStyleLink to="/7.7-billion-gods/">7.7 billion gods</NoStyleLink></li>
          <li><NoStyleLink to="/jack-of-all-trades/">Jack of all trades</NoStyleLink></li>
          <li><NoStyleLink to="/empty-spaces/">The value of empty spaces</NoStyleLink></li>
          <li><NoStyleLink to="/momento-mori/">Momento mori</NoStyleLink></li>
          <li><NoStyleLink to="/embodiement-of-the-shadow/">Embodiement of the shadow</NoStyleLink></li>
          <li><NoStyleLink to="/athlete-heart/">Athletic heart</NoStyleLink></li>
          <li><NoStyleLink to="a-few-lessons-from-wars/">A few lessons from wars</NoStyleLink></li>
          <li><NoStyleLink to="/dr-jordan-b-peterson-part-2/">Dr. Jordan B. Peterson</NoStyleLink></li>
          <li><NoStyleLink to="/when-everything-fits/">When everything fits</NoStyleLink></li>
          <li><NoStyleLink to="/letter-to-my-future-wife/">A letter to my future wife</NoStyleLink></li>
        </ol>
      </p>
    </Layout>
  )
}
