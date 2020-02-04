import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import BannerPublications from '../components/BannerPublications'

import pic03 from '../assets/images/pic03.jpg'
import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Publications = props => (
  <Layout>
    <Helmet>
      <title>Elements - Forty by HTML5 UP</title>
      <meta name="description" content="Elements Page" />
    </Helmet>

    <BannerPublications />

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>SCI Papers</h1>
          </header>
          <h4>In the last 5 years</h4>
          <ul className="alt">
            <li>
              J. K. Seo, J. Ju, Jin Young Kim and J. J. Lee, “Automated
              residential demand response based on advanced metering
              infrastructure network,” International Journal of Distributed
              Sensor Networks, vol. 2016, no. 4234806, pp. 1-10, Feb. 2016.
            </li>
            <li>
              S. Oh, Y. Shin, Jin Young Kim and D. I. Kim, "Probability of
              packet loss in energy harvesting nodes with cognitive radio
              capabilities," IEEE Communications Letters, vol. 20, no. 5, pp.
              978-981, May 2016.
            </li>
            <li>
              K. Y. Kim, S. W. Lee, Y. M. Hwang, J. S. Lee, Y. S. Kim, Jin Young
              Kim and Y. Shin, "Correlation-based optimal chirp rate allocation
              for chirp spread spectrum using multiple linear chirps," IEICE
              Transactions on Fundamentals, vol. E100-A, no. 4, pp. 1088-1091,
              Apr. 2017.
            </li>
            <li>
              Y. M. Hwang, Y. Song, K. Y. Kim, J. S. Lee, Y. Shin and Jin Young
              Kim, "TOA based recalibration systems for improving LOS/NLOS
              identification," IEICE Transactions on Fundamentals, vol. E100-A,
              no. 5, pp. 1267-1270, May 2017.
            </li>
            <li>
              Y. M. Hwang, J. H. Park, Y. Shin, Jin Young Kim and D. I. Kim,
              “Transmission power and antenna allocation for energy efficient RF
              energy harvesting networks with massive MIMO,” Energies, vol. 10,
              no. 6, pp. 1-18, June 2017.
            </li>
            <li>
              M. E. Ahmed, D. I. Kim, Jin Young Kim and Y. Shin, "Energy
              arrival-aware detection threshold in wireless-powered cognitive
              radio networks," IEEE Transactions on Vehicular Technology, vol.
              66, no. 10, pp. 9201-9213, Oct. 2017.
            </li>
            <li>
              Y. M. Hwang, S. Y. Lee, I. Sim and Jin Young Kim, “Positioning
              error reduction techniques for precision navigation by
              post-processing,” IEICE Transactions on Fundamentals, vol. E100-A,
              no. 10, pp. 2158-2161, Oct. 2017.
            </li>
            <li>
              Thu N. L. Nguyen, Y. Shin, Jin Young Kim and D. I. Kim,
              "Applicability of compressive sensing for wireless energy
              harvesting nodes," Energies, vol. 10, no. 11, pp. 1-15, Nov. 2017.
            </li>
            <li>
              Y. M. Hwang, J. Jung, K. Y. Kim, J. S. Lee, Y. Shin and Jin Young
              Kim, "Energy-efficient resource allocation strategy for low
              probability of intercept and anti-jamming systems," IEICE
              Transactions on Fundamentals, vol. E100-A, no. 11, pp. 2498-2502,
              Nov. 2017.
            </li>
            <li>
              Y. M. Hwang, G. H. Cha, J. K. Seo, J. J. Lee and Jin Young Kim,
              “Adaptive thresholding for signal denoising for powerline
              communication systems,” IEICE Transactions on Fundamentals, vol.
              E100-A, no. 12, pp. 3041-3044, Dec. 2017.
            </li>
            <li>
              Y. M. Hwang, J. H. Jung, Y. Shin, D. I. Kim and Jin Young Kim,
              “Optimal transmission policy in decoupled RF energy harvesting
              networks,” IEICE Transactions on Fundamentals, vol. E101-A, no. 2,
              pp. 516-520, Feb. 2018.
            </li>
            <li>
              S. G. Hong, Y. M. Hwang, S. Y. Lee, Y. Shin, D. I. Kim and Jin
              Young Kim, “Game-theoretic modeling of backscatter wireless sensor
              network under smart interference,” IEEE Communications Letters,
              vol. 22, no. 4, pp. 804-807, Apr. 2018.
            </li>
          </ul>
          <header className="major">
            <h1>Patents</h1>
          </header>
          <h4>In the last 5 years</h4>
          <ul className="alt">
            <li>ddd</li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
)

export default Publications
