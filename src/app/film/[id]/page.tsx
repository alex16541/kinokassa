'use client'
import { FilmPage } from '@/pages/FilmPage';
import { Card } from '@/shared/ui/Card/Card';

export default function Film({params}: {params: {id:string}}) {

    const id = params.id;

    if(!id){
        return (
            <Card>404</Card>
        )
    }

    return (
        <FilmPage filmId={id} />
    )
}