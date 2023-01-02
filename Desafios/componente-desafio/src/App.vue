<template>
  <v-app>
    <Navigation />

    <Navbar />

    <Carousel />

    <Footer />
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Navigation from './components/Navigation.vue'
import Carousel from './components/Carousel.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Navigation,
    Navbar,
    Carousel,
    Footer
  }
}
</script>