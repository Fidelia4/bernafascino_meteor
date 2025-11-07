import { Meteor } from "meteor/meteor";
import "../imports/api/commandes";
import "../imports/api/messages";
import { Email } from "meteor/email";

Meteor.startup(() => {
  // Configuration du serveur SMTP Gmail
  process.env.MAIL_URL = "smtps://fideliagbd@gmail.com:uopvzjsjpswtsfoq@smtp.gmail.com:465/";

  console.log("Serveur Meteor démarré. Envoi d’e-mails activé ✅");
});
