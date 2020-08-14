import React from "react";
import MainFeaturedPost from '../components/MainFeaturedPost/MainFeaturedPost';
import FeaturedPost from '../components/FeaturedPost/FeaturedPost';
import Grid from '@material-ui/core/Grid';
import Main from '../components/Main/Main';
import Sidebar from '../components/Sidebar/Sidebar';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import post1 from './blog-post.1.md';


const mainFeaturedPost = {
    title: 'Welcome to my website!',
    description:
      "This site is still fairly new, and under a lot of development, but this will become my photography portfolio with built in blog functionality.",
    image: 'https://source.unsplash.com/random',
    imgText: 'main image description',
    linkText: 'Continue reading…',
  };
  
const featuredPosts = [
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

const sidebar = {
    title: 'About',
    description:
      'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
    archives: [
        { title: "To come at a later date...", url: "/"}
    //   { title: 'March 2020', url: '#' },
    //   { title: 'February 2020', url: '#' },
    //   { title: 'January 2020', url: '#' },
    //   { title: 'November 1999', url: '#' },
    //   { title: 'October 1999', url: '#' },
    //   { title: 'September 1999', url: '#' },
    //   { title: 'August 1999', url: '#' },
    //   { title: 'July 1999', url: '#' },
    //   { title: 'June 1999', url: '#' },
    //   { title: 'May 1999', url: '#' },
    //   { title: 'April 1999', url: '#' },
    ],
    social: [
      { name: 'GitHub', icon: GitHubIcon, url: "https://github.com/dcl67" },
      { name: 'Instagram', icon: InstagramIcon, url: "https://instagram.com/_dopez"  },
      { name: 'Facebook', icon: FacebookIcon, url: "https://www.facebook.com/DLoPhoto-181326685929373" },
    ],
};

export default class BlogContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        fetch(post1)
        .then(response => {
          return response.text()
        }).then((text) => {
            let posts = this.state.posts
            posts.push(text)
          this.setState({posts: posts})
        })
    
        // fetch(post2)
        // .then(response => {
        //   return response.text()
        // }).then((text) => {
        //     let posts = this.state.posts
        //     posts.push(text)
        //   this.setState({posts: posts})
        // })
    
        // fetch(post3)
        // .then(response => {
        //   return response.text()
        // }).then((text) => {
        //     let posts = this.state.posts
        //     posts.push(text)
        //   this.setState({posts: posts})
        // })
    }

    render() {
        return (
            <main>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Grid container spacing={4}>
            {featuredPosts.map((post) => (
                <FeaturedPost key={post.title} post={post} />
            ))}
            </Grid>
            <Grid container spacing={5}>
            <Main title="Blogs posts and things" posts={this.state.posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
            </Grid>
        </main>
        )
    }
}