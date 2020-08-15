import React from 'react';
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import CardBody from "components/Card/CardBody";
import image1 from "assets/img/portraits/portrait_1.jpg";
import image2 from "assets/img/portraits/portrait_2.jpg";
import image3 from "assets/img/portraits/portrait_3.jpg";
import image4 from "assets/img/portraits/portrait_4.jpg";
import image5 from "assets/img/portraits/portrait_5.jpg";
import image6 from "assets/img/portraits/portrait_6.jpg";
import image7 from "assets/img/portraits/portrait_7.jpg";
import image8 from "assets/img/portraits/portrait_8.jpg";
import image9 from "assets/img/portraits/portrait_9.jpg";
import image10 from "assets/img/portraits/portrait_10.jpg";
import image11 from "assets/img/portraits/portrait_11.jpg";
import image12 from "assets/img/portraits/portrait_12.jpg";
import image13 from "assets/img/portraits/portrait_13.jpg";
import image14 from "assets/img/portraits/portrait_14.jpg";
import image15 from "assets/img/portraits/portrait_15.jpg";
import image16 from "assets/img/portraits/portrait_16.jpg";
import image17 from "assets/img/portraits/portrait_17.jpg";
import image18 from "assets/img/portraits/portrait_18.jpg";
import image19 from "assets/img/portraits/portrait_19.jpg";
import image20 from "assets/img/portraits/portrait_20.jpg";
import image21 from "assets/img/portraits/portrait_21.jpg";
import image22 from "assets/img/portraits/portrait_22.jpg";


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
            <img src={image1} style={{zoom: `9%`}}/>
            {/* <img src={image2} style={{zoom: `9%`}}/> */}
            <img src={image3} style={{zoom: `9%`}}/>
            {/* <img src={image4} style={{zoom: `9%`}}/>
            <img src={image5} style={{zoom: `9%`}}/> */}
            {/* <img src={image6} style={{zoom: `9%`}}/>
            <img src={image7} style={{zoom: `9%`}}/>
            <img src={image8} style={{zoom: `9%`}}/>
            <img src={image9} style={{zoom: `9%`}}/> */}
            <img src={image10} style={{zoom: `9%`}}/>
            {/* <img src={image11} style={{zoom: `9%`}}/>
            <img src={image12} style={{zoom: `9%`}}/>
            <img src={image13} style={{zoom: `9%`}}/> */}
            <img src={image14} style={{zoom: `9%`}}/>
            <img src={image15} style={{zoom: `9%`}}/>
            <img src={image16} style={{zoom: `9%`}}/>
            <img src={image17} style={{zoom: `9%`}}/>
            <img src={image18} style={{zoom: `9%`}}/>
            <img src={image19} style={{zoom: `9%`}}/>
            {/* <img src={image20} style={{zoom: `9%`}}/> */}
            <img src={image21} style={{zoom: `9%`}}/>
            {/* <img src={image22} style={{zoom: `9%`}}/> */}
          </CardBody>
        </Card>
      </div>
    )
  }
}
