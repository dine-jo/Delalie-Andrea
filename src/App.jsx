import { useEffect, useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Contact from "./components/Contact";
import SalesTerms from "./components/SalesTerms";
import imgSeches from "./assets/Seches.jpeg";
import imgAguindja from "./assets/Aguindja.jpeg";
import imgPrecuits from "./assets/Precuits.jpeg";
import imgFrits from "./assets/frits.jpeg";
import aguindjaRiz from "./assets/riz.jpeg";
import aguindjaCouscous from "./assets/couscous.jpeg";
import aguindjaSpaghetti from "./assets/spaghetti.jpeg";
import hero from "./assets/images.jpeg";

export const produits = [
  {
    id: "escargots-seches", name: "Escargots séchés", image: imgSeches,
    description: "Escargots soigneusement séchés, avec une conservation pouvant aller jusqu'à un an tout en préservant leurs qualités. Chaque boîte contient 250 g. Les cartons comptent de 20 à 30 escargots, avec une sélection privilégiant les gros morceaux.",
    usage: "La préparation est simple : réhydratez à l'eau chaude avec un peu de sel, puis ajoutez-les à votre recette pour retrouver leur belle saveur.",
    points: ["Boîte de 250 g", "20 à 30 escargots par carton", "Gros morceaux privilégiés"],
    price: "14 900 F CFA", badge: "Séchés · 250 g",
  },
  {
    id: "aguindja", name: "AGUINDJA", image: imgAguindja,
    description: "Une préparation savoureuse à base de tomates, d'oignons, d'épices naturelles et d'escargots, prête à déguster. Elle accompagne parfaitement le riz, la pâte, l'igname, le pain, le couscous, les spaghettis ou le gari. Disponible à l'huile rouge ou à l'huile d'arachide.",
    usage: "Bien scellée, elle sent bon et se conserve jusqu'à un an à température ambiante, sans conservateur chimique.",
    points: ["Deux saveurs : huile rouge ou huile d'arachide", "Prête à déguster", "Jusqu'à un an de conservation"],
    price: "3 500 F CFA", badge: "Prête à déguster",
  },
  {
    id: "escargots-precuites", name: "Escargots précuits", image: imgPrecuits,
    description: "Des escargots déjà cuits et bien assaisonnés pour leur donner un goût savoureux. Ils sont prêts à manger dès l'ouverture.",
    usage: "À déguster seuls ou à servir en accompagnement d'un plat. Une solution pratique et délicieuse pour vos repas.",
    points: ["Déjà cuits et assaisonnés", "Prêts à manger", "À servir seuls ou en accompagnement"],
    price: "12 700 F CFA", badge: "Prêts à manger",
  },
  {
    id: "escargots-frits", name: "Escargots frits", image: imgFrits,
    description: "Des escargots frits à l'huile et soigneusement assaisonnés pour une saveur généreuse.",
    usage: "Prêts à manger, ils accompagnent délicieusement vos repas.",
    points: ["Frits à l'huile", "Bien assaisonnés", "Prêts à servir en accompagnement"],
    price: "10 000 F CFA", badge: "Frits · prêts à servir",
  },
  {
    id: "escargots-crus", name: "Escargots crus", image: imgPrecuits,
    description: "Des escargots crus de qualité, sélectionnés pour leur belle taille.",
    usage: "Contactez-nous pour connaître les disponibilités et choisir votre quantité.",
    points: ["Escargots crus de qualité", "Beaux morceaux", "Disponibilité et prix sur demande"],
    price: "Sur demande", badge: "Qualité · beaux morceaux",
  },
];

const aguindjaProduct = produits.find((item) => item.id === "aguindja");

const aguindjaPairings = [
  { title: "Aguindja avec du riz", image: aguindjaRiz, alt: "Riz servi avec la sauce Aguindja et des escargots", description: "Le riz accompagne parfaitement l'Aguindja : sa texture douce accueille la sauce aux tomates, oignons, épices et escargots. Chaque bouchée est généreuse et pleine de saveur." },
  { title: "Aguindja avec du couscous", image: aguindjaCouscous, alt: "Couscous garni d'Aguindja, d'escargots et de légumes", description: "Avec le couscous, l'Aguindja apporte une touche relevée et gourmande. La sauce et les escargots se mêlent au couscous pour un plat convivial et savoureux." },
  { title: "Aguindja avec des spaghettis", image: aguindjaSpaghetti, alt: "Spaghettis enrobés de sauce Aguindja aux escargots", description: "Les spaghettis se marient très bien avec l'Aguindja : la sauce nappe les pâtes et les escargots ajoutent une belle texture. Une assiette simple à préparer et délicieuse à partager." },
];

const videos = [
  { title: "Où trouver nos produits", place: "Calavi Zogbadjè", url: "https://www.facebook.com/reel/1200232742041429/?app=fbl" },
  { title: "Nos points de vente", place: "Porto-Novo", url: "https://www.facebook.com/delalieandrea/videos/1294071372134498/?app=fbl" },
  { title: "Découvrez toute notre gamme", place: "Tous nos produits", url: "https://www.facebook.com/reel/1430048652453687/?fbl" },
];

function VideoPreviews() {
  return <section className="video-section page-wrap">
    <div className="section-heading"><p className="eyebrow">En vidéo</p><h2>Découvrez Delalie Andréa</h2><p>Nos produits et nos points de vente en quelques images.</p></div>
    <div className="video-grid">{videos.map((video) => <a className="video-card" href={video.url} key={video.title} target="_blank" rel="noreferrer">
      <span className="video-play" aria-hidden="true">▶</span><span className="video-label">Vidéo Facebook · {video.place}</span><strong>{video.title}</strong><span className="video-link">Voir la vidéo ↗</span>
    </a>)}</div>
  </section>;
}

function SocialIcon({ network }) {
  if (network === "facebook") return <svg viewBox="0 0 320 512" aria-hidden="true"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06H297V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.2V288z"/></svg>;
  if (network === "tiktok") return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.7 4.21 1.07 1.11 2.59 1.62 4.09 1.79v4.09c-1.4-.05-2.81-.34-4.08-.96-.55-.25-1.07-.57-1.58-.9-.01 2.77.01 5.54-.02 8.3-.07 1.46-.55 2.91-1.39 4.1-1.36 2-3.73 3.3-6.15 3.34-1.49.08-2.99-.32-4.26-1.09-2.11-1.27-3.59-3.59-3.81-6.05-.02-.5-.03-1.01-.01-1.51.19-2.07 1.22-4.06 2.84-5.37 1.83-1.52 4.39-2.2 6.72-1.62.02 1.5-.04 3-.04 4.5-1.01-.33-2.19-.24-3.08.37-.65.42-1.14 1.08-1.39 1.81-.21.51-.15 1.08-.14 1.62.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.67 2.78-1.62.19-.33.33-.69.39-1.07.1-1.78.06-3.56.07-5.34.01-4.01-.01-8.02.03-12.03z"/></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.52 3.48A11.9 11.9 0 0 0 12.05 0C5.48 0 .13 5.35.12 11.92c0 2.1.55 4.15 1.6 5.96L0 24l6.27-1.64a11.9 11.9 0 0 0 5.77 1.47h.01c6.57 0 11.92-5.35 11.93-11.92a11.86 11.86 0 0 0-3.46-8.43ZM12.05 21.8a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.72.97.99-3.63-.24-.37a9.86 9.86 0 0 1-1.52-5.26c0-5.46 4.45-9.91 9.91-9.91a9.85 9.85 0 0 1 7.02 2.91 9.85 9.85 0 0 1 2.9 7.02c0 5.46-4.45 9.91-9.94 9.91Zm5.44-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.67-2.07-.18-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.12-.28-.2-.58-.35Z"/></svg>;
}

function App() {
  const [route, setRoute] = useState(`${window.location.pathname}${window.location.hash}`);
  useEffect(() => {
    const update = () => setRoute(`${window.location.pathname}${window.location.hash}`);
    window.addEventListener("popstate", update);
    return () => window.removeEventListener("popstate", update);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setRoute(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const path = route.replace(/^\//, "").split("#")[0];
  const product = produits.find((item) => item.id === path.replace("produit/", "") || (item.id === "aguindja" && path === "aguindja"));
  const openProduct = (productId) => navigate(productId === "aguindja" ? "/aguindja" : `/produit/${productId}`);
  const orderMessage = product?.price === "Prix sur demande"
    ? `Bonjour, je voudrais connaître le prix des ${product.name.toLowerCase()} et passer commande.`
    : `Bonjour, je voudrais commander : ${product?.name} au prix de ${product?.price}`;
  const go = (event, to) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    navigate(to);
  };
  const Link = ({ to, children, className = "" }) => <a href={to} className={className} onClick={(event) => go(event, to)}>{children}</a>;

  return <div className="site-shell">
    <Header Link={Link} />
    {product ? <main className={`product-detail page-wrap${product.id === "aguindja" ? " aguindja-detail" : ""}`}>
      <Link to="/produits" className="back-link">← Tous les produits</Link>
      <div className="detail-grid">
        <div className="detail-image-wrap"><img src={product.image} alt={product.name} className="detail-image"/><span className="detail-badge">{product.badge}</span></div>
        <div className="detail-copy">
          <p className="eyebrow">La sélection Delalie Andréa</p><h1>{product.name}</h1><p className="price detail-price">{product.price}</p>
          <section className="detail-section"><h2>Description</h2><p>{product.description}</p></section>
          <section className="detail-section"><h2>À retenir</h2><ul className="product-points">{product.points.map((point) => <li key={point}>{point}</li>)}</ul></section>
          <section className="detail-section"><h2>Conseils &amp; dégustation</h2><p>{product.usage}</p></section>
          {product.id === "aguindja" && <section className="aguindja-extra"><p className="eyebrow">Une recette, deux saveurs</p><h2>À table avec Aguindja</h2><p>Choisissez votre préférence : huile rouge ou huile d'arachide. Servez cette préparation avec du riz, de la pâte, de l'igname, du pain, du couscous, des spaghettis ou du gari.</p><p>Le pot est bien scellé et se conserve jusqu'à un an à température ambiante, sans conservateur chimique.</p></section>}
          <p className="delivery-note">Livraison possible partout. Contactez-nous pour votre commande et les modalités.</p>
          <a className="button primary-button" href={`https://wa.me/2290162765179?text=${encodeURIComponent(orderMessage)}`} target="_blank" rel="noreferrer">Commander sur WhatsApp</a>
        </div>
      </div>
      {product.id === "aguindja" && <section className="aguindja-pairings"><div className="section-heading"><p className="eyebrow">Idées de dégustation</p><h2>À savourer avec vos plats préférés</h2><p>Découvrez comment l'Aguindja accompagne différentes assiettes.</p></div>{aguindjaPairings.map((pairing, index) => <article className={`pairing-row pairing-row-${index + 1}`} key={pairing.title}><div className="pairing-image"><img src={pairing.image} alt={pairing.alt}/></div><div className="pairing-copy"><p className="eyebrow">Suggestion de service</p><h3>{pairing.title}</h3><p>{pairing.description}</p><a className="button primary-button" href={`https://wa.me/2290162765179?text=${encodeURIComponent(`Bonjour, je voudrais commander l'Aguindja pour accompagner ${pairing.title.replace("Aguindja avec ", "")}.`)}`} target="_blank" rel="noreferrer">Commander l'Aguindja</a></div></article>)}</section>}
    </main>
      : path === "produits" ? <main className="page-wrap listing-page">
        <div className="section-heading"><p className="eyebrow">Du bon, du local</p><h1>Nos produits</h1><p>Découvrez nos préparations d'escargots, cuisinées avec soin à Calavi Zogbadjè.</p></div>
        <div className="produits">{[aguindjaProduct, ...produits.filter((item) => item.id !== "aguindja")].map((item) => <ProductCard key={item.id} produit={item} Link={Link} onProductNavigate={openProduct}/>)}</div>
      </main>
        : path === "a-propos" ? <main className="page-wrap about-page">
          <div className="about-hero"><div><p className="eyebrow">À propos</p><h1>Le goût du local, préparé avec soin.</h1><p>Delalie Andréa est une entreprise de Calavi Zogbadjè, fondée par Dossou-yovo Delalie. Nous mettons à l'honneur les escargots à travers des recettes locales généreuses et pratiques.</p></div><img src={hero} alt="Dossou-yovo Delalie présente une spécialité d'escargots"/></div>
          <div className="about-panel"><h2>Nos spécialités</h2><p>Escargots crus de qualité, escargots séchés, escargots précuits, escargots frits et Aguindja, une préparation savoureuse à base d'escargots.</p><p>Nos produits sont disponibles à Calavi Zogbadjè et à Porto-Novo. Nous proposons la livraison partout : écrivez-nous pour organiser votre commande.</p><Link to="/contact" className="button primary-button">Nous contacter</Link></div>
        </main>
          : path === "conditions-de-vente" ? <SalesTerms />
            : path === "contact" ? <main className="page-wrap contact-page"><div className="section-heading"><p className="eyebrow">Nous sommes à votre écoute</p><h1>Contact &amp; commandes</h1><p>Une question ou envie de commander ? Retrouvez-nous par téléphone, email ou sur les réseaux.</p></div><Contact /></main>
            : <main>
              <section className="hero page-wrap"><div className="hero-copy"><p className="eyebrow">Saveurs locales · Calavi Zogbadjè</p><h1>Le plaisir d'une<br/><em>cuisine rapide et saine.</em></h1><p>Découvrez les spécialités d'escargots de Delalie Andréa, préparées avec soin à Calavi Zogbadjè et disponibles en livraison.</p><div className="hero-actions"><Link to="/produits" className="button primary-button">Découvrir nos produits <span>→</span></Link></div><div className="hero-note"><span>✳</span> Livraison possible partout.</div></div><div className="hero-image-wrap"><img src={hero} alt="Dossou-yovo Delalie présente une spécialité d'escargots"/></div></section>
              <section className="aguindja-feature page-wrap"><div className="aguindja-feature-image"><img src={imgAguindja} alt="Pot d'Aguindja, spécialité d'escargots"/></div><div className="aguindja-feature-copy"><p className="eyebrow">La spécialité de la maison</p><h2>Aguindja</h2><p>{aguindjaProduct.description}</p><ul className="product-points">{aguindjaProduct.points.map((point) => <li key={point}>{point}</li>)}</ul><p className="price">{aguindjaProduct.price}</p><div className="aguindja-actions"><Link to="/aguindja" className="button primary-button">Découvrir Aguindja</Link><a className="button outline-button" href={`https://wa.me/2290162765179?text=${encodeURIComponent("Bonjour, je voudrais commander Aguindja au prix de 3 500 F CFA")}`} target="_blank" rel="noreferrer">Commander</a></div></div></section>
              <section className="home-products page-wrap"><div className="section-heading row-heading"><div><p className="eyebrow">La sélection de la maison</p><h2>Nos incontournables</h2></div><Link to="/produits" className="text-link">Tous les produits ↗</Link></div><div className="produits">{produits.filter((item) => item.id !== "aguindja").slice(0, 3).map((item) => <ProductCard key={item.id} produit={item} Link={Link} onProductNavigate={openProduct}/>)}</div></section>
              <section className="home-cta"><p className="eyebrow">Une envie ?</p><h2>Commandez vos spécialités directement sur WhatsApp.</h2><Link to="/produits" className="button light-button">Voir les produits →</Link></section>
              <VideoPreviews />
            </main>}
    <footer className="site-footer"><div className="footer-inner"><div className="footer-brand"><span className="footer-mark">D.</span><div><strong>Delalie Andréa</strong><p>Le goût du local, préparé avec soin.</p></div></div><div className="footer-nav"><Link to="/">Accueil</Link><Link to="/produits">Produits</Link><Link to="/a-propos">À propos</Link><Link to="/contact">Contact</Link><Link to="/conditions-de-vente">Conditions de vente</Link></div><div className="social-links" aria-label="Réseaux sociaux"><a className="social facebook" href="https://www.facebook.com/share/1QCLDgkTTR/?mibextid=wwXIfr" target="_blank" rel="noreferrer" aria-label="Facebook"><SocialIcon network="facebook"/></a><a className="social tiktok" href="https://www.tiktok.com/@delalieandreadossouyovo?_r=1&_t=ZS-9AUXnqCYHWU" target="_blank" rel="noreferrer" aria-label="TikTok"><SocialIcon network="tiktok"/></a><a className="social whatsapp" href="https://wa.me/2290162765179" target="_blank" rel="noreferrer" aria-label="WhatsApp"><SocialIcon network="whatsapp"/></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Delalie Andréa</span><span>Calavi Zogbadjè · Livraison partout</span></div></footer>
  </div>;
}

export default App;
