import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionTabs from "./Sections/SectionTabs.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionNotifications from "./Sections/SectionNotifications.js";
import SectionTypography from "./Sections/SectionTypography.js";
import SectionJavascript from "./Sections/SectionJavascript.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import SectionLogin from "./Sections/SectionLogin.js";
import SectionExamples from "./Sections/SectionExamples.js";
import SectionDownload from "./Sections/SectionDownload.js";

import styles from "assets/jss/material-kit-react/views/components.js";
import HomeAboutContent from "./Sections/HomeAboutUs.js";
import Team from "./Sections/Testimonials.js";
import Features from "./Sections/HomeServices.js";
import TeamSection from "views/LandingPage/Sections/TeamSection.js";
import TopBar from "./Sections/TopStyleBar.js";
import Subscribe from "./Sections/Subsribe.js";
import HomeSectionPills from "./Sections/HomeSectionsPills.js";
import { Avatar } from "@material-ui/core";
import logo from './../../assets/img/faces/logo.png'
const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
      
      leftLinks={ <Avatar variant="square" src={logo} style={{width:"80%",height:"30%"}} />}
      // brand="Modicum Technologies"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/faces/img2.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              {/* <div className={classes.brand}>
                <h1 className={classes.title}>We are Software Experts</h1>
                <h3 className={classes.subtitle}>
                  We develop Softwares like Websites mobil apps And erp Softwares
                </h3>
              </div> */}
               <SectionCarousel />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
      <TopBar/>
      <HomeAboutContent/>   
      <Features/>
      <HomeSectionPills />
        
        
      <TeamSection/>
        
        {/* <SectionCompletedExamples /> */}
        
      <SectionLogin />
      <Subscribe/>
        {/* <SectionExamples /> */}
        
      </div>
      <Footer />
    </div>
  );
}
