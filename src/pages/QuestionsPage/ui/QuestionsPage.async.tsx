import dynamic from 'next/dynamic';

export const QuestionsPageAsync = dynamic(() => import('./QuestionsPage'));
