const baseURL =
  process.env.REACT_APP_ENV === "development"
    ? "http://localhost:5000/items/v1"
    : "https://grocery-app-mern.herokuapp.com/api/v1";

export default baseURL;
