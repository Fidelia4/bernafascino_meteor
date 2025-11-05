import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const Commandes = new Mongo.Collection("commandes");

if (Meteor.isServer) {
  Meteor.publish("commandes", function () {
    return Commandes.find();
  });
}

Meteor.methods({
  "commandes.insert"(data) {
    if (!data || !data.nomClient || !data.article) {
      throw new Meteor.Error("400", "Données invalides");
    }

    Commandes.insert({
      ...data,
      date: new Date(),
    });
  },
});
