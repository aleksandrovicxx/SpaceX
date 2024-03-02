import React from "react";
import { Link } from "react-router-dom";

const LaunchesListItem = ({ launch }) => {
  return (
    <div>
        <Link to={`/launches/${launch.id}`}>
            <h3>{launch.name}</h3>
            <img src={launch.links.patch.small} alt={launch.name} />
            <p>{launch.details}</p>
        </Link>
    </div>
  );
};

export default LaunchesListItem; 