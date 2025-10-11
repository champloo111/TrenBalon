import React, { useEffect, useState } from "react";
import "./Character.css";
import { EMuscles } from ".";

interface Part {
    name: EMuscles;
    img: string;
    coords: { x: number; y: number };
    size: { w: number; h: number };
    hidden?: boolean;
}

const parts: Part[] = [
    {
        name: EMuscles.Руки,
        img: "left-arm.png",
        coords: { x: 0, y: 15 },
        size: { w: 133, h: 295 },
    },
    {
        name: EMuscles.Грудь,
        img: "chest.png",
        coords: { x: 119, y: 0 },
        size: { w: 132, h: 90 },
    },
    {
        name: EMuscles.Торс,
        img: "torso.png",
        coords: { x: 115, y: 74 },
        size: { w: 139, h: 177 },
    },
    {
        name: EMuscles.Ноги,
        img: "legs.png",
        coords: { x: 119, y: 206 },
        size: { w: 131, h: 231 },
    },
    {
        name: EMuscles.Руки,
        img: "right-arm.png",
        coords: { x: 236, y: 15 },
        size: { w: 133, h: 295 },
        hidden: true,
    },
];
interface ICharacterProps {
    characterData: string[];
    setCharacterData: Function;
}

const Character: React.FC<ICharacterProps> = ({ characterData, setCharacterData }) => {
    const [active, setActive] = useState<string[]>(characterData);

    const toggle = (name: string) =>
        setActive((prev) => (prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]));

    useEffect(() => {
        return () => {
            setCharacterData(active);
        };
    });
    return (
        <>
            <u className="character-main-text">
                <p>Выбери группу мышц для тренировки</p>
            </u>
            <div className="character">
                <div className="canvas">
                    {parts.map((p, i) => (
                        <img
                            key={p.name + i}
                            src={`${p.img}`}
                            alt={p.name}
                            className={`part ${active.includes(p.name) ? "active" : ""}`}
                            style={{
                                position: "absolute",
                                left: p.coords.x,
                                top: p.coords.y,
                                width: p.size.w,
                                height: p.size.h,
                            }}
                            onClick={() => toggle(p.name)}
                        />
                    ))}
                </div>

                <div className="controls">
                    {parts.map((p, i) =>
                        !p.hidden ? (
                            <button
                                key={p.name + i}
                                onClick={() => toggle(p.name)}
                                className={`${active.includes(p.name) ? "active" : ""}`}
                            >
                                {p.name}
                            </button>
                        ) : (
                            <React.Fragment key={p.name + i} />
                        )
                    )}
                </div>
            </div>
        </>
    );
};

export default Character;
