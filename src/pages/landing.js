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
      <title>People | CAILAB</title>
      <meta name="description" content="Landing Page" />
    </Helmet>

    <BannerLanding />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Professor</h2>
          </header>
          {/* <p>연구실에 함께하고있는 사람들에 대한 정보입니다.</p> */}
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
              <p>
                ● Seoul National University, Ph. D. degree
                <br />● Princeton University, Postdoctoral Research Fellow
                <br />● SK Telecom Research Institute, Senior Researcher
                <br />● Massachusettes Institute of Technology (M.I.T), Visiting
                Scientist
                <br />● Now) KwangWoon University, Professor
                <br />
              </p>
              <ul className="icons">
                <li>
                  <a
                    href="mailto:jinyoung@kw.ac.kr"
                    className="icon alt fa-envelope"
                  >
                    <span className="label">email</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Graduated students</h2>
          </header>
          {/* <p>연구실에 함께하고있는 사람들에 대한 정보입니다.</p> */}
        </div>
      </section>
      <section id="two" className="spotlights">
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
              <p>
                ● KwangWoon University, Bachelor
                <br />● Research area : Backscatter, VLC
              </p>
              <ul className="icons">
                <li>
                  <a
                    href="mailto:dltkr34@naver.com"
                    className="icon alt fa-envelope"
                  >
                    <span className="label">email</span>
                  </a>
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
                <h3>Gil Dong Hong</h3>
              </header>
              <p>dd</p>
              <ul className="icons">
                <li>
                  <a
                    href="mailto:yakrkr@naver.com"
                    className="icon alt fa-envelope"
                  >
                    <span className="label">email</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Undergraduated students</h2>
          </header>
          {/* <p>연구실에 함께하고있는 사람들에 대한 정보입니다.</p> */}
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <Link to="/generic" className="image">
            <img src={pic08} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Gil Dong Hong</h3>
                <h4>Ph.D. Candidates</h4>
              </header>
              <p>
                ● KwangWoon University, Bachelor
                <br />● Research area : Backscatter, VLC
              </p>
              <ul className="icons">
                <li>
                  <a
                    href="mailto:dltkr34@naver.com"
                    className="icon alt fa-envelope"
                  >
                    <span className="label">email</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={pic09} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Gil Dong Hong</h3>
              </header>
              <p>dd</p>
              <ul className="icons">
                <li>
                  <a
                    href="mailto:yakrkr@naver.com"
                    className="icon alt fa-envelope"
                  >
                    <span className="label">email</span>
                  </a>
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
