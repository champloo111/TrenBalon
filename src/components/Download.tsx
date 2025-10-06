import React from "react";
import fileImage from "../../public/file.png";
import "./Download.css";

interface DownloadProps {
    characterData: string[];
    inventoryData: string[];
}
export interface Exercise {
    id: string;
    name: string;
    muscles: string[];
    tools: string[];
    sets: number;
    reps: number;
}
const EXERCISES: Exercise[] = [
    { id: "p1", name: "Отжимания", muscles: ["Грудь", "Руки"], tools: ["Кулак для дрочки"], sets: 4, reps: 15 },
    { id: "p2", name: "Подтягивания", muscles: ["Торс", "Руки"], tools: ["Турник"], sets: 4, reps: 10 },
    { id: "p3", name: "Приседания с гирей", muscles: ["Ноги"], tools: ["Гиря"], sets: 5, reps: 12 },
    { id: "p4", name: "Жим гантелей", muscles: ["Грудь", "Руки"], tools: ["Гантели"], sets: 4, reps: 12 },
    { id: "p5", name: "Планка", muscles: ["Торс"], tools: [], sets: 3, reps: 60 },
];

const Download: React.FC<DownloadProps> = ({ characterData, inventoryData }) => {
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

        const lines: string[] = ["Жеская ебка", ""];

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
