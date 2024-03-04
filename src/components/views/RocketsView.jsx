import { useState, useEffect, useContext } from "react";
import instance from "../../services/api";
import RocketsList from "../rockets/rocketsList";
import Loading from "../loading/loading";
import Error from "../error/error";

const RocketsView = () =>{
    


    console.log(instance);

  const [rockets, setRockets] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    instance
      .get("/rockets")
      .then((res) => setRockets(res.data.slice(0, 10)))
      .catch((error) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

    return (
    <>
      <h1>Rockets view</h1>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error error={error} />
      ) : (
        <RocketsList rockets={rockets} />
      )}
    </>
  );
}

export default RocketsView