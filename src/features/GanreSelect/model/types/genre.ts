import { SelectOption } from '@/shared/ui/Select/Select'

export const Genres = {
    fantasy: 'Фентэзи',
    horror: 'Хоррор',
    comdey: 'Комедия',
    action: 'Экшен'
}

export const GenresOptions: SelectOption[] = Object.keys(Genres)
    .map((ganre: string) => ({value: ganre, text: Genres[ganre as keyof typeof Genres]}));