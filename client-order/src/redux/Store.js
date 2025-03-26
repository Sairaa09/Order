import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice from '../redux/Slices/ThemeSlice'


const Store = configureStore({
    reducer:{
       theme : ThemeSlice
    }
   })
   
   export default Store