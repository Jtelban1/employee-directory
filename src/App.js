import React from "react";
import Home from "./pages/home.js";
import Header from "./components/header.js";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Header />
            <Home/>
        </div>
    );
}

export default App;
