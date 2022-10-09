import { configureStore } from '@reduxjs/toolkit';
import menuSlice from './menuSlice';
import userSlice from './userSlice';

export default configureStore({
    //importing the default reducers for each slice
	reducer: {
        menu : menuSlice,
        user : userSlice 
    },
});