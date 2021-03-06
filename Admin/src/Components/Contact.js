import React, { Component } from "react";
class Contact extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    var imgstyle = {
      height: 45,
      background: "rgb(255,0,0)",
      marginLeft: 5
    };
    return (
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 footer_col">
              <div class="logo_container">
                <div class="logo">
                  <a href="#">
                    <span>iDigital</span>
                    <img src="images/icon1.png" style={imgstyle} alt="" />
                  </a>
                </div>
                <div class="logo_subtitle">Cards & More</div>
              </div>
              <div class="footer_social">
                <ul>
                  <li>
                    <a href="#">
                      <i class="fa fa-google-plus" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-pinterest" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-facebook" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-twitter" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-6 footer_col">
              <div class="footer_contact">
                <div class="footer_title">Contact Us</div>
                <ul>
                  <li>
                    <span>Address: </span>343,344 - Massimo A business Bench
                    Square , opp. tirupati shyam villa, 120ft canal road, Althan
                    Road, Althan Bhimrad road, Surat, Gujarat 395007
                  </li>
                  <li class="footer_contact_phone">
                    <span>Phone: </span>

                    <div> +91 81608 19878</div>
                    <div> +91 74050 49398</div>
                    <div> +91 87804 32399</div>
                    <div> +91 93767 98914</div>
                  </li>
                  <li>
                    <span>Email: </span>idigital_world@gmail.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="copyright text-center">
          Made in India &copy;
          <script>document.write(new Date().getFullYear());</script> All rights
          reserved.Made with <i class="fa fa-heart-o" aria-hidden="true" /> by{" "}
          <a href="https://daiict.ac.in" target="_blank">
            {" "}
            iDigital - Apple Developers
          </a>
        </div>
      </footer>
    );
  }
}

export default Contact;
