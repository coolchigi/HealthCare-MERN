import React from "react";
import Service from "./Service/Service";
import useStyles from "./styles";

const Services = () => {
  const classes = useStyles();
  return (
    <>
      <h1>SERVICES</h1>

      <Service />
      <Service />
    </>
  );
};

export default Services;
