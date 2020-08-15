import React from 'react';
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import CardBody from "components/Card/CardBody";
import image1 from "assets/img/landscapes/landscape_1.jpg";
import image2 from "assets/img/landscapes/landscape_2.jpg";
import image3 from "assets/img/landscapes/landscape_3.jpg";
import image4 from "assets/img/landscapes/landscape_4.jpg";
import image5 from "assets/img/landscapes/landscape_5.jpg";
import image6 from "assets/img/landscapes/landscape_6.jpg";
import image7 from "assets/img/landscapes/landscape_7.jpg";
import image8 from "assets/img/landscapes/landscape_8.jpg";
import image12 from "assets/img/landscapes/landscape_12.jpg";
import image13 from "assets/img/landscapes/landscape_13.jpg";
import image14 from "assets/img/landscapes/landscape_14.jpg";
import image15 from "assets/img/landscapes/landscape_15.jpg";

export default class Landscapes extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Card>
        <CardHeader>
          Landscapes <br/>
          <p style={{marginLeft: `0.4em`}}>
            "The lake and the mountains have become my landscape, my real world." — Georges Simenon
          </p>
        </CardHeader>
        <CardBody>
          <img src={image1} alt={"image1"} style={{zoom: `9%`}}/>
          <img src={image2} alt={"image2"} style={{zoom: `9%`}}/>
          <img src={image3} alt={"image3"} style={{zoom: `9%`}}/>
          <img src={image4} alt={"image4"} style={{zoom: `9%`}}/>
          <img src={image5} alt={"image5"} style={{zoom: `9%`}}/>
          <img src={image6} alt={"image6"} style={{zoom: `9%`}}/>
          <img src={image7} alt={"image7"} style={{zoom: `9%`}}/>
          <img src={image8} alt={"image8"} style={{zoom: `9%`}}/>
          <img src={image12} alt={"image12"} style={{zoom: `9%`}}/>
          <img src={image13} alt={"image13"} style={{zoom: `9%`}}/>
          <img src={image14} alt={"image14"} style={{zoom: `9%`}}/>
          <img src={image15} alt={"image15"} style={{zoom: `9%`}}/>
        </CardBody>
        </Card>
      </div>
    )
  }
}
