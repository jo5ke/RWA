
export const BOOK_SELECTED = 'BOOK_SELECTED';
export const BOOK_DELETED = 'BOOK_DELETED';

export function selectBook(book) {
    console.log(`Selected ${book.title}`);
    return {
        type: BOOK_SELECTED,
        payload: book
    }
}

export function deleteBook(book) {
    //verbose u inspect
    console.debug(`Deleted ${book.title}`);
    return {
        type: BOOK_DELETED,
        payload: book.title // kao id, moze i ceo objekat
    }

}