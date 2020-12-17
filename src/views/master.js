import React, { useState } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/master.css'
import menuitems from '../items'
import RuleRequest from "./rulerequest";

const Master = () => {
    return (
        <div className = "master-container">
            <Navbar/>
            <Sidebar menuitems={menuitems}/>
            <RuleRequest/>
        </div>
    );

}

export default Master