import React from "react";
import "../styls/project.css"
import pro1 from "../img/project1.jpg";
import pro2 from "../img/project2.webp";
import pro3 from "../img/project3.jpg";
import pro4 from "../img/project4.webp";
import pro5 from "../img/project5.jpg";

import cp1 from "../img/SOLAR FRAME 001.jpeg";
import cp2 from "../img/GI DECKING SHEET 002.jpg";
import cp3 from "../img/ROOF VENTILATOR 003.jpg";
import cp4 from "../img/CURVED ROOFING PROFILE 004.jpg";
import cp5 from "../img/005.jpeg";

function Our_project(){
    return(
        <>
        <div className="headingg">
        <h1>Our Project</h1>
        <p></p>


        </div>
        <div className="lists">
           <ul>
           <li><a href="#">VIEW ALL</a> <span> &nbsp; &nbsp; &nbsp;/</span></li>
           <li><a href="#" className="one">SOLAR FRAME</a> <span>&nbsp;&nbsp;&nbsp;/</span></li>
           <li><a href="#">GI DECKING SHEET</a> <span>&nbsp;&nbsp;&nbsp;/</span></li>
           <li><a href="#">ROOF VENTILATOR</a> <span>&nbsp;&nbsp;&nbsp;/</span></li>
           <li><a href="#">CURVED ROOFING PROFILE</a> <span>&nbsp;&nbsp;&nbsp;/</span></li>
           <li><a href="#">WALL CLADDING</a> </li>
           </ul>
        </div>

        <div className="project_img">
        <div className="projectimg">


          <div className="img-box">
          <div className="box">
            <img src={pro1}  className="cp1"></img>
            </div>
            <div className="change"></div>
            </div>

            <div className="img-box1">
          <div className="box">
            <img src={pro2}  className="cp1"></img>
            </div>
            <div className="change1"></div>
            </div>

            <div className="img-box2">
          <div className="box">
            <img src={pro3}  className="cp1"></img>
            </div>
            <div className="change2"></div>
            </div>

            <div className="img-box3">
          <div className="box">
            <img src={pro4}  className="cp1"></img>
            </div>
            <div className="change3"></div>
            </div>

            <div className="img-box4">
          <div className="box">
            <img src={pro5}  className="cp1"></img>
            </div>
            <div className="change4"></div>
            </div>

            
          {/* <div className="box">
            <img src={pro2} className="cp2"></img>
            </div>
          <div className="box"><img src={pro3} className="cp3"></img></div>
          <div className="box"><img src={pro4} className="cp4"></img></div>
          <div className="box"><img src={pro5} className="cp5"></img></div>
          */}



          </div>
         {/* <div className="projectimg">
            <div className="pro">
              <img src={pro1} width={200} height={200}></img>
            </div>

            <div className="pro">
              <img src={pro2} width={200} height={200}></img>
            </div>

            <div className="pro">
              <img src={pro3} width={200} height={200}></img>
            </div>

            <div className="pro">
              <img src={pro4} width={200} height={200}></img>
            </div>

            <div className="pro">
              <img src={pro5} width={200} height={200}></img>
            </div>
         </div> */}
        </div>

        
        </>
    )
}
export {Our_project};