import { useState, useEffect, useContext } from "react";
import instance from "../../services/api";
import LaunchesList from "../launches/LaunchesList";
import Loading from "../loading/loading";
import Error from "../error/error";
import { LaunchesContext } from "../../context/launchesContext";

const LaunchesView = () => {

  const c = useContext(LaunchesContext)
  console.log(c);

  const {state, dispatch} = useContext(LaunchesContext) 
  const {launches, loading, error} = state

  useEffect(() =>{
    dispatch({type: 'FETCH_LAUNCHES_REQUEST'});
    instance.get('/launches').then(res => {
      dispatch({
        type: 'FETCH_LAUNCHES_SUCCES',
        payload: res.data.slice(0, 10),
      })
      })
      .catch((error) =>{
        dispatch({
          type: "FETCH_LAUNCHES_FAILURE",
          payload: error.response,
        })
    });
  }, [])

  return (
    <>
      <h1>LaunchesView</h1>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <LaunchesList launches={launches} />
      )}
    </>
  );
};

export default LaunchesView;