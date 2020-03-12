<template>
  <v-app>
    <Header/>
    <v-content>
      <router-view/>
    </v-content>
    <Footer/>
    <container-modal/>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import Footer from '@/components/common/Footer.vue'
import Header from '@/components/common/Header.vue'
import ContainerModal from '@/components/modals/ContainerModal.vue'

@Component({
  components: { ContainerModal, Footer, Header }
})
export default class App extends Vue {
}
</script>
