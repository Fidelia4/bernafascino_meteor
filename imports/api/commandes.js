import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";
import { Email } from "meteor/email";

// 🔹 Collection MongoDB pour les commandes
export const Commandes = new Mongo.Collection("commandes");

if (Meteor.isServer) {
  Meteor.publish("commandes", function () {
    return Commandes.find();
  });
}

// 🔹 Méthodes Meteor
Meteor.methods({
  "commandes.insert"({ nomClient, emailClient, article, quantite, prixTotal }) {
    check(nomClient, String);
    check(emailClient, String);
    check(article, String);
    check(quantite, Number);
    check(prixTotal, Number);

    // Insertion dans MongoDB
    const commandeId = Commandes.insert({
      nomClient,
      emailClient,
      article,
      quantite,
      prixTotal,
      createdAt: new Date(),
    });

    console.log(`🛒 Nouvelle commande de ${nomClient} pour ${quantite}x ${article}`);

    // Envoi d’un email automatique à toi (administrateur)
    Email.send({
      to: "fideliagbd@gmail.com", // ton adresse de réception
      from: emailClient,
      subject: `📦 Nouvelle commande de ${nomClient}`,
      text: `
        Nom : ${nomClient}
        Email : ${emailClient}
        Article : ${article}
        Quantité : ${quantite}
        Prix total : ${prixTotal} FCFA
      `,
    });

    return commandeId;
  },
});
