// ./src/components/StoreHeader.js

/*-------------------------------------------------------------- Imports ------------------------------------------------------------------*/

// React

import React, { useState, useEffect } from "react";

// Material-UI Components
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

// Styling
import variables from "../styles";
const { storeHeaderStyling } = variables;

// Other packages/modules
import axios from "axios";

/*-------------------------------------------------------------- Styling ------------------------------------------------------------------*/

const useStyles = makeStyles(storeHeaderStyling);

const userId = 1;

/*-------------------------------------------------------------- Globals ------------------------------------------------------------------*/

function StoreHeader() {
    /*-------------------------------------------------------------- State ------------------------------------------------------------------*/
    const [shop, setShop] = useState({});

    //Get Shop by this user and store in a userState
    useEffect(() => {
        axios
            .get(`api/users/shop/${userId}`)
            .then((userShop) => {
                if (userShop) {
                    const shopArray = userShop.data.userShop;
                    setShop(shopArray);
                } else {
                    throw new Error("No shop found for that userId");
                }
            })
            .catch((err) => {
                console.log(err);
                throw err;
            });
    }, []);

    /*-------------------------------------------------------------- Styling ------------------------------------------------------------------*/

    const classes = useStyles();

    /*-------------------------------------------------------------- Component ------------------------------------------------------------------*/

    return (
        <Grid className={classes.storeHeader} position="static">
            <img
                src="/assets/store_logo.png"
                alt="The store logo, feautring an outline of an eye over a stylistic sunset in the back with the words '3rd Eye Crafts' above"
                className={classes.storeLogo}
            />
        </Grid>
    );
}

/*-------------------------------------------------------------- Exports ------------------------------------------------------------------*/

export default StoreHeader;
