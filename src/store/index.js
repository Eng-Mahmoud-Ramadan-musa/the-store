import { createStore } from "vuex";

let myData = [];
let phones = [];
let laptops = [];
let theHuors = [];
let men = [];
let women = [];
let children = [];
let theUserLogin = {};
let theShoping = [];
let theShop = [];
let theLogin = [];
let dataUsers = [];
function getDataProducts() {
  let getProducts = localStorage.getItem("theData");
  if (getProducts) {
    myData = JSON.parse(localStorage.theData);
  } else {
    myData;
  }
}
getDataProducts();
function getDataUser() {
  let getUser = localStorage.getItem("addUser");
  if (getUser) {
    dataUsers = JSON.parse(localStorage.addUser);
  } else {
    dataUsers;
  }
}
getDataUser();
async function fetchData() {
  let response = await fetch("https://api.npoint.io/dcfd8a55c87de90780ae");
  let json = await response.json();
  let dataJson = await json;
  dataJson.map((a) => {
    if (a.category === "phones") {
      return phones.push(a);
    } else if (a.category === "laptops") {
      return laptops.push(a);
    } else if (a.category === "hours") {
      return theHuors.push(a);
    } else if (a.category === "men") {
      return men.push(a);
    } else if (a.category === "women") {
      return women.push(a);
    } else if (a.category === "children") {
      return children.push(a);
    }
  });
  localStorage.setItem("theData", JSON.stringify(dataJson));
}
fetchData();

function getDataShoping() {
  let getItems = localStorage.getItem("productShoping");
  if (getItems) {
    theShop = JSON.parse(localStorage.productShoping);
  } else {
    theShop = [];
  }
}
getDataShoping();
let totalCount = 0;
function getDataLogin() {
  for (let i = 0; i < theShop.length; i++) {
    if (theShop[i].name == theUserLogin.name) {
      theShoping = theShop[i].products;
    }
  }
}
function getDataUserLogin() {
  let getItems = localStorage.getItem("userLogin");
  if (getItems) {
    theUserLogin = JSON.parse(localStorage.userLogin);
  } else {
    theUserLogin;
  }
}
getDataUserLogin();
let getItems = localStorage.getItem("myUsers");
if (getItems) {
  theLogin = JSON.parse(localStorage.myUsers);
} else {
  theLogin = [];
}

getDataLogin();
function additioncount() {
  for (let i = 0; i < theShoping.length; i++) {
    totalCount += theShoping[i].quantity;
  }
}
additioncount();

export default createStore({
  state: {
    dataProductes: myData,
    dataPhones: phones,
    dataLaptops: laptops,
    thisHuors: theHuors,
    dataMen: men,
    dataWomen: women,
    dataChildren: children,
    dataShoping: theShoping,
    totalCountShoping: totalCount,
    login: theLogin,
    userLogin: theUserLogin,
    thisShop: theShop,
    addUser: dataUsers,
  },
  getters: {
    // search**************
    consumerUploaders: (state) => state.dataProductes,
    filteredUploaders: (state) => (target) => {
      return state.dataProductes.filter((dataProducte) =>
        dataProducte.title.toLowerCase().startsWith(target.toLowerCase())
      );
    },
  },
  mutations: {
    addToCart(state, product) {
      let theUser = state.thisShop.find((e) => e.name == state.userLogin.name);
      if (theUser) {
        let existingProduct = theUser.products.find(
          (item) => item.id == product.id
        );
        console.log(existingProduct, product.id);
        if (existingProduct) {
          if (product.stock - existingProduct.quantity >= 0) {
            existingProduct.quantity++;
            existingProduct.stock--;
          }
        } else {
          product.stock--;
          theUser.products.push({ ...product, quantity: 1 });
        }
      } else {
        product.stock--;
        state.thisShop.push({
          name: `${state.userLogin.name}`,
          products: [{ ...product, quantity: 1 }],
        });
        window.location.reload();
      }
      localStorage.setItem("productShoping", JSON.stringify(state.thisShop));
    },
    // **************
    checkDataUser(state, user) {
      const userExists = state.addUser.find(
        (e) =>
          e.name.toLowerCase() == user.name.toLowerCase() &&
          e.password === user.password
      );
      console.log(userExists);
      if (userExists) {
        localStorage.setItem("userLogin", JSON.stringify({ ...userExists }));
        alert("You have been logged in successfully");
      } else {
        localStorage.setItem(
          "userLogin",
          JSON.stringify({ id: "", name: "", image: "" })
        );
        alert("userName or password error");
      }
      location.reload();
    },
    CountShoping(state) {
      let vals = 0;
      for (let i = 0; i < state.dataShoping.length; i++) {
        vals += state.dataShoping[i].quantity;
      }
      state.totalCountShoping = vals;
    },
    saveDataUser(state, user) {
      let isUser = state.addUser.find((el) => el.name === user.name);
      if (!isUser) {
        if (
          user.name !== "" &&
          user.email !== "" &&
          user.password !== "" &&
          user.image !== ""
        ) {
          state.addUser.push({ ...user });
          localStorage.setItem("addUser", JSON.stringify(state.addUser));
        }
      } else {
        alert("هذا المستخدم موجود بالفعل");
      }
    },
  },

  actions: {
    addToCart({ commit }, product) {
      commit("addToCart", product);
    },
    // *************
    checkDataUser({ commit }, user) {
      commit("checkDataUser", user);
    },
    saveDataUser({ commit }, user) {
      commit("saveDataUser", user);
    },
  },
  modules: {},
});
