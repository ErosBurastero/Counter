<template>
  <v-app>
   
    <v-main class="green">
      <v-container >
        <Nuxt />
      </v-container>
    </v-main>
   
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',

   head: {
    titleTemplate: 'counter',
    title: '',
    bodyAttrs: {
      class: 'body'
    },
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  
}
</script>

