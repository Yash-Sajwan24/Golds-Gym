import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HerobannerImage from "../assets/images/banner.png";

const Herobanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="red" fontSize="26px" fontWeight="600">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      >
        Sweat, Smile <br /> and Repeat.
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={2}>
        Check out the most effective exercises.
      </Typography>
      <Button variant="contained" color="error" href="#exercises" sx={{backgroundColor: 'red'}}>
        Explore Exercieses
      </Button>
      <Typography
        fontWeight={600}
        color="red"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize="200px"
      >
        Exercise
      </Typography>
      <img src={HerobannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default Herobanner;
