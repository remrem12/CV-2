import React from "react";
import { MDBCol, MDBBtn, MDBIcon, MDBTooltip } from "mdbreact";

const Social = () => {
  const buttons = [
    {
      name: "fb",
      icon: "facebook-f",
      tooltip: "Facebook",
      color: "#3b5998",
      link: "https://www.facebook.com/hakunonn/",
    },
    {
      name: "tw",
      icon: "twitter",
      tooltip: "Twitter",
      color: "#0082ca",
      link: "https://twitter.com/__hei12",
    },
    {
      name: "gplus",
      icon: "google",
      tooltip: "Gmail",
      link: "mailto:buihuunghia.10hlvc@gmail.com",
    },
    {
      name: "li",
      icon: "linkedin-in",
      tooltip: "LinkedIn",
      link: "https://www.linkedin.com/in/buihuunghia/",
    },
    {
      name: "git",
      icon: "github",
      tooltip: "Github",
      link: "https://github.com/remrem12",
    },
  ];

  return (
    <MDBCol className='social'>
      {buttons.map((button) => (
        <MDBTooltip placement="top" key={button.name}>
          <MDBBtn
            size="sm"
            tag="a"
            social={button.name}
            className="text-center mx-2"
            color="transparent"
            target="_blank"
            href={button.link}
          >
            <MDBIcon fab icon={button.icon} size="2x" />
          </MDBBtn>
          <div>
            {button.tooltip}
          </div>
        </MDBTooltip>
      ))}
    </MDBCol>
  );
};

export default Social;
