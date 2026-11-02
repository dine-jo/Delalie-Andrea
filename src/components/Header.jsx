import { useState } from "react";
import logo from "../assets/Logo.jpeg";

function Header({ Link }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="site-header"><div className="header-inner"><Link to="/" className="brand"><img src={logo} alt=""/><span>Delalie <b>Andréa</b><small>Saveurs locales</small></span></Link><button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={open}><i></i><i></i></button><nav className={open ? "main-nav is-open" : "main-nav"} aria-label="Navigation principale"><div className="nav-links"><Link to="/" onClick={close}>Accueil</Link><Link to="/produits" onClick={close}>Produits</Link><Link to="/a-propos" onClick={close}>À propos</Link><Link to="/contact" onClick={close}>Contact</Link></div><Link to="/contact" className="nav-contact" onClick={close}>Nous contacter</Link></nav></div></header>;
}
export default Header;
