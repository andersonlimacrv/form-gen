import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
    return twMerge(clsx(inputs))
}

export const charVariants = {
    hidden: {
        opacity: 0,
    },
    reveal: {
        opacity: 1,
    },
};

export function splitString(inputString) {
    const characters = [];
    const regex = /[\s\S]/gu;

    let match;

    while ((match = regex.exec(inputString)) !== null) {
        characters.push(match[0]);
    }

    return characters;
}
