import React from "react";
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import { FaPlay } from 'react-icons/fa';
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/views/landingPage.jsx";

import ProductSection from "components/sections/ProductSection.jsx";
import TeamSection from "components/sections/TeamSection.jsx";
import WorkSection from "components/sections/WorkSection.jsx";
import SectionCarousel from "components/sections/SectionCarousel";

const dashboardRoutes = [];

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Recall Graph"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax filter image={require("assets/img/landing-bg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>RecallGraph</h1>
                <h5>
                RecallGraph is a versioned-graph data store - it retains all changes that 
                its data (vertices and edges) have gone through to reach their current state. 
                It supports point-in-time graph traversals, letting the user query any past 
                state of the graph just as easily as the present.
                </h5>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  href="https://youtu.be/UP2KDQ_kL4I"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaPlay/>
                  Watch video
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProductSection />
            <SectionCarousel />
            <TeamSection />
            <WorkSection />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);