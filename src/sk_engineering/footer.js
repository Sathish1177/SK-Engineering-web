import React from "react";
import "../styls/footer.css"

function Footer(){
    return(
        <>
        <div className="footer">
          
          <div className="foot_content">
           <p>Subscribe to our newsletter</p>

           <div className="form">
          <input type="text" placeholder="Email" required />
          <button  >
            <span >Subscribe</span>
          </button>
        </div>
               
               <p>
               You'll got an email about once a month, we'll never share
               your address
               </p>
          </div>

          <div className="list_item">
            <ul>
              <li> <a href="#">Product</a></li>
              <li><a href="#">Color-Range</a></li>
              <li><a href="#">Specification</a></li>
              <li><a href="#">clients</a></li>
              <li><a href="#">Contact Ust</a></li>
            </ul>
          </div>

          <div className="icons">
                <ul>
                  <li><i class="fa-brands fa-whatsapp"></i></li>
                
                  <li><i class="fa-brands fa-facebook-f"></i></li>
                  <li><i class="fa-brands fa-linkedin-in"></i></li>
                  <li><i class="fa-brands fa-x-twitter"></i></li>

                </ul>
          </div>
          <div className="line"></div>
          <div className="copyright">
            <p>
            © Copyright 2023. All Rights Reserved. Website developed by <a href="#">Kitkat Software Technologies</a>
            </p>
          </div>
        </div>
        </>
    )
}
export{ Footer}