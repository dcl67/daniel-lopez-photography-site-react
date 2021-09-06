import React from 'react';
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import CardBody from "components/Card/CardBody";
import image1 from "assets/img/street/street_1.jpg";
import image4 from "assets/img/street/street_4.jpg";
import image5 from "assets/img/street/street_5.jpg";
import image6 from "assets/img/street/street_6.jpg";
import image7 from "assets/img/street/street_7.jpg";


export default class Street extends React.Component {
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
          Street <br/>
          <p style={{marginLeft: `0.4em`}}>
          “Seeing is not enough; you have to feel what you photograph” – Andre Kertesz          </p>
        </CardHeader>
        <CardBody>
          <img src={image1} alt={"image1"} style={{zoom: `18%`}}/>
          <img src={image4} alt={"image4"} style={{zoom: `18%`}}/>
          <img src={image5} alt={"image5"} style={{zoom: `18%`}}/>
          <img src={image6} alt={"image6"} style={{zoom: `13%`}}/>
          <img src={image7} alt={"image7"} style={{zoom: `22.5%`}}/>
        </CardBody>
        </Card>
      </div>
    )
  }
}
