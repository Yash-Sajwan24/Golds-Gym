import React, { useState, useEffect } from "react";
import { Box, Stack, Button, TextField, Typography } from "@mui/material";

const SearchExercises = () => {
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        marginBottom="20px"
        textAlign="center"
      >
        Awsome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            borderRadius: "40px",
            backgroundColor: "white",
          }}
          height="76px"
          value=""
          onChange={(e) => {}}
          placeholder="Search Exercises"
          type="text"
        />

        <Button
          variant="contained"
          color="error"
          href="#exercises"
          sx={{
            backgroundColor: "red",
            color: "white",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "16px", xs: "12px" },
            height: "56px",
            position: "absolute",
            right: 0,
          }}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
