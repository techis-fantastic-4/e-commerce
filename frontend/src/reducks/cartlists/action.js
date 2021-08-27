export const CARTLIST_FETCH = 'CARTLIST_FETCH'
export const cartlistsFetchAction = (cartlists, subtotal) => {
    return {
        type:'CARTLIST_FETCH',
        list: cartlists,
        subtotal: subtotal
    }
}