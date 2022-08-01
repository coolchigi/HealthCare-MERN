import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import services from "./Images/services.jpg";

import Service from "./components/Services/Services";
import Form from "./components/Form/Form";
const App = () => {
  return (
    <Container maxwidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Services
        </Typography>
        <img src={services} alt="services" height="40"></img>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing="3"
          >
            <Grid item xs={12} sm={7}>
              <Service />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
