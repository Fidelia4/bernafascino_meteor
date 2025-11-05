import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { Email } from "meteor/email";

// 🔹 Collection unique
export const Messages = new Mongo.Collection("messages");

// 🔹 Publication (serveur uniquement)
if (Meteor.isServer) {
  Meteor.publish("messages", function () {
    return Messages.find();
  });
}

// 🔹 Méthodes Meteor
Meteor.methods({
 async "messages.insert"({ nom, email, message }) {
    check(nom, String);
    check(email, String);
    check(message, String);

    // Enregistrement dans la base
 await Messages.insertAsync({
  nom,
  email,
  message,
  createdAt: new Date(),
});


    // Envoi d'un email automatique
    Email.send({
      to: "fideliagbd@gmail.com", // ton adresse de réception
      from: email,
      subject: `📬 Nouveau message de ${nom}`,
      text: `Nom : ${nom}\nEmail : ${email}\nMessage : ${message}`,
    });

    return "Message enregistré et email envoyé ✅";
  },
});
