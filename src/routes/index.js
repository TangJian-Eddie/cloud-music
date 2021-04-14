import React from "react";
import { Redirect } from "react-router-dom";
import Home from "../application/Home";
import Recommend from "../application/Recommend";
import Singers from "../application/Singers";
import Rank from "../application/Rank";

export default [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to={"/recommend"} />,
  },
  {
    component: Home,
    routes: [
      {
        path: "/recommend",
        component: Recommend,
      },
      {
        path: "/singers",
        component: Singers,
      },
      {
        path: "/rank",
        component: Rank,
      },
    ],
  },
];
