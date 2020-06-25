<section className="featured spad">
<div className="container">
  <div className="row">
    <div className="col-lg-12">
      <div className="section-title">
        <h2>Featured Product</h2>
      </div>
    </div>
  </div>
 



    

<div className="col-lg-3 ">
    <div className="featured__item ">
     
        {
            products.map(product =>
        <li key={product._id}>
             <div className="featured__item__pic set-bg">
              <Link to={'/product/' + product._id}>
              <img src={product.image} alt="product" />
              </Link>    
            <ul className="featured__item__pic__hover">
            <li>
            <a href="#">
            <i className="fa fa-heart" />
            </a>
            </li>
            <li>
            <a href="#">
            <i className="fa fa-retweet" />
            </a>
            </li>
            <li>
            <Link to ={'/cart/' + product._id}>
            <i className="fa fa-shopping-cart" />
            </Link>
            </li>
            </ul>
      </div>
    <div className="featured__item__text">
    <h6>
    <Link to={'/product/' + product._id}>{product.name}</Link>
    </h6>
     <h5>&#8377;{product.price}</h5>
    </div>
</li>


)}</div>




</div>


  
</div>
</section>