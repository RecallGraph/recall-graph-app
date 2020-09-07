import React from "react";
import Slider from "react-slick";
// import withStyles from "@material-ui/core/styles/withStyles";
// import LocationOn from "@material-ui/icons/LocationOn";

// import GridContainer from "../Grid/GridContainer.jsx";
// import GridItem from "../Grid/GridItem.jsx";
// import Card from "../Card/Card.jsx";
// import carouselStyle from "../../assets/jss/views/carouselStyle.jsx";
import image1 from "../../assets/img/bg.jpg";
import image2 from "../../assets/img/bg2.jpg";
import image3 from "../../assets/img/bg3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default class SectionCarousel extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true
    };
    return (
      <div>
        <Slider {...settings}>
          <img src={image1} alt="First slide"/>
          <img src={image2} alt="Second slide"/>
          <img src={image3} alt="Third slide"/>
        </Slider>
      </div>
    );
  }
}

// class SectionCarousel extends React.Component {
//   render() {
//     const { classes } = this.props;
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       autoplay: false
//     };
//     return (
//       <div className={classes.section}>
//         <div className={classes.container}>
//           <GridContainer>
//             <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
//               <Card carousel>
//                 <Carousel {...settings}>
//                   <div>
//                     <img
//                       src={image1}
//                       alt="First slide"
//                       className="slick-image"
//                     />
//                     <div className="slick-caption">
//                       <h4>
//                         <LocationOn className="slick-icons" />
//                         Yellowstone National Park, United States
//                       </h4>
//                     </div>
//                   </div>
//                   <div>
//                     <img
//                       src={image2}
//                       alt="Second slide"
//                       className="slick-image"
//                     />
//                     <div className="slick-caption">
//                       <h4>
//                         <LocationOn className="slick-icons" />
//                         Somewhere Beyond, United States
//                       </h4>
//                     </div>
//                   </div>
//                   <div>
//                     <img
//                       src={image3}
//                       alt="Third slide"
//                       className="slick-image"
//                     />
//                     <div className="slick-caption">
//                       <h4>
//                         <LocationOn className="slick-icons" />
//                         Yellowstone National Park, United States
//                       </h4>
//                     </div>
//                   </div>
//                 </Carousel>
//               </Card>
//             </GridItem>
//           </GridContainer>
//         </div>
//       </div>
//     );
//   }
// }

// export default withStyles(carouselStyle)(SectionCarousel);
