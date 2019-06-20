import React from "react";
import { logo } from "../assets/images";
import { Link, withRouter } from "react-router-dom";

type Location = {
  hash: "";
  key: string;
  pathname: string;
  search: string;
  state?: undefined;
};
export const _Header = ({ location }: { location: Location }) => {
  return (
    <header>
      {location.pathname.includes("car") && (
        <Link class="link-to-garage" to="/">
          back to garage
        </Link>
      )}
      {location.pathname === "/" && (
        <input
          className="search-bar"
          placeholder="search"
          type="text"
          onChange={e => {}} // HINT: e.target.value
        />
      )}
      <img className="logo" src={logo} alt="" />
    </header>
  );
};

export const Header = withRouter(_Header);
