import React from 'react';
import { useState } from 'react';
import {Box} from '@mui/material';
import Herobanner from '../components/Herobanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const Home = () => {
  //we use body part and exercise useState here the changes will be reflected in the whole page 
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  return (
    <div>
      <Box> 
        <Herobanner />
        <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        <Exercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </Box>
      
    </div>
  )
}

export default Home
