import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
// to use the SearchIcon in the Autocomplete component, we need to import it:
import SearchIcon from "@material-ui/icons/Search";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        {/* Typography is every single text element and by using variant we can set it as headings, titles, subtitles etc */}
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>
        {/* Box is like a div */}
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>
          <Autocomplete>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search..."
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
              />
              {/* To set the classes we used {} because we're setting more than one class, so it becomes an object and it needs to be inside {} */}
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
