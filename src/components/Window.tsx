import React from "react";

import footerImage from "../../public/footerPage1.jpg";
import wwwImage from "../../public/WWW.png";
import muscle1 from "../../public/muscle1.jpg";
import muscle2 from "../../public/muscle2.png";
import muscle3 from "../../public/muscle3.jpg";

import "./Window.css";
import { EPAGES } from "../App";
interface IWindowProps {
    setPage: (page: EPAGES) => void;
}

const Window: React.FC<IWindowProps> = ({ setPage }) => {
    return (
        <div className="window-container">
            <footer style={{ height: 130 }}>
                <img
                    src={wwwImage}
                    alt=""
                    style={{
                        position: "absolute",
                        width: "282px",
                        height: "106px",
                        top: "12px",
                        left: "68px",
                        zIndex: 2,
                    }}
                />
                <img
                    src={footerImage}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "top -200px left 0px",
                    }}
                />
            </footer>
            <main style={{ display: "flex" }}>
                <div className="window-text">
                    <p style={{ margin: "40px 0px 20px 0px" }}>СТАНЬ ЛУЧШЕЙ ВЕРСИЕЙ СЕБЯ</p>
                    <button className="window-button" onClick={() => setPage(EPAGES.invent)}>
                        Начать тренировку
                    </button>
                </div>
                <div className="window-image-cont">
                    <img className="window-size-muscle" src={muscle1} alt="" />
                    <img className="window-size-muscle" src={muscle2} alt="" />
                    <img className="window-size-muscle" src={muscle3} alt="" />
                </div>
            </main>
        </div>
    );
};
export default Window;
