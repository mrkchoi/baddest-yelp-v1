import React from "react";
import ResultCard from "./ResultCard";
import "./ResultList.css";
import yelp from "../api/yelp";

class ResultList extends React.Component {
  async componentDidMount() {
    const response = await yelp.get("search", {
      params: {
        term: "sushi"
      }
    });
  }
  render() {
    return (
      <div className="ui container">
        <div className="result__list">
          <ResultCard />
        </div>
      </div>
    );
  }
}
export default ResultList;
