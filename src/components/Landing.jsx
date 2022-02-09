import React from "react";
import { Button } from "react-bootstrap";
import box from "../images/Group.jpg";

function Landing() {
  return (
    <div className=" ">
      <div>
        <img scr={box} alt=" " />
      </div>
      <div>
        <h4>
          This Platform enables the public to report digital rights violations
          in Africa.
        </h4>
        </div>
        <div>
          <p>
            ALL Information shared will be treated with utmost confidentiality
            and identity will not be made public
          </p>
        </div>
        <div>
            <Button variant="success">MAKE A REPORT</Button>
        </div>
    </div>
  );
}

export default Landing;
