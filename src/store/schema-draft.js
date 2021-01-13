/* eslint-disable no-unused-vars */

const book = {
  categoryRandomId: {
    name: "Breakfast",
    description: "it is a category for breakfast stuff",
    recipes: {
      randomRecipeId: {
        name: "kenyer",
        portionSize: 4,
        likes: 200,
        description: "It is a tasty recipe of a bread pit!",
        category: "Breakfast",
        imageUrl: "./valahol/kaja.jpg",
        notes: "",
        ingredients: [
          {
            name: "mag",
            amount: "1",
            mesurment: "kg"
          },
          {
            name: "valami",
            amount: "1",
            mesurment: "cup"
          }
        ],
        steps: ["Add Flour", "Add Water", "Mix the dough", "Bake it at 200C"]
      }
    }
  }
};

const reviews = {
  reviewId: {
    author: {
      id: "userrandomid again",
      d_name: " Mark Bence Kiss",
      image: " valami random url",
      email: "valami@email.com",
      created_at: "2020 random dato"
    },
    recipeId: "randomRecipeId",
    content: "commenteltem ide valamit asd...",
    created_at: "2020 dec 12",
    likes: 10
  }
};

const users = {
  userRandomid: {
    id: "userrandomid again",
    d_name: " Mark Bence Kiss",
    image: " valami random url",
    email: "valami@email.com",
    created_at: "2020 random dato",

    favorite_recipes: {
      randomRecipeId: {
        name: "kenyer",
        portionSize: 4,
        likes: 200,
        description: "It is a tasty recipe of a bread pit!",
        notes: " more bread",
        category: "Breakfast",
        ingredients: [
          {
            name: "mag",
            amount: "1",
            mesurment: "kg"
          },
          {
            name: "valami",
            amount: "1",
            mesurment: "cup"
          }
        ]
      }
    }
  }
};
