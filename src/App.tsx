import { useState } from "react";
import "./App.css";
import Character from "./components/Character";
import Window from "./components/Window";
import Inventory from "./components/Inventory";
import Download from "./components/Download";
import InfoButtons from "./components/InfoButtons";
export enum EPAGES {
    window,
    invent,
    charact,
    downl,
}
function App() {
    const [pages, setPages] = useState<EPAGES>(EPAGES.window);
    const [characterData, setCharacterData] = useState([]);
    const [inventoryData, setInventoryData] = useState([]);
    return (
        <>
            {pages === EPAGES.window ? (
                <Window setPage={setPages} />
            ) : pages === EPAGES.charact ? (
                <Character characterData={characterData} setCharacterData={setCharacterData} />
            ) : pages === EPAGES.invent ? (
                <Inventory inventoryData={inventoryData} setInventoryData={setInventoryData} />
            ) : pages === EPAGES.downl ? (
                <Download inventoryData={inventoryData} characterData={characterData} />
            ) : (
                <></>
            )}
            {pages !== EPAGES.window ? <InfoButtons setPage={setPages} pages={pages} /> : <></>}
        </>
    );
}

export default App;
