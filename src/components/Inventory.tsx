import React, { memo, useEffect, useState } from "react";
import "./Inventory.css";
import gant from "../../public/gant.png";
import kulak from "../../public/kulak.png";
import gir from "../../public/gir.png";
import tur from "../../public/tur.png";

interface InventoryProps {
    inventoryData: string[];
    setInventoryData: Function;
}
interface ISelect {
    gir: boolean;
    kulak: boolean;
    tur: boolean;
    gant: boolean;
}

const Inventory: React.FC<InventoryProps> = memo(({ inventoryData, setInventoryData }) => {
    const [select, setSelect] = useState<ISelect>({
        gir: inventoryData.includes("Гиря"),
        kulak: inventoryData.includes("Кулак для дрочки"),
        tur: inventoryData.includes("Турник"),
        gant: inventoryData.includes("Гантели"),
    });

    const toggleSelect = (key: keyof ISelect) => {
        setSelect((prev) => ({ ...prev, [key]: !prev[key] }));
    };
    useEffect(() => {
        return () => {
            const activeKeys = (Object.keys(select) as Array<keyof typeof select>).filter((k) => select[k]);
            setInventoryData(replaceKey(activeKeys));
        };
    }, [select]);
    const replaceKey = (arr: string[]): string[] => {
        const dict: Record<string, string> = {
            gir: "Гиря",
            kulak: "Кулак для дрочки",
            tur: "Турник",
            gant: "Гантели",
        };

        return arr.map((el) => dict[el] ?? "Кулак для дрочки");
    };

    return (
        <div className="inventory-container">
            <u className="character-main-text">
                <p>Выбери СВОЙ спортивный инвентарь</p>
            </u>

            <div className="inventory-image-cont">
                <div className="inventory-image-back">
                    <img
                        className={`inventory-el ${select.gant == true ? "active" : ""}`}
                        src={gant}
                        onClick={() => toggleSelect("gant")}
                    />
                </div>
                <div className="inventory-image-back">
                    <img
                        className={`inventory-el ${select.gir == true ? "active" : ""}`}
                        src={gir}
                        onClick={() => toggleSelect("gir")}
                    />
                </div>
                <div className="inventory-image-back">
                    <img
                        className={`inventory-el ${select.tur == true ? "active" : ""}`}
                        src={tur}
                        onClick={() => toggleSelect("tur")}
                    />
                </div>
                <div className="inventory-image-back">
                    <img
                        className={`inventory-el ${select.kulak == true ? "active" : ""}`}
                        src={kulak}
                        onClick={() => toggleSelect("kulak")}
                    />
                </div>
            </div>
        </div>
    );
});

export default Inventory;
