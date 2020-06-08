import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
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
            bottom:'5%',
            marginRight:'auto',
            marginLeft:'0%',
            marginBottom:'0%',
            marginTop:'45%',
          }}
        >
          <p>
            しょうへいの
          </p>
          <p>ブログぺーじ</p>
        </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
