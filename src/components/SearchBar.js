import React from "react";
import { Button, Form, Segment, Icon } from "semantic-ui-react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  render() {
    return (
      <Segment>
        <Form className="container searchbar__form">
          <Form.Group widths="equal" className="searchbar__form">
            <Form.Field>
              <label>Find</label>
              <input placeholder="burgers, barbers, spas, handymen..." />
            </Form.Field>
            <Form.Field>
              <label>Near</label>
              <input placeholder="San Jose, CA" />
            </Form.Field>
            <Button type="submit" className="searchbar__btn">
              <Icon name="search" className="searchbar__icon--search" />
            </Button>
          </Form.Group>
        </Form>
      </Segment>
    );
  }
}
export default SearchBar;
