import dynamic from 'next/dynamic';

export const CartPageAsyc = dynamic(() => import('./CartPage'), {ssr: false});