import LaunchesListItem from "./launchesListItem";

const LaunchesList = ({ launches }) => {
  return (
    <div>
      {launches.map((launch) => (
        <LaunchesListItem key={launch.id} launch={launch} />
      ))}
    </div>
  );
};

export default LaunchesList;