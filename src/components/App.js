import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import ResultList from "./ResultList";

class App extends React.Component {
  render() {
    return (
      <div className="ui">
        <Header />
        <SearchBar />
        <ResultList />
      </div>
    );
  }
}
export default App;
