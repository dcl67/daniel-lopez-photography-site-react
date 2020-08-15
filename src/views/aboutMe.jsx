import React from "react";
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import CardBody from "components/Card/CardBody";


export default class aboutMe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <h2>Danny Lopez</h2>
        <p>Danny Lopez is a Computer Engineering alum from Drexel University. He received his Bachelor's of Science in Computer Engineering in June of 2018.</p>
        <p>Danny is an aspiring software engineer, and, in his spare time, Danny works as a hobbyist/freelance photographer. Types of photography he is interested in include portraits landscapes, and street.</p>
        <p>To reach out to Danny, check out the <a href="/contact">contact me</a> page.</p>
      </div>
    )
  }
}