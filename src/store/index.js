import Vue from "vue";
import Vuex from "vuex";
import fan from "../assets/2_28___88223_2048x2048.webp";
import pizza from "../assets/pizza.jpeg";
import icecream from "../assets/download.jpeg";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      { id: 1, name: "Ice Cream", price: "10", src: icecream },
      { id: 2, name: "Pizza ", price: "10", src: pizza },
      { id: 3, name: "Pizza ", price: "10", src: pizza },
      { id: 4, name: "Pizza ", price: "10", src: pizza },
      { id: 5, name: "Pizza ", price: "10", src: pizza },
      { id: 6, name: "Pizza ", price: "10", src: pizza },
      { id: 7, name: "Fan", price: "10", src: fan },
      { id: 8, name: "Fan", price: "10", src: fan },
      { id: 9, name: "Fan", price: "10", src: fan },
      { id: 10, name: "Fan", price: "10", src: fan },
      { id: 11, name: "Fan", price: "10", src: fan },
      { id: 12, name: "Fan", price: "10", src: fan },
      { id: 13, name: "Fan", price: "10", src: fan },
    ],
    cartItemsCount: 0,
    cartItems: [],
  },
  getters: {},
  mutations: {
    addToCart(state, payload) {
      let item = payload;
      item = { ...item, quantity: 1 };
      if (state.cartItems.length > 0) {
        let bool = state.cartItems.some((i) => i.id == item.id);

        if (bool) {
          let itemIndex = state.cartItems.findIndex((el) => el.id === item.id);
          state.cartItems[itemIndex]["quantity"] += 1;
        } else {
          state.cartItems.push(item);
        }
      } else {
        state.cartItems.push(item);
      }
      state.cartItemsCount++;
    },
    removeItem(state, payload) {
      if (state.cartItems.length > 0) {
        let bool = state.cartItems.some((i) => i.id == payload.id);

        if (bool) {
          let index = state.cartItems.findIndex((el) => el.id === payload.id);

          if (state.cartItems[index]["quantity"] !=0) {
            state.cartItems[index]["quantity"] -= 1;
            state.cartItemsCount--
          }
          if (state.cartItems[index]["quantity"] ==0) {
            state.cartItems.splice(index,1)
          }
         
        } 
      } 
    },
  },
  actions: {
    addToCart: (context, payload) => {
      context.commit("addToCart", payload);
    },
    removeItem: (context, payload) => {
      context.commit("removeItem", payload);
    },
  },
  modules: {},
});
