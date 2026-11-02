function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name").trim();
    const phone = formData.get("phone").trim();
    const subject = formData.get("subject");
    const message = formData.get("message").trim();
    const whatsappMessage = [
      "Bonjour Delalie Andréa,",
      "",
      `Je m'appelle ${name}.`,
      phone ? `Mon numéro de téléphone : ${phone}.` : null,
      `Objet : ${subject}`,
      "",
      message,
    ].filter(Boolean).join("\n");

    window.location.assign(`https://wa.me/2290162765179?text=${encodeURIComponent(whatsappMessage)}`);
  }

  return (
    <section className="contact">
      <div className="contact-intro">
        <p className="eyebrow">Nous sommes à votre écoute</p>
        <h2>Écrivez-nous, nous vous répondrons sur WhatsApp.</h2>
        <p>Remplissez le formulaire et votre message sera préparé dans WhatsApp.</p>
        <div className="contact-details">
          <a href="tel:+2290162765179">+229 01 62 76 51 79</a>
          <a href="mailto:delalieedossouyovo@gmail.com">delalieedossouyovo@gmail.com</a>
          <span>Calavi Zogbadjè · Du lundi au samedi, de 9 h à 19 h</span>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Votre nom
          <input name="name" type="text" autoComplete="name" placeholder="Nom et prénom" required />
        </label>
        <label>
          Votre téléphone <span>(facultatif)</span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="Votre numéro" />
        </label>
        <label className="contact-form-wide">
          Sujet de votre message
          <select name="subject" defaultValue="Une commande" required>
            <option>Une commande</option>
            <option>Une question sur un produit</option>
            <option>Une livraison</option>
            <option>Autre demande</option>
          </select>
        </label>
        <label className="contact-form-wide">
          Votre message
          <textarea name="message" rows="5" placeholder="Indiquez-nous votre demande..." required />
        </label>
        <button className="button primary-button contact-form-wide" type="submit">Continuer sur WhatsApp ↗</button>
      </form>
    </section>
  );
}

export default Contact;
