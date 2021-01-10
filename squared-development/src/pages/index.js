import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Button from '../components/Buttons/Button.js'
import Heading from '../components/Heading.js'
import ConstraintContainer from "../components/LayoutComponents/ConstraintContainer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ConstraintContainer>
      <Heading alignment={'left'}>Squared Development Agency</Heading>
    </ConstraintContainer>
  </Layout>
)

export default IndexPage
