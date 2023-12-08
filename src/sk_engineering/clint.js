import React from "react";
import "../styls/clint.css"
import logo1 from "../img/logo_1 re.webp";
import logo2 from "../img/logo_2.jpg";
import logo3 from "../img/bsnl_1471071754.webp";
import logo4 from "../img/logo444.jpeg";
import logo5 from "../img/Reliance_Industries_Green_Logo.jpg";
import logo6 from "../img/logo_6.webp";
import logo7 from "../img/logo_7.jpeg";

function Clint(){
    return(
        <>
        <div className="clint_box">
            <div className="content">
                 <h1>Our Awesome <br></br>Clients</h1>
            </div>
             
             <div className="over">
            <div className="clint_logos">
                <div className="logoss">
                  <img src={logo1} width={150} height={160}/>
                </div>

                <div className="logoss">
                  <img src={logo2} width={150} height={160}/>
                </div>

                <div className="logoss">
                  <img src={logo3} width={150} height={160}/>
                </div>

                <div className="logoss">
                  <img src={logo4} width={150} height={160}/>
                </div>

                <div className="logoss">
                  <img src={logo5} width={150} height={160}/>
                </div>

                <div className="logoss">
                  <img src={logo6} width={150} height={160}/>
                </div>

                {/* <div className="logoss">
                  <img src={logo7} width={150} height={160}/>
                </div> */}

                
    
            </div>
            </div>
        </div>
        </>
    )

};
export {Clint};