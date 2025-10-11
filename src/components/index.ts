export enum EMuscles {
    Грудь = "Грудь",
    Руки = "Руки",
    Ноги = "Ноги",
    Торс = "Торс",
}
export enum ETools {
    Турник = "Турник",
    Гиря = "Гиря",
    Гантели = "Гантели",
    Кулак = "Кулак",
}
export interface Exercise {
    id: string;
    name: string;
    muscles: EMuscles[];
    tools: ETools[];
    sets: number;
    reps: number;
}
export const EXERCISES: Exercise[] = [
    // Грудь
    {
        id: "push_up_chest_floor",
        name: "Отжимания от пола",
        muscles: [EMuscles.Грудь, EMuscles.Руки, EMuscles.Торс],
        tools: [ETools.Кулак],
        sets: 3,
        reps: 15,
    },
    {
        id: "push_up_chest_bench",
        name: "Отжимания от скамьи",
        muscles: [EMuscles.Грудь, EMuscles.Руки],
        tools: [ETools.Кулак], // Можно считать, что скамья - это часть окружения, но для простоты оставим кулак
        sets: 3,
        reps: 12,
    },
    {
        id: "bench_press_dumbbells",
        name: "Жим гантелей лежа",
        muscles: [EMuscles.Грудь, EMuscles.Руки],
        tools: [ETools.Гантели],
        sets: 4,
        reps: 10,
    },
    {
        id: "chest_fly_dumbbells",
        name: "Разведение гантелей лежа",
        muscles: [EMuscles.Грудь],
        tools: [ETools.Гантели],
        sets: 3,
        reps: 12,
    },
    {
        id: "pull_ups_chest",
        name: "Подтягивания на турнике (акцент на грудь)",
        muscles: [EMuscles.Грудь, EMuscles.Руки, EMuscles.Торс],
        tools: [ETools.Турник],
        sets: 3,
        reps: 8,
    },

    // Руки
    {
        id: "bicep_curls_dumbbells",
        name: "Сгибания рук с гантелями на бицепс",
        muscles: [EMuscles.Руки],
        tools: [ETools.Гантели],
        sets: 3,
        reps: 10,
    },
    {
        id: "hammer_curls_dumbbells",
        name: "Молотковые сгибания рук с гантелями",
        muscles: [EMuscles.Руки],
        tools: [ETools.Гантели],
        sets: 3,
        reps: 10,
    },
    {
        id: "triceps_extensions_dumbbells",
        name: "Разгибания рук с гантелей из-за головы",
        muscles: [EMuscles.Руки],
        tools: [ETools.Гантели],
        sets: 3,
        reps: 12,
    },
    {
        id: "dips_bodyweight",
        name: "Отжимания на брусьях (на трицепс)",
        muscles: [EMuscles.Руки, EMuscles.Грудь, EMuscles.Торс],
        tools: [ETools.Кулак], // Можно считать, что брусья - это часть окружения
        sets: 3,
        reps: 10,
    },
    {
        id: "pull_ups_arms",
        name: "Подтягивания на турнике (акцент на руки)",
        muscles: [EMuscles.Руки, EMuscles.Торс],
        tools: [ETools.Турник],
        sets: 3,
        reps: 8,
    },

    // Ноги
    {
        id: "squats_bodyweight",
        name: "Приседания",
        muscles: [EMuscles.Ноги, EMuscles.Торс],
        tools: [ETools.Кулак],
        sets: 4,
        reps: 15,
    },
    {
        id: "lunges_bodyweight",
        name: "Выпады",
        muscles: [EMuscles.Ноги, EMuscles.Торс],
        tools: [ETools.Кулак],
        sets: 3,
        reps: 12,
    },
    {
        id: "squats_kettlebell",
        name: "Приседания с гирей",
        muscles: [EMuscles.Ноги, EMuscles.Торс],
        tools: [ETools.Гиря],
        sets: 4,
        reps: 12,
    },
    {
        id: "deadlift_kettlebell",
        name: "Становая тяга с гирей",
        muscles: [EMuscles.Ноги, EMuscles.Торс],
        tools: [ETools.Гиря],
        sets: 3,
        reps: 8,
    },
    {
        id: "calf_raises_bodyweight",
        name: "Подъемы на носки",
        muscles: [EMuscles.Ноги],
        tools: [ETools.Кулак],
        sets: 3,
        reps: 20,
    },

    // Торс
    {
        id: "plank",
        name: "Планка",
        muscles: [EMuscles.Торс],
        tools: [ETools.Кулак],
        sets: 3,
        reps: 60, // Время в секундах
    },
    {
        id: "crunches",
        name: "Скручивания",
        muscles: [EMuscles.Торс],
        tools: [ETools.Кулак],
        sets: 3,
        reps: 20,
    },
    {
        id: "leg_raises",
        name: "Подъемы ног",
        muscles: [EMuscles.Торс],
        tools: [ETools.Кулак],
        sets: 3,
        reps: 15,
    },
    {
        id: "russian_twists",
        name: "Русские скручивания",
        muscles: [EMuscles.Торс],
        tools: [ETools.Кулак],
        sets: 3,
        reps: 15,
    },
    {
        id: "kettlebell_swings",
        name: "Махи гирей",
        muscles: [EMuscles.Торс, EMuscles.Ноги],
        tools: [ETools.Гиря],
        sets: 4,
        reps: 15,
    },

    // Комплексные упражнения
    {
        id: "burpees",
        name: "Бёрпи",
        muscles: [EMuscles.Грудь, EMuscles.Руки, EMuscles.Ноги, EMuscles.Торс],
        tools: [ETools.Кулак],
        sets: 3,
        reps: 10,
    },
    {
        id: "kettlebell_clean_and_jerk",
        name: "Толчок гири",
        muscles: [EMuscles.Грудь, EMuscles.Руки, EMuscles.Ноги, EMuscles.Торс],
        tools: [ETools.Гиря],
        sets: 3,
        reps: 6,
    },
    {
        id: "pull_ups_full_body",
        name: "Подтягивания на турнике (классика)",
        muscles: [EMuscles.Грудь, EMuscles.Руки, EMuscles.Торс],
        tools: [ETools.Турник],
        sets: 3,
        reps: 8,
    },
    {
        id: "squat_jumps",
        name: "Приседания с выпрыгиванием",
        muscles: [EMuscles.Ноги, EMuscles.Торс],
        tools: [ETools.Кулак],
        sets: 3,
        reps: 12,
    },
    {
        id: "push_press_dumbbells",
        name: "Швунг гантелей",
        muscles: [EMuscles.Грудь, EMuscles.Руки, EMuscles.Ноги, EMuscles.Торс],
        tools: [ETools.Гантели],
        sets: 3,
        reps: 8,
    },
];
