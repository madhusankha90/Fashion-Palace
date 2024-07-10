import React from "react";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";

const Footer = () => {
  return (
  
      <div>
        <Grid
          className="bg-gray-900 text-white text-center mt-10"
          container
          sx={{ bgcolor: "gray-900", color: "white", py: 3 }}
        >
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="pb-5 variant-h6">Company</Typography>
            <div>
              <Button className="pb-5 variant-h6 gutterBottom">About</Button>
            </div>
            <div>
              <Button className="pb-5 variant-h6 gutterBottom">About</Button>
            </div>
            <div>
              <Button className="pb-5 variant-h6 gutterBottom">About</Button>
            </div>
            <div>
              <Button className="pb-5 variant-h6 gutterBottom">About</Button>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography className="pb-5 variant-h6">Company</Typography>
            <div>
              <Button className="pb-5 variant-h6 gutterBottom">About</Button>
            </div>
            <div>
              <Button className="pb-5 variant-h6 gutterBottom">About</Button>
            </div>
            <div>
              <Button className="pb-5 variant-h6 gutterBottom">About</Button>
            </div>
            <div>
              <Button className="pb-5 variant-h6 gutterBottom">About</Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="pb-5 variant-h6">Company</Typography>
            <div>
              <Button className="pb-5 variant-h6 gutterBottom">About</Button>
            </div>
            <div>
              <Button className="pb-5 variant-h6 gutterBottom">About</Button>
            </div>
            <div>
              <Button className="pb-5 variant-h6 gutterBottom">About</Button>
            </div>
            <div>
              <Button className="pb-5 variant-h6 gutterBottom">About</Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography className="pb-5 variant-h6">Company</Typography>
            <div>
              <Button className="pb-5 variant-h6 gutterBottom">About</Button>
            </div>
            <div>
              <Button className="pb-5 variant-h6 gutterBottom">About</Button>
            </div>
            <div>
              <Button className="pb-5 variant-h6 gutterBottom">About</Button>
            </div>
            <div>
              <Button className="pb-5 variant-h6 gutterBottom">About</Button>
            </div>
          </Grid>
        </Grid>
      
     
    </div>
  );
};

export default Footer;
