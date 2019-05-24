import axios from "axios";

export default {
  // Gets all cards
  getCards: function (token) {
    return axios.get("/api/cards", {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
  },
  // Gets the card with the given id
  getCard: function (id, token) {
    return axios.get("/api/cards/" + id, { headers: {"Authorization": `Bearer ${token}`}});
  },
  // Deletes the card with the given id
  deleteCard: function (id, token) {
    return axios.delete("/api/cards/" + id, { headers: {"Authorization": `Bearer ${token}`}});
  },
  // Saves a card to the database
  saveCard: function (cardData, token) {
    return axios.post("/api/cards", cardData, { headers: {"Authorization": `Bearer ${token}`}});
  },


  /// for signup
  signup: function (data) {
    return axios.post("/api/users/signup", data);
  },

  login: function(data) {
    return axios.post("/api/users/login", data);
  },

  // validateToken: function(t) {
  //   return axios.post("/api/users/validate", { token: t });
  // },

  //for the practice page
  // getCurrentCards: function() {
  //   return axios.get("api/current");
  // }
  

  // translator: function() {
  //   return axios.get("/api/translate");
  // }


};
