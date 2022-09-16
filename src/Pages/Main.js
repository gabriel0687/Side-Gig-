import React from "react";
import AppBar from "../Components/AppBar";
import Users from "../Components/Users";
import Stepper from "../Components/Stepper";
import Contractors from "../Components/Contractors";

const Main = () => (

    <div>
        <React.Fragment>


            <AppBar />
            <Stepper />
            <Users />
            <Contractors />

        </React.Fragment>
    </div>

);


export default Main;