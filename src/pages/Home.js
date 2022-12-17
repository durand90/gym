import React, { useState} from 'react';
import { Box } from '@mui/material';

import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';
import Exercises from '../components/Exercises';
const Home = () => {
  return (
    <Box>
        <HeroBanner />
        <SearchExercises />
        <Exercises />jhkgjgj
    </Box>
  )
}

export default Home