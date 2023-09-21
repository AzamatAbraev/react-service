import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Articles from "./components/articles/Articles";
import Contact from "./components/contact/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Fragment>
    <Header />
    <Home />
    <About />
    <Services />
    <Articles />
    <Contact/>
  </Fragment>
);
