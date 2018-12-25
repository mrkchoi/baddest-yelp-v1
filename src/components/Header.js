import React from "react";
import { Menu, Segment } from "semantic-ui-react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <Segment className="header__main">
        <Menu
          pointing
          secondary
          style={{ borderBottom: "none" }}
          className="ui container"
        >
          <div className="header__logo">
            <img
              src="https://images.vexels.com/media/users/3/137424/isolated/preview/19b872cc66b8bfc0fb8d947e8728f183-yelp-icon-logo-by-vexels.png"
              alt="Yelp Logo"
            />
          </div>
          <Menu.Item
            name="Yelp"
            style={{
              fontSize: "1.4rem",
              fontWeight: 600,
              color: "white",
              paddingLeft: "0.8rem"
            }}
          />
        </Menu>
      </Segment>
    );
  }
}
export default Header;
