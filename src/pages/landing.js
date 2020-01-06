import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import peopleJinYoungKim from '../assets/images/JinYoungKim.png'
import peopleIsaacSim from '../assets/images/IsaacSim.jpg'

const Landing = props => (
  <Layout>
    <Helmet>
      <title>Landing - Forty by HTML5 UP</title>
      <meta name="description" content="Landing Page" />
    </Helmet>

    <BannerLanding />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>People</h2>
          </header>
          <p>연구실에 함께하고있는 사람들에 대한 정보입니다.</p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <Link to="/generic" className="image">
            <img src={peopleJinYoungKim} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Jin Young Kim</h3>
                <h4>Professor</h4>
              </header>
              <p>바이오그래피 작성</p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Action button (의견 제시 요망)
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={peopleIsaacSim} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Isaac Sim</h3>
                <h4>Ph.D. Candidates</h4>
              </header>
              <p>바이오그래피 작성</p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Action button (의견 제시 요망)
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={pic10} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Sed nunc ligula</h3>
              </header>
              <p>바이오그래피 작성</p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Action button (의견 제시 요망)
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default Landing
