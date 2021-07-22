import React from 'react'
import Cards from '../components/wishlist/cards'

const WishList = () => {
    return (
        <div>
            <div className="fav-header">
                <h1 className="favorites">Favorites</h1>
                <button className="edit-button">Edit</button>
            </div>
            <Cards/>
            
        </div>
    )
}

export default WishList


