export interface Quizz {
    _id:         string;
    title:       string;
    description: string;
    questions:   Question[];
    img_preview: string;
}

interface Question {
    question: string;
    options:  Option[];
}

interface Option {
    answer:  string;
    correct: boolean;
}

export interface QuizzInfo {
    _id: string,
    img_preview: string,
    title: string,
    description: string
}
