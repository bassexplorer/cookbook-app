<template>
  <v-footer color="red accent" padless>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link.title"
        color="white"
        text
        exact
        :to="link.link"
        class="my-2"
      >
        {{ link.title }}
      </v-btn>
      <v-col class="py-4 text-center white--text accent" cols="12">
        @{{ new Date().getFullYear() }} — Created by:
        <strong> MMDI0919 Sem3MMD Group 4</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      { title: "Home", link: { name: "AppHome" } },
      { title: "Contact Us", link: { name: "ContactUs" } },
      { title: "Terms and Conditions", link: { name: "TermsAndConditions" } },
      { title: "Privacy Policy", link: { name: "PrivacyPolicy" } }
    ]
  })
};
</script>
