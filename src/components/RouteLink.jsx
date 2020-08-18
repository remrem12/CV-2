import React from "react";
import { useRouteMatch } from "react-router-dom";
import { MDBNavLink, MDBNavItem } from 'mdbreact'

const RouteLink = ({ item }) => {
  let match = useRouteMatch({
    path: item.route,
    exact: item.active,
  });

  return (
    <MDBNavItem active={!!match}>
      <MDBNavLink
        style={{ fontSize: "18px", fontWeight: "400", padding: ".5rem 1rem" }}
        className='mx-2'
        to={item.route}
      >
        {item.name}
      </MDBNavLink>
    </MDBNavItem>
  );
};

export default RouteLink
