import React from "react";
import img from "../img/WhatsApp Image.jpg"
import pic1 from "../img/pic1.jpg"
import "../styls/navbar.css"

function Navbar(){
    return(
        <>
        <div className="first">
          <div>
          <span className="logo">
                     <img src={img} width={180} height={100}></img>
                </span>
          </div>
              <div className="bar">
             <ul className="list">
               <li><a href="#">Home</a></li>
               <li><a href="#">About Us</a></li>
               <li><a href="#">Product</a>
               <ul class="Institution">
                <li><a href="#">Sheets</a></li>
                <li><a href="#">Tubes</a></li>
                <li><a href="#">Shutter</a></li>
                <li><a href="#">Louver </a></li>
                <li><a href="#">Ventilators</a></li>
                <li><a href="#">Sections</a></li>
                <li><a href="#">Strip </a></li>
                <li><a href="#">Roofing Accessories </a></li>
            </ul>
               </li>
               <li><a href="#">Color Range</a></li>
               <li><a href="#">Specification</a></li>
               <li><a href="#">Clients</a></li>
               <li><a href="#">Contact-us</a></li>
             </ul>
              
              </div>


        </div>

        <div className="big_img">
           <p className="para">
           Established in the year 1998 at Ondipudur, Coimbatore, Tamil Nadu, We “SK ENGINEERING” are a  based firm, engaged as the foremost of Feed Making Machine, Material Handling Conveyor, PVC Pulverizer Machine, etc. Our products are high in demand due to their premium quality and affordable prices. Furthermore, we ensure to timely deliver these products to our clients, through this.
           </p>
        {/* <img src={pic1} width={1215}  height={500}></img> */}
        </div>
        </>

    )
}
 export {Navbar};