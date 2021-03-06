import React from "react";
import Content from "./Components/Content";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import "./App.css";

// import { threadId } from "worker_threads";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Festivals_Images from "./Components/Festivals_Images";
import About from "./Components/About";
import Company from "./Components/Company";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      link: null,
      cid: 0,
      cname: "",
      email: "",
      tagline: "",
      personname: "",
      phone: "",
      address: "",
      logo: ""
    };
    this.setCompany = this.setCompany.bind(this);
    this.setlink = this.setlink.bind(this);
  }
  setCompany(cid, cname, email, tagline, personname, phone, address, logo) {
    // alert(cid);
    this.setState({
      link: "editor",
      cid: cid,
      cname: cname,
      email: email,
      tagline: tagline,
      personname: personname,
      phone: phone,
      address: address,
      logo: logo
    });
    this.forceUpdate();
  }
  setlink(newlink) {
    this.setState({
      link: newlink
    });
    this.forceUpdate();
  }
  render() {
    return (
      <div className="App">
        <Header linkfun={this.setlink} />
        <Content
          linktoRender={this.state.link}
          linkfun={this.setlink}
          linkSet={this.setCompany}
          cid={this.state.cid}
          cname={this.state.cname}
          email={this.state.email}
          tagline={this.state.email}
          personname={this.state.personname}
          phone={this.state.phone}
          address={this.state.address}
          logo={this.state.logo}
        />
        {/* <Footer /> */}
      </div>
      // <Router>
      //   <div className="App">
      //     <Header linkfun={this.setlink} />
      //     {/* <Header />
      //     <Switch>
      //       <Route exact path="/" Component={About} />
      //       <Route exact path="/company" Component={Company} />
      //       <Route exact path="/festival_images" Component={Festivals_Images} />
      //     </Switch> */}

      //     <Content linktoRender={this.state.link} linkfun={this.setlink} />
      //     <Footer />
      //   </div>
      // </Router>
    );
  }
}

export default App;
