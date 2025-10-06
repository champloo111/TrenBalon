import React from "react";
import { EPAGES } from "../App";
import "./InfoButtons.css";

interface InfoButtonsProps {
    setPage: (page: EPAGES) => void;
    pages: EPAGES;
}

const InfoButtons: React.FC<InfoButtonsProps> = ({ pages, setPage }) => {
    return (
        <div className="infobuttons-container">
            <button
                className={`infobuttons-el ${pages == EPAGES.invent ? "active" : ""}`}
                onClick={() => setPage(EPAGES.invent)}
            >
                1
            </button>
            <button
                className={`infobuttons-el ${pages == EPAGES.charact ? "active" : ""}`}
                onClick={() => setPage(EPAGES.charact)}
            >
                2
            </button>
            <button
                className={`infobuttons-el ${pages == EPAGES.downl ? "active" : ""}`}
                onClick={() => setPage(EPAGES.downl)}
            >
                3
            </button>
        </div>
    );
};

export default InfoButtons;
