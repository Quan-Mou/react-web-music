import { Redirect } from "react-router-dom";
import Discover from "../pages/discover";
import Friend from "../pages/friend";
import Mine from "../pages/mine";
import Recommend from "../pages/discover/children/recommend"
const routes = [
  {
    path: "/",
    exact: true,
    render: () => {
      return <Redirect to='/discover' />
    }
  },
  {
    path: "/discover",
    component: Discover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to='/discover/recommend' />
      },
      {
        path: '/discover/recommend',
        component: Recommend
      },
      {
        path: '/discover/toplist',
        component: Recommend
      },
      {
        path: '/discover/playlist',
        component: Recommend
      },
      {
        path: '/discover/djradio',
        component: Recommend
      },
      {
        path: '/discover/artist',
        component: Recommend
      },
      {
        path: '/discover/album',
        component: Recommend
      },
    ]
  },
  {
    path: "/friend",
    component: Friend
  },

  {
    path: "/mine",
    component: Mine
  }
]
export default routes;