import { configureStore } from '@reduxjs/toolkit';
import menuSlice from './menuSlice';

export default configureStore({
	reducer: {
        menu : menuSlice
    },
});