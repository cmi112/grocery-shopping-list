const baseURL =
  process.env.REACT_APP_ENV === "development"
    ? "http://localhost:6000/items"
    : "https://sleepy-oasis-61073.herokuapp.com/items";

export default baseURL;
