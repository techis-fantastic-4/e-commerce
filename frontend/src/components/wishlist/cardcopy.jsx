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
                    <img src={} class="main-pc-img" />
                </div>
                <div className="card-body">
                    <h3>Product</h3>
                    
                </div>
            </div>
                
            </div>