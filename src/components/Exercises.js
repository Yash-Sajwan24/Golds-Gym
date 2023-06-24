import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExercisesCart from "./ExercisesCart";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 8;

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({top: '1800', behavior: 'smooth'})
  }

  useEffect(() => {
    const fetchExerciseData = async () => {
      setCurrentPage(1);
      let exerciseData = [];
      if(bodyPart === 'all'){
        exerciseData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises/",
          exerciseOptions
        );
      }
      else{
        exerciseData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }
      setExercises(exerciseData);
    }
    fetchExerciseData();
  }, [bodyPart, setExercises]);

  const indexOfLastExercise = currentPage*exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <ExercisesCart key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > exercisesPerPage && (
          <Pagination color="standard" shape="rounded" 
          defaultPage={1}
          count={Math.ceil(exercises.length / exercisesPerPage)}
          page={currentPage}
          onChange={paginate}
          size="large"
          />
        )}

      </Stack>
    </Box>
  );
};

export default Exercises;
