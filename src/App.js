import React from "react";
// we can also import from material-ui
import { CssBaseline, Grid } from "@material-ui/core";

// Now we can import the components here
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      {/* since we're doing an inline style, it'll be an object! So that's why it needs to be inside curly braces!!!!! */}
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}></Grid>
      </Grid>
      {/* First Grid is of type container while the second is of type item */}
    </>
  );
};

export default App;
