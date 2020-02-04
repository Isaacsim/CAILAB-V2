import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerResearch from '../components/BannerResearch'

import pic11 from '../assets/images/pic11.jpg'
import pic08 from '../assets/images/pic08.jpg'

const Generic = props => (
  <Layout>
    <Helmet>
      <title>Generic - Forty by HTML5 UP</title>
      <meta name="description" content="Generic Page" />
    </Helmet>

    <BannerResearch />

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Wireless Communiations</h1>
          </header>
          <span className="image main">
            <img src={pic11} alt="" />
          </span>
          <p>연구실에서 연구하고있는 연구분야를 작성 (1-1문단)</p>
          <p>연구실에서 연구하고있는 연구분야를 작성 (1-2문단)</p>
          <p>연구실에서 연구하고있는 연구분야를 작성 (1-3문단)</p>
        </div>
      </section>
    </div>
    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Artificial Intelligent</h1>
          </header>
          <span className="image main">
            <img src={pic08} alt="" />
          </span>
          <p>연구실에서 연구하고있는 연구분야를 작성 (1-1문단)</p>
          <p>연구실에서 연구하고있는 연구분야를 작성 (1-2문단)</p>
          <p>연구실에서 연구하고있는 연구분야를 작성 (1-3문단)</p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Generic
