import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import PhotoPage from "../template/PhotoPage";
import DescPhoto from "../template/DescPhoto";
import VideoPage from "../template/VideoPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/photo",
    name: "PhotoPage",
    component: PhotoPage,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/videos",
    name: "VideoPage",
    component: VideoPage,
  },
  {
    path: "/photo/:name",
    name: "DescPhoto",
    component: DescPhoto,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
