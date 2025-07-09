import React from "react";
import useDate from "./useDate";

function App() {
    const currentDate = useDate();

    return(
        <div style={{ textAlign: "center", marginTop: "50px"}}>
            <h1>Data e ora Attuaili:</h1>
            <p>{currentDate.toLocaleString()}</p>
        </div>
    );
}

export default App;