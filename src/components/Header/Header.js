import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import useStyles from "./styles.js";

const Header = ({ onPlaceChanged, onLoad }) => {
  // const Header = ({ setCoords, onPlaceChanged, onLoad }) => {
  const classes = useStyles();

  // const onLoad = (autoC) => setAutocomplpetebro(autoC);

  // const onPlaceChanged = () => {
  //   const lat = autocompletebro.getPlace().geometry.location.lat();
  //   const lng = autocompletebro.getPlace().geometry.location.lng();

  //   setCoords(lat, lng);
  // };

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
              />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
