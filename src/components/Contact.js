import React from 'react'

const Contact = props => (
  <section id="contact">
    <div className="inner">
      {/* <section>
        <form method="post" action="#">
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6"></textarea>
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Clear" />
            </li>
          </ul>
        </form>
      </section> */}
      <section className="split">
        <section>
          <div className="contact-method">
            <span className="icon alt fa-envelope"></span>
            <h3>Email</h3>
            <a href="mailto:jinyoung@kw.ac.kr">jinyoung@kw.ac.kr</a>
          </div>
          <div className="contact-method">
            <span className="icon alt fa-phone"></span>
            <h3>Wireline</h3>
            <span>(+082) 02-940-5567 </span>
          </div>
          <div className="contact-method">
            <span className="icon alt fa-home"></span>
            <h3>Address</h3>
            <span>
              409, Charm-bit gwan, Kwangwoon-University
              <br />
              20 Kwangwoon-ro, Nowon-gu
              <br />
              Seoul 01897, Korea
            </span>
          </div>
        </section>
      </section>
    </div>
  </section>
)

export default Contact
