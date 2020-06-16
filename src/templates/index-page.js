import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'



export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url('/img/progile-pic.jpg')`,
      }}
    >
      <div
        style={{
          color:'white',
          fontFamily:'',
          fontSize:'45px',
          fontWeight:'bold',
          bottom:'10%',
          marginRight:'auto',
          marginLeft:'5%',
          marginBottom:'10%',
        }}
      >
        <p className="mini-index">
          栃木県日光市選出代議士(元外交官)
        </p>
        <p>山口翔平</p>
      </div>
    </div>
    
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h4 className="subtitle">{mainpitch.description}</h4>
                  </div>
                </div>
                <div className="columns">
                  {/* <div className="column is-12"> */}
                    {/* <h1 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h1> */}
                    {/* <p>{description}</p> */}
                  {/* </div> */}
                </div>
                <Features gridItems={intro.blurbs} />
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      適宜適宜
                      {/* <FontAwesomeIcon icon={faCoffee} /> */}
                    </Link>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">
                    最新の記事
                  </h3>
                  <BlogRoll />
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/blog">
                      記事を読む
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="has-text-weight-semibold is-size-2">
        Twitter
      </h3>
      <br>
      </br>
      <a class="twitter-timeline" data-lang="ja" data-width="360" data-height="410" href="https://twitter.com/GekidanHitori?ref_src=twsrc%5Etfw">Tweets by GekidanHitori</a> 
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      <br>
      </br>
      <br>
      </br>
      <h3 className="has-text-weight-semibold is-size-2">
        Instagram
      </h3>
      <br>
      </br>
      <a 
      href="https://www.instagram.com/dlwlrma/?hl=ja"
      target= "_blank">
        <img src="/img/Instagram.png"></img>
      </a>
      <p>
        <a 
        href="https://www.instagram.com/dlwlrma/?hl=ja"
        target= "_blank"
        >もっと見る</a>
      </p>
      <br>
      </br>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
