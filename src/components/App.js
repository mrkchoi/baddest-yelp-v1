import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import ResultList from "./ResultList";
import yelp from "../api/yelp";

class App extends React.Component {
  state = {
    data: [],
    ids: []
  };

  onFormSubmit = async (city, term) => {
    const responseTerm = await yelp.get("search", {
      params: {
        term: `${term}`,
        sort_by: "rating",
        location: `${city}`,
        limit: 50
      }
    });

    // console.log(responseTerm.data.businesses);

    const response = responseTerm.data.businesses;
    const results = response.map(item => {
      return item.id;
    });
    // console.log(results);
    this.setState({
      data: responseTerm.data.businesses,
      ids: results
    });
  };
  render() {
    return (
      <div className="ui">
        <Header />
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <ResultList results={this.state.data} />
      </div>
    );
  }
}
export default App;

// ZOMATO API
// onFormSubmit = async (city, term) => {
//   const responseCity = await ZomatoCity.get("cities", {
//     params: {
//       q: `${city}`
//     }
//   });
//   const cityID = responseCity.data.location_suggestions[0].id;

//   const responseTerm = await ZomatoTerm.get("search", {
//     params: {
//       q: `${term}`,
//       sort: "rating",
//       order: "asc",
//       entity_type: "city",
//       entity_id: `${cityID}`
//     }
//   });
