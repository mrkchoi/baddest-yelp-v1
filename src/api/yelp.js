// API KEY: ls6OVnKsmjurPDd1siN2k2wVWw43uienKsbWmdAZlniNEQom0bd9MJK59RvEz2FZqcOy8jG0Zl-Dq_uYCP8uzmZc7ygfMdDc4YnYtHAeiz_nNPGwGczxAoLaUR8gXHYx

// https://api.yelp.com/v3/businesses/search

// PARAMS:
// term [string]
// location [string]
// limit [int: default 20, max 50]
// sort_by [string: best_match, rating, review_count or distance]

import axios from "axios";

const KEY =
  "ls6OVnKsmjurPDd1siN2k2wVWw43uienKsbWmdAZlniNEQom0bd9MJK59RvEz2FZqcOy8jG0Zl-Dq_uYCP8uzmZc7ygfMdDc4YnYtHAeiz_nNPGwGczxAoLaUR8gXHYx";

export default axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses",
  headers: {
    accept: "application/json",
    "x-requested-with": "xmlhttprequest",
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${KEY}`
  },
  params: {
    limit: 50
  }
});
