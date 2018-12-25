import React from "react";
import { Button, Form, Segment, Icon } from "semantic-ui-react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = {
    city: "San Jose, CA",
    term: ""
  };

  onTermChange = e => {
    this.setState({
      term: e.target.value
    });
    // console.log(e.target.value);
  };
  onCityChange = e => {
    this.setState({
      city: e.target.value
    });
    // console.log(e.target.value);
  };
  onFormSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.city, this.state.term);
    // console.log([this.state.city, this.state.term]);
  };

  render() {
    return (
      <Segment className="searchbar">
        <Form
          className="container searchbar__form"
          onSubmit={this.onFormSubmit}
        >
          <Form.Group widths="equal" className="searchbar__form">
            <Form.Field>
              <label>Find</label>
              <input
                placeholder="burgers, barbers, spas, handymen..."
                onChange={this.onTermChange}
                value={this.state.term}
              />
            </Form.Field>
            <Form.Field>
              <label>Near</label>
              <input
                placeholder="San Jose, CA"
                onChange={this.onCityChange}
                value={this.state.city}
              />
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
