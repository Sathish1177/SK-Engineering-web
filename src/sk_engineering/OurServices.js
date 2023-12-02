import React from "react";
import "../styls/services.css";
import pic1 from "../img/Roof and Wall Cladding1.jpg";
import pic2 from "../img/zincalume steel2.1.webp";
import pic3 from "../img/Color Coated Sheet Coil3.jpg";
import pic4 from "../img/structural design4.jpg";
import pic5 from "../img/Smart Building Solution5.jpg";
import pic6 from "../img/Butler buildings Systems6.jpg";
import ic1 from "../img/icon1.png";
import ic2 from "../img/icon2.png";

function Services(){

    return(
        <>
        <div className="heading">
          <h1>Our Services</h1>
      <p></p>
          <div className="img_box">

            <div className="pic1">
            <img src={pic1} width={350} height={250}></img>
                <div>
                <span className="small-box"></span>
            <label className="pic-name">Roof and Wall Cladding</label>
                </div>
           </div>

           <div className="pic1">
            <img src={pic2} width={350} height={250}></img>
                <div>
                <span className="small-box"></span>
            <label className="pic-name">Zincalume Steel</label>
                </div>
           </div>

           <div className="pic1">
            <img src={pic3} width={350} height={250}></img>
                <div>
                <span className="small-box"></span>
            <label className="pic-name">Color Coated Sheet Coil</label>
                </div>
           </div>

           <div className="pic1">
            <img src={pic4} width={350} height={250}></img>
                <div>
                <span className="small-box"></span>
            <label className="pic-name">Structural Solution</label>
                </div>
           </div>

           <div className="pic1">
            <img src={pic5} width={350} height={250}></img>
                <div>
                <span className="small-box"></span>
            <label className="pic-name">Smart Building Solution</label>
                </div>
           </div>

           <div className="pic1">
            <img src={pic6} width={350} height={250}></img>
                <div>
                <span className="small-box"></span>
            <label className="pic-name">Butler buildings Systems</label>
                </div>
           </div>


          </div>
        </div>

        <div className="view_all_services">
             <p>VIEW ALL SERVICES</p>
        </div>
        <div className="container_box">
            <h2>
                <span class="theme_color">SK Engineering Roofing Industries</span>
                &nbsp; is one of the leading and the largest private <br></br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; sector producer of roofing sheets in India.  
            </h2>

        </div>

        <div className="add_content">
              <div className="left">
              <h2>Why Choose Us</h2>
               
              <p className="paraa">SK Engineering Roofing Industries foundied by chairman Mr H Harish.
Our range of pre-engineered buildings, roofing, cladding and rainwater systems, made from raw materials of the highest quality in accordance with strict ASTM / JIS / AS and IS standards, offers flexibility of design to suit any construction need be it your business, factory, home or office. Our products are made to meet your aesthetic needs as well.</p>
              </div>

               <div className="icon">
              <div className="icon1">
              
                <img src={ic1} width={500}></img>
                
            
              </div>

              <div className="icon2">
              
              <img src={ic2} width={500}></img>
              
          
            </div>
            </div>

        </div>
        </>
    )
}
export {Services};