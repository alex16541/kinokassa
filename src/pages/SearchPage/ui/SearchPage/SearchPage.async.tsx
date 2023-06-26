import dynamic from 'next/dynamic';

export const SearchPageAsync = dynamic(() => import('./SearchPage'), {ssr: false});


