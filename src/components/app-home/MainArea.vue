<template>
  <div>
    <discount-code></discount-code>
    <your-favorites></your-favorites>
    <our-suggestions></our-suggestions>
  </div>
</template>

<script>
import DiscountCode from "./DiscountCode";
import YourFavorites from "./YourFavorites";
import OurSuggestions from "./OurSuggestions";

export default {
  components: {
    DiscountCode,
    YourFavorites,
    OurSuggestions
  }
};
</script>
