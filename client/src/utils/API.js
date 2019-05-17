import axios from "axios";

export default {
  // Gets all cards
  getCards: function () {
    return axios.get("/api/cards");
  },
  // Gets the card with the given id
  getCard: function (id) {
    return axios.get("/api/cards/" + id);
  },
  // Deletes the card with the given id
  deleteCard: function (id) {
    return axios.delete("/api/cards/" + id);
  },
  // Saves a card to the database
  saveCard: function (cardData) {
    return axios.post("/api/cards", cardData);
  },


  /// for signup
  signup: function (data) {
    return axios.post("/api/users/signup", data);
  },

  login: function(data) {
    return axios.post("/api/users/login", data);
  },

  validateToken: function(t) {
    return axios.post("/api/users/validate", { token: t });
  },

  //for the practice page
  // getCurrentCards: function() {
  //   return axios.get("api/current");
  // }


};
