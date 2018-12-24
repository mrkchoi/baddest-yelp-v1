import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import ResultList from "./ResultList";

class App extends React.Component {
  render() {
    return (
      <div className="ui container" style={{ marginTop: "3rem" }}>
        App
        <Header />
        <SearchBar />
        <ResultList />
      </div>
    );
  }
}
export default App;
