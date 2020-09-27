import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import LaunchItem from "./LaunchItem";

const LAUNCHES_QUERY = gql`
  {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div>
      <h3 className="my-4 text-center">SpaceX</h3>
      <h1 className="display-4 my-4 text-center">Launches</h1>
      <div className="list">
        {data.launches.map((launch) => (
          <LaunchItem key={launch.flight_number} launch={launch} />
        ))}
      </div>
    </div>
  );
};

export default Launches;
