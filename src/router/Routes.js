import About from "../components/About";
import GoogleMap from "../components/GoogleMap";

export default [
  {
    component: About,
    path: '/about',
  },
  {
    component: GoogleMap,
    path: '/',
    exact: true
  }
];