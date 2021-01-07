import store from "@/store";

export default (to, from, next) => {
  if (
    store.getters["auth/isLoggedIn"] &&
    (to.name !== "LogIn" || to.name !== "Registration")
  ) {
    next();
  } else {
    next({ name: "LogIn" });
  }
};
