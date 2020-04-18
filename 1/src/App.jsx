import React from 'react';
import NamePage from "./components/NamePage.jsx";
import DialogPage from "./components/DialogPage.jsx";
import Triangle from "./components/Triangle.jsx";
import PersonalQualites from "./components/PersonalQualites";


let arrQuality = [
    {quality: "Веган"},
    {quality: "Целе устремленный"},
    {quality: "Спокойный"}
];

const App = () => {
    return (
        <div className="App">
            <NamePage/>
            <PersonalQualites arrQuality={arrQuality} />
            <DialogPage/>
            <Triangle/>

        </div>
    );
}

export default App;
