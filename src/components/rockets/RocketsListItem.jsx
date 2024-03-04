import React from "react";
import { Link } from "react-router-dom";
import "./rocket.css";

const RocketsListItem = ({ rocket }) => {
  return (
    <div>
        <Link to={`/rockets/${rocket.id}`}>
            
            <h1>{rocket.name}</h1>
            <img src={rocket.flickr_images} class="rocketsimg" alt={rocket.name} />
            <h2>Details:</h2>
            <table> <h3>Dimension</h3>
                <tr>
                    <td>Height</td>
                    <td>Diameter</td>
                    <td>Mass</td>
                </tr>
                <tr>
                    <td>{rocket.height.meters}</td>
                    <td>{rocket.diameter.meters}</td>
                    <td>{rocket.mass.kg}</td>
                </tr>
            </table>
            <table><h3>Engine</h3>
                <tr>
                    <td>Number of engine</td>
                    <td>Type</td>
                    <td>Version</td>
                    <td>Lazout</td>
                    <td>Propellant 1</td>
                    <td>Propellant 2</td>
                </tr>
                <tr>
                    <td>{rocket.engines.number}</td>
                    <td>{rocket.engines.type}</td>
                    <td>{rocket.engines.version}</td>
                    <td>{rocket.engines.layout}</td>
                    <td>{rocket.engines.propellant_1}</td>
                    <td>{rocket.engines.propellant_2}</td>
                </tr>
            </table>
            
        </Link>
    </div>
  );
};

export default RocketsListItem; 