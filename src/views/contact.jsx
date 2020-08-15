import React from "react";
import Grid from '@material-ui/core/Grid';
import Sidebar from '../components/Sidebar/Sidebar';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Main from '../components/Main/Main';
import contactMe from './contact-me.md';


export default class contact extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        posts: []
      }
      this.featuredPosts = [
        {
          title: 'My first post',
          date: 'July 22',
          description:
            'This is effectively a link to the first post on my new page. Uhh... hello world?',
          image: 'https://source.unsplash.com/random',
          imageText: 'Image Text',
        },
        {
          title: 'Second post',
          date: 'July 22',
          description:
            "Coming soon, stay tuned!",
          image: 'https://source.unsplash.com/random',
          imageText: 'Image Text',
        },
    ];
  }

  componentDidMount() {
    fetch(contactMe)
    .then(response => {
      return response.text()
    }).then((text) => {
        let posts = this.state.posts
        posts.push(text)
      this.setState({posts: posts})
    })
  }

  render() {
    return (
      <main>
        <div style={{paddingTop: `3em`}}></div>
        <Grid container spacing={5}>
          <Main title="Contact Me" posts={this.state.posts} />
          <Sidebar
            title={'About'}
            description={
              'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.'
            }
            archives={[
                { title: "", url: "#"}
            ]}
            social={[
              { name: 'GitHub', icon: GitHubIcon, url: "https://github.com/dcl67" },
              { name: 'Instagram', icon: InstagramIcon, url: "https://instagram.com/_dopez"  },
              { name: 'Facebook', icon: FacebookIcon, url: "https://www.facebook.com/DLoPhoto-181326685929373" },
            ]}
            style={{textAlign: "right", paddingleft: "100%"}}
          />
        </Grid>
      </main>
    )
  }
}