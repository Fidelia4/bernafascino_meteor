import { Meteor } from "meteor/meteor";
import "../imports/api/commandes";
import "../imports/api/messages";


process.env.MAIL_URL = "smtps://fideliagbd@gmail.com:@Hou&f@24044@smtp.gmail.com:465";

Meteor.startup(() => {
  process.env.MAIL_URL =
    "smtp://UTILISATEUR:PASSWORD@smtp.gmail.com:587"; // à configurer selon ton compte
});
