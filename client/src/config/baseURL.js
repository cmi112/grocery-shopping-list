const baseURL =
  process.env.REACT_APP_ENV === "development"
    ? "http://localhost:5000/items/v1"
    : "https://pure-lowlands-97904.herokuapp.com";

export default baseURL;
