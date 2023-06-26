import dynamic from 'next/dynamic';

export const AboutPageAsync = dynamic(() => import('./AboutPage'));