
const LaunchesListItem = ({ launch }) => {
  return (
    <div>
      <h3>{launch.name}</h3>
      <img src={launch.links.patch.small} alt={launch.name} />
      <p>{launch.details}</p>
    </div>
  );
};

export default LaunchesListItem;