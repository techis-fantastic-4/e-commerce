import React, {useEffect, useState} from 'react'
import ImgHomeMainPc from "./img/home-main-pc.jpg"
import Like from "./img/Like.png"
import Unlike from "./img/unlike.png"


const Cards = () => {

    const [show, setShow] = useState(false);
    const [likeUnlike, setLikeUnlike] = useState(true);
    const [editDone, setEditDone] = useState(true);

    return (
        <div>
            <div className="fav-header">
                    <h1 className="favorites">Favorites</h1>
                    <button className="edit-button" onClick={() => {setShow(true); setEditDone(false)}}>
                        {editDone? "Edit":"Done"}
                    </button>
            </div>
                      
            <div className="fav-container">
                
                <div className="Card">

                    {likeUnlike ? 
                       <>
                            {
                                show?<div className="like" onClick={() => setLikeUnlike(false)}><img src={Like} alt="" /></div> :null
                            }
                       </>
                       :<div className="like" onClick={() => setLikeUnlike(false)}><img src={Unlike} alt="" /></div>
                    }
                    <div className="card-image">
                        <img src={ImgHomeMainPc} class="main-pc-img" />
                    </div>
                    <div className="card-body">
                        <h3>Product</h3>
                        <h5>EOS 80D DSLR</h5>
                        <h5>Price: $$$</h5>
                    </div>
                </div>
                <div className="Card">

                    {likeUnlike ? 
                       <>
                            {
                                show?<div className="like" onClick={() => setLikeUnlike(false)}><img src={Like} alt="" /></div> :null
                            }
                       </>
                       :<div className="like" onClick={() => setLikeUnlike(false)}><img src={Unlike} alt="" /></div>
                    }
                    <div className="card-image">
                        <img src={ImgHomeMainPc} class="main-pc-img" />
                    </div>
                    <div className="card-body">
                        <h3>Product</h3>
                        <h5>EOS 80D DSLR</h5>
                        <h5>Price: $$$</h5>
                    </div>
                </div>
                <div className="Card">

                    {likeUnlike ? 
                       <>
                            {
                                show?<div className="like" onClick={() => setLikeUnlike(false)}><img src={Like} alt="" /></div> :null
                            }
                       </>
                       :<div className="like" onClick={() => setLikeUnlike(false)}><img src={Unlike} alt="" /></div>
                    }
                    <div className="card-image">
                        <img src={ImgHomeMainPc} class="main-pc-img" />
                    </div>
                    <div className="card-body">
                        <h3>Product</h3>
                        <h5>EOS 80D DSLR</h5>
                        <h5>Price: $$$</h5>
                    </div>
                </div>
                <div className="Card">

                    {likeUnlike ? 
                       <>
                            {
                                show?<div className="like" onClick={() => setLikeUnlike(false)}><img src={Like} alt="" /></div> :null
                            }
                       </>
                       :<div className="like" onClick={() => setLikeUnlike(false)}><img src={Unlike} alt="" /></div>
                    }
                    <div className="card-image">
                        <img src={ImgHomeMainPc} class="main-pc-img" />
                    </div>
                    <div className="card-body">
                        <h3>Product</h3>
                        <h5>EOS 80D DSLR</h5>
                        <h5>Price: $$$</h5>
                    </div>
                </div>
                <div className="Card">

                    {likeUnlike ? 
                       <>
                            {
                                show?<div className="like" onClick={() => setLikeUnlike(false)}><img src={Like} alt="" /></div> :null
                            }
                       </>
                       :<div className="like" onClick={() => setLikeUnlike(false)}><img src={Unlike} alt="" /></div>
                    }
                    <div className="card-image">
                        <img src={ImgHomeMainPc} class="main-pc-img" />
                    </div>
                    <div className="card-body">
                        <h3>Product</h3>
                        <h5>EOS 80D DSLR</h5>
                        <h5>Price: $$$</h5>
                    </div>
                </div>
                <div className="Card">

                    {likeUnlike ? 
                       <>
                            {
                                show?<div className="like" onClick={() => setLikeUnlike(false)}><img src={Like} alt="" /></div> :null
                            }
                       </>
                       :<div className="like" onClick={() => setLikeUnlike(false)}><img src={Unlike} alt="" /></div>
                    }
                    <div className="card-image">
                        <img src={ImgHomeMainPc} class="main-pc-img" />
                    </div>
                    <div className="card-body">
                        <h3>Product</h3>
                        <h5>EOS 80D DSLR</h5>
                        <h5>Price: $$$</h5>
                    </div>
                </div>
                <div className="Card">

                    {likeUnlike ? 
                       <>
                            {
                                show?<div className="like" onClick={() => setLikeUnlike(false)}><img src={Like} alt="" /></div> :null
                            }
                       </>
                       :<div className="like" onClick={() => setLikeUnlike(false)}><img src={Unlike} alt="" /></div>
                    }
                    <div className="card-image">
                        <img src={ImgHomeMainPc} class="main-pc-img" />
                    </div>
                    <div className="card-body">
                        <h3>Product</h3>
                        <h5>EOS 80D DSLR</h5>
                        <h5>Price: $$$</h5>
                    </div>
                </div>
                
            </div>
           
            
        </div>
            
    )
}

export default Cards
