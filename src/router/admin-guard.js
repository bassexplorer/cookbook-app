import store from "@/store";

export default (to, from, next) => {
  //   console.log(store.getters["auth/currentUser"].admin);
  if (store.getters["auth/currentUser"].admin) {
    next();
  } else {
    next({ name: "AppHome" });
  }
};
