import dynamic from 'next/dynamic';

export const FilmPageAsync = dynamic(() => import('./FilmPage'));