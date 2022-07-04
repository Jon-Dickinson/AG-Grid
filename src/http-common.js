import axios from "axios";

export default axios.create({
  baseURL: "https://cssreactions.com/data/",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
  },
});
