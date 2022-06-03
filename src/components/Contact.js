import React from 'react'
import './style1.css'
class Contact extends React.Component {
  render() {
    return (
      <>
        <div>
          <div class="content">
            <div>
              <h2>We're listening</h2>
              <p class="contact-par">
                You're not going to hit a ridiculously long phone menu when you
                call us. Your email isn't going to the inbox abyss, never to be
                seen or heard from again. At Recognito, we provide the
                exceptional service we'd want to experience ourselves!
              </p>
            </div>
            <br />
            <br />
            <br />
            <p class="par">
              For any queries, click on the contact us button.
              <br /> You can also share your valuable feedback with us.
              <br />
              Thank you.
            </p>
            <a class="btn contactus" href="mailto:sohalibiswas49@gmail.com">
              CONTACT US
            </a>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <form
              action="/"
              method="post"
              enctype="multipart/form-data"
              class="fileinput"
            ></form>
          </div>
          <div class="footer">
            <h3>Connect with us</h3>
            <br />
            <br />
            <a class="footer-link" href="https://www.linkedin.com/">
              LinkedIn
            </a>
            <a class="footer-link" href="https://www.twitter.com/">
              Twitter
            </a>
            <a class="footer-link" href="https://www.facebook.com/">
              Facebook
            </a>
            <a class="footer-link" href="https://www.instagram.com/">
              Instagram
            </a>
          </div>
        </div>
      </>
    )
  }
}

export default Contact
