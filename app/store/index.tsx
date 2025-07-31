import { create } from 'zustand'

export type configType = {
    numberOfQuestion: number;
    category: { id: number; name: string };
    level: string;
    status: string;
    score: number;
    type:string;
}

const defaultConfig: configType = {
    numberOfQuestion: 10,
    category: {
        id: 0,
        name: ''
    },
    level: '', // Added missing property
    status: '',
    type: '',
    score: 0
}

const useQuiz = create<{
    config: configType;
    addLevel: (position: string) => void;
    addNumberOfQuestion: (count: number) => void;
    addCategory: (id: number, name: string) => void;
    addStatus: (status: string) => void;
    addScore: (score:number) => void;
    addType:(type:string)=>void;
}>(set => ({
    config: { ...defaultConfig },
    addLevel: (level) => set(state => ({ config: { ...state.config, level: level } })),
    addNumberOfQuestion: (count) => set(state => ({ config: { ...state.config, numberOfQuestion: count } })),
    addCategory: (id, name) => set(state => ({ config: { ...state.config, category: { id, name } } })),
    addStatus: (status) => set(state => ({ config: { ...state.config, status } })),
    addScore: (score) => set(state => ({ config: { ...state.config, score:state.config.score +score } })),
    addType:(type:string) =>set(state=> ({config:{...state.config,type}}))
}));

export default useQuiz;