import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import services from "./Images/services.jpg";

import Service from "./components/Services/Services";
import Form from "./components/Form/Form";
import useStyles from "./styles";
const App = () => {
  const classes = useStyles();
  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Services
        </Typography>
        <img
          className={classes.image}
          src={services}
          alt="services"
          height="60"
        ></img>
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
