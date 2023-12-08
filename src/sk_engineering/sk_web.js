import React from "react";

import { Navbar } from "./roofing";
import { Services } from "./OurServices";
import { Our_project } from "./ourproject";
import { Clint } from "./clint";
import { Footer } from "./footer";

function Sk_web(){

    return(

        <React.Fragment>

          <Navbar/>
          <Services/>
          <Our_project/>
          <Clint/>
          <Footer/>
        </React.Fragment>
    )
}
export default Sk_web;