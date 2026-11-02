function ProductCard({ produit, Link, onProductNavigate }) {
  const productHref = produit.id === "aguindja" ? "/aguindja" : `/produit/${produit.id}`;
  const openProduct = (event) => {
    if (event.target.closest("a")) return;
    onProductNavigate(produit.id);
  };

  const handleKeyDown = (event) => {
    if (event.target !== event.currentTarget) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onProductNavigate(produit.id);
    }
  };

  return <article className="card card-clickable" onClick={openProduct} onKeyDown={handleKeyDown} role="link" tabIndex={0} aria-label={`Voir la fiche de ${produit.name}`}>
    <Link to={productHref} className="card-image-link" aria-label={`Voir ${produit.name}`}>
      <img src={produit.image} alt={produit.name} className="product-image"/>
      <span className="card-badge">{produit.badge}</span>
    </Link>
    <div className="card-content">
      <h3>{produit.name}</h3>
      <p>{produit.description}</p>
      <ul className="product-points">{produit.points.map((point) => <li key={point}>{point}</li>)}</ul>
      <div className="card-bottom"><span className="price">{produit.price}</span><Link to={productHref} className="more-link">Voir plus <span>↗</span></Link></div>
    </div>
  </article>;
}

export default ProductCard;
