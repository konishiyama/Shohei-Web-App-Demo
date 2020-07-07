import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import {graphql} from 'gatsby'

export const query = graphql`
{
  allTest {
    edges {
      node {
        name
        id
        title
      }
      previous {
        id
      }
    }
  }
}
`;


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
           {this.props.data.allTest.edges.map(edge => (
             <p key={edge.node.id}>
               {edge.node.name}の
             </p>
           )
           )}
          <p>ブログぺーじ</p>
        </div>
        </div>
        <section className="section-in-blog">
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
