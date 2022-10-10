import React from "react";
import  pic from '../assets/intro/titile.png'
import Buttons from "./Buttons";
import './style.css';
import Background from "../assets/backgroundImages/Background1.jpg"
const Home = ()=>
{
   return (
    <>
    <div
        className="home-bg"
        style={{
          paddingTop: "132px",
          paddingLeft: "20px",
          overflow: "hidden",
          height: "100vh",
          backgroundImage : `url(${Background})`
        }}
      >
        <span
          className="navigtors"
          style={{ fontSize: "34px", color: "#ffc114db"}}
        >
          Please select a year from above
        </span>
        <img className="into-img" src={pic} alt="logo" />
      </div>
    </>
)
}

export default Home