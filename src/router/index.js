import Vue from "vue";
import VueRouter from "vue-router";
import goTo from "vuetify/es5/services/goto";
import AuthGuard from "./auth-guard";
import AdminGuard from "./admin-guard";

Vue.use(VueRouter);

const routes = [
  // ---------- No auth Needed
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/registration",
    name: "Registration",
    component: () => import("../views/RegisterPage.vue")
  },
  {
    path: "/login",
    name: "LogIn",
    component: () => import("../views/LoginPage.vue")
  },
  // ------------ Auth Needed
  {
    path: "/add-recipe",
    name: "AddRecipe",
    meta: { requiresAuth: true },
    component: () => import("../views/AddRecipe.vue"),
    beforeEnter: AdminGuard
  },
  // Where the user land after login

  {
    path: "/app-home",
    name: "AppHome",
    meta: { requiresAuth: true },
    redirect: { name: "MainArea" },
    component: () => import("../views/AppHome.vue"),
    children: [
      {
        path: "",
        name: "MainArea",
        component: () => import("../components/app-home/MainArea.vue"),
        meta: { requiresAuth: true }
      },
      {
        path: "/category/:categoryId",
        name: "CategoryLoader",
        props: true,
        component: () => import("../components/recipes/CategoryLoader.vue"),
        meta: { requiresAuth: true }
      },
      {
        path: "/recipes",
        name: "AllRecipes",
        props: true,
        component: () => import("../components/recipes/AllRecipes.vue"),
        meta: { requiresAuth: true }
      }
    ]
  },
  // If the user click on the recipes menu item it will list a couple of recipe from every category.
  // {
  //   path: "/list-recipes",
  //   name: "Recipes",
  //   meta: { requiresAuth: true },
  //   component: () => import("../views/ListRecipes.vue")
  // },
  // if the user click on a category title
  // {
  //   path: "/category/:categoryId",
  //   name: "RecipeCategoryOFF",
  //   props: true,
  //   meta: { requiresAuth: true },
  //   component: () => import("../views/ListRecipes.vue")
  // },

  // An individual recipe
  {
    path: "/recipe/:recipeId",
    name: "Recipe",
    props: true,
    component: () => import("../views/RecipeItem.vue"),
    meta: { requiresAuth: true }
  },

  // No need for auth they are part of the "website section"
  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    component: () => import("../views/PrivacyPolicy.vue")
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: () => import("../views/ContactUs.vue")
  },
  {
    path: "/terms-and-conditions",
    name: "TermsAndConditions",
    component: () => import("../views/TermsAndConditions.vue")
  },
  {
    path: "/:notFound(.*)",
    name: "NotFound",
    component: () => import("../views/NotFound.vue")
  }
];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    let scrollTo = 0;

    if (to.hash) {
      scrollTo = to.hash;
    } else if (savedPosition) {
      scrollTo = savedPosition.y;
    }

    return goTo(scrollTo);
  }
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    AuthGuard(to, from, next);
  } else {
    next();
  }
});

export default router;
