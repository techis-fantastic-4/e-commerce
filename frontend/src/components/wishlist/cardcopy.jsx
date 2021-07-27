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