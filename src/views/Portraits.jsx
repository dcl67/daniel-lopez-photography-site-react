import React from 'react';
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import CardBody from "components/Card/CardBody";
import image1 from "assets/img/portraits/portrait_1.jpg";
import image3 from "assets/img/portraits/portrait_3.jpg";
import image10 from "assets/img/portraits/portrait_10.jpg";
import image14 from "assets/img/portraits/portrait_14.jpg";
import image15 from "assets/img/portraits/portrait_15.jpg";
import image16 from "assets/img/portraits/portrait_16.jpg";
import image17 from "assets/img/portraits/portrait_17.jpg";
import image18 from "assets/img/portraits/portrait_18.jpg";
import image19 from "assets/img/portraits/portrait_19.jpg";
import image21 from "assets/img/portraits/portrait_21.jpg";


export default class Portraits extends React.Component {
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
            Portraits <br/>
            <p style={{marginLeft: `0.4em`}}>
              “It’s one thing to make a picture of what a person looks like,<br/>
              it’s another thing to make a portrait of who they are." — Paul Caponigro
            </p>
          </CardHeader>
          <CardBody>
            <img src={image1} alt={"image1"} style={{zoom: `9%`}}/>
            <img src={image3} alt={"image3"} style={{zoom: `9%`}}/>
            <img src={image10} alt={"image10"} style={{zoom: `9%`}}/>
            <img src={image14} alt={"image14"} style={{zoom: `9%`}}/>
            <img src={image15} alt={"image15"} style={{zoom: `9%`}}/>
            <img src={image16} alt={"image16"} style={{zoom: `9%`}}/>
            <img src={image17} alt={"image17"} style={{zoom: `9%`}}/>
            <img src={image18} alt={"image18"} style={{zoom: `9%`}}/>
            <img src={image19} alt={"image19"} style={{zoom: `9%`}}/>
            <img src={image21} alt={"image21"} style={{zoom: `9%`}}/>
          </CardBody>
        </Card>
      </div>
    )
  }
}
