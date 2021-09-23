import React from "react";
import Greet from "./components/Greet";

function App() {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: "100vh"}}>
            <Greet name="Hassan" messageCount={10} isLoggedIn={true} />
        </div>
    );
}

export default App;
