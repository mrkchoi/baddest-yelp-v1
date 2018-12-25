import React from "react";
import ResultCard from "./ResultCard";
import "./ResultList.css";

const ResultList = ({ results }) => {
  const renderedData = results.map(item => {
    // console.log(item);
    return <ResultCard data={item} key={item.id} />;
  });
  return (
    <div className="ui container">
      <div className="result__list">{renderedData}</div>
    </div>
  );
};
export default ResultList;
