import React from "react";
import { Link } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

const Launch = props => {
  let { flight_number } = props.match.params;
  flight_number = parseInt(flight_number);

  const { loading, error, data } = useQuery(LAUNCH_QUERY, {
    variables: { flight_number }
  });

    console.log(flight_number)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  const {
    mission_name,
    launch_year,
    launch_success,
    launch_date_local,
    rocket: { rocket_id, rocket_name, rocket_type }
  } = data.launch;

  return (
    <div>
      <h1 className="display-4 my-3">
        <span className="text-dark">Mission:</span> {mission_name}
      </h1>

      <h6>Launch success: {launch_success ? "yes" : "no"}</h6>
      <h5>Date: {new Date(launch_date_local).toDateString()}</h5>
      <p>Year: {launch_year}</p>
     
      <div>
        <h1>Information about the Rocket</h1>
        <h4>Rocket ID: {rocket_id}</h4> 
        <h4>Rocket Name: {rocket_name}</h4>
        <h4>Rocket Type: {rocket_type}</h4>
      </div>

      <Link to="/" className="btn btn-primary" >Back</Link>
    </div>
  );
};

export default Launch;
