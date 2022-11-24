import React from 'react';
import Database from "./components/database";
import {HashRouter, Route, Routes} from "react-router-dom"
import Login from "./components/LoginPage";

export default function App() {
    return (
        <HashRouter hashType="hashbang">
            <div className="App">
                <Routes>
                    <Route path='database' element={<Database/>}/>
                    <Route path='/' element={<Login/>}/>
                </Routes>
            </div>
        </HashRouter>
    )

}

