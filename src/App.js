import React, { useEffect } from "react";
import { connect } from "react-redux";
import launchesData from "./api/launchesData";
import Navigation from "./Navigation";

function App({ apiUrl, dispatch }) {
  useEffect(() => {
    const fetchData = async () => {
      const data = await launchesData(apiUrl);
      dispatch({ type: "API_CALL", payload: { data: data } });
      dispatch({ type: "LOADING_FALSE" });
    };
    fetchData();
  }, []);
  return <Navigation />;
}

const mapStateToProps = (store) => {
  return { apiUrl: store.apiUrl };
};

export default connect(mapStateToProps)(App);
