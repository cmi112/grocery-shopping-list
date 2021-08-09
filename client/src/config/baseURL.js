const baseURL =
  process.env.REACT_APP_ENV === "development"
    ? "http://localhost:5000/items"
    : "https://github.com/cmi112/grocery-shopping-list.git";

export default baseURL;
