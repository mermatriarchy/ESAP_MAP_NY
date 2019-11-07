import About from "../components/About";
import GoogleMap from "../components/GoogleMap";

const Routes = [
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

export default Routes;