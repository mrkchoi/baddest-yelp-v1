// API KEY: ls6OVnKsmjurPDd1siN2k2wVWw43uienKsbWmdAZlniNEQom0bd9MJK59RvEz2FZqcOy8jG0Zl-Dq_uYCP8uzmZc7ygfMdDc4YnYtHAeiz_nNPGwGczxAoLaUR8gXHYx

// https://api.yelp.com/v3/businesses/search

// PARAMS:
// term [string]
// location [string]
// limit [int: default 20, max 50]
// sort_by [string: best_match, rating, review_count or distance]

// ZOMATO API KEY: 16f57b50750f8cab141cde7d88f570b4

import axios from "axios";

// const KEY = "16f57b50750f8cab141cde7d88f570b4";

const zomatoTerm = axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1",
  headers: {
    "access-control-allow-methods": "GET, POST, DELETE, PUT, PATCH, OPTIONS",
    "content-type": "application/json",
    "access-control-allow-origin": "*",
    "cache-control": "max-age=0, no-cache, no-store",
    "access-control-allow-credentials": "true",
    "user-key": "16f57b50750f8cab141cde7d88f570b4"
  }
});

export default zomatoTerm;
