import { Roboto } from 'next/font/google'
import localFont from 'next/font/local'

export const roboto = Roboto(
    {
        weight: ['300', '400', '500', '700'],
        preload: false,
        variable: '--font-family'
    }
);

export const sfPro = localFont(
    {
        src:'./SFProText-Regular.ttf',
        variable: '--font-family-sf-pro'
    }
);