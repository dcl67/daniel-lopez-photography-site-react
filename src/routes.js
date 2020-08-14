import BlogContent from "views/BlogContent";
import Portraits from "views/Portraits";
import Landscapes from "views/Landscapes";
import Street from "views/Street";
import aboutMe from "views/aboutMe";
import contact from "views/contact";

var routes = [
  {
    path: "/",
    name: "Home",
    component: BlogContent,
    layout: ""
  },
  {
    path: "/home",
    name: "Home",
    component: BlogContent,
    layout: ""
  },
  {
    path: "/blog",
    name: "Home",
    component: BlogContent,
    layout: ""
  },
  {
    path: "/portraits",
    name: "Portraits",
    component: Portraits,
    layout: ""
  },
  {
    path: "/landscapes",
    name: "Landscapes",
    component: Landscapes,
    layout: ""
  },
  {
    path: "/street",
    name: "Street",
    component: Street,
    layout: ""
  },
  {
    path: "/about-me",
    name: "About me",
    component: aboutMe,
    layout: ""
  },
  {
    path:"/contact",
    name: "Contact",
    component: contact,
    layout: ""
  }
];
export default routes;
