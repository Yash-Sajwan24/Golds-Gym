import React from 'react';
import { useState } from 'react';
import {Box} from '@mui/material';
import Herobanner from '../components/Herobanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const Home = () => {
  return (
    <div>
      <Box> 
        <Herobanner />
        <SearchExercises />
        <Exercises />
      </Box>
      
    </div>
  )
}

export default Home
