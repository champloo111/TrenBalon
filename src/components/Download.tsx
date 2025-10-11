import React from "react";
import fileImage from "../../public/file.png";
import "./Download.css";
import { EXERCISES, type EMuscles, type ETools, type Exercise } from ".";

interface DownloadProps {
    characterData: EMuscles[];
    inventoryData: ETools[];
}

const Download: React.FC<DownloadProps> = ({ characterData, inventoryData }) => {
    console.log(characterData, inventoryData);
    const validExercises = EXERCISES.filter(
        (ex) => ex.muscles.some((m) => characterData.includes(m)) && ex.tools.every((t) => inventoryData.includes(t))
    );

    const downloadTxt = (text: string) => {
        const blob = new Blob([text], { type: "text/plain" });

        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "TrenBalonResult.txt";
        document.body.appendChild(a);
        a.click();

        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const createWorkout = (list: Exercise[]): string => {
        if (!list.length) return "Тренировка не составлена — ни одно упражнение не подошло.";

        const lines: string[] = ["Ваша тренировка", ""];

        list.forEach((ex, idx) => {
            lines.push(`${idx + 1}. ${ex.name}`);
            lines.push(`   Мышцы: ${ex.muscles.join(", ")}`);
            lines.push(`   Инвентарь: ${ex.tools.length ? ex.tools.join(", ") : "не требуется"}`);
            lines.push(`   Подходов: ${ex.sets} | Повторений: ${ex.reps}`);
            lines.push("");
        });

        return lines.join("\n");
    };
    console.log(createWorkout(validExercises));

    return (
        <div className="download-container">
            <u className="character-main-text">
                <p>Забирай свою персональную тренировку</p>
            </u>

            <div className="file-cont">
                <img className={"file-img"} src={fileImage} alt="" />
            </div>
            <button className="download-btn" onClick={() => downloadTxt(createWorkout(validExercises))}>
                Скачать
            </button>
        </div>
    );
};

export default Download;
