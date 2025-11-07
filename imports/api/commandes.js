import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";
import { Email } from "meteor/email";

export const Commandes = new Mongo.Collection("commandes");

Meteor.methods({
  async "commandes.insert"({ nomClient, emailClient, article, quantite, prixTotal }) {
    check(nomClient, String);
    check(emailClient, String);
    check(article, String);
    check(quantite, Number);
    check(prixTotal, Number);

    try {
      // ✅ Nouvelle syntaxe avec insertAsync
      const commandeId = await Commandes.insertAsync({
        nomClient,
        emailClient,
        articles: [{ nom: article, quantite, prix: prixTotal }],
        createdAt: new Date(),
      });

      const texte = `
Nouvelle commande :
👤 Nom : ${nomClient}
📧 Email : ${emailClient}

🛍️ Article : ${article}
Quantité : ${quantite}
Total : ${prixTotal.toLocaleString()} FCFA
`;

      // ✅ Envoi du mail
      Email.send({
        to: "fideliagbd@gmail.com", // Ton adresse de réception
        from: emailClient,
        subject: `🧵 Nouvelle commande : ${nomClient}`,
        text: texte,
      });

      console.log("✅ Commande simple envoyée :", texte);
      return commandeId;
    } catch (error) {
      console.error("❌ Erreur lors de l’envoi du mail :", error);
      throw new Meteor.Error("email-failed", error.message);
    }
  },
});
