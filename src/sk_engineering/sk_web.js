import React from "react";

import { Navbar } from "./roofing";
import { Services } from "./OurServices";
import { Our_project } from "./ourproject";

function Sk_web(){

    return(

        <React.Fragment>

          <Navbar/>
          <Services/>
          <Our_project/>
        </React.Fragment>
    )
}
export default Sk_web;