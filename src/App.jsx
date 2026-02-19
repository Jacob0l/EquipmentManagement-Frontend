 import React from "react";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faHouse } from "@fortawesome/free-regular-svg-icons";

 import {BrowserRouter} from 'react-router-dom'

 import Navbar from "./components/Navbar/Navbar";

 function App(){
    return (
      <BrowserRouter>
         <Navbar/>
      </BrowserRouter>
    );
   }
 export default App;