import { parseISO, format } from 'date-fns';

export const formatDate = date => {
    return format(parseISO(date), 'LLLL do, y');
}