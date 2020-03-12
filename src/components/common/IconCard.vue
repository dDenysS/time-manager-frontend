<template>
  <v-card class="fill-height d-flex flex-column justify-center align-center">
    <v-card-title v-if="title">{{ title }}</v-card-title>
      <v-btn @click="click" class="mx-2 mb-2 button grey lighten-2 white" fab depressed>
        <v-icon class="button-icon">{{ icon }}</v-icon>
      </v-btn>
  </v-card>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

const Props = Vue.extend({
  props: {
    icon: {
      required: true,
      type: String
    },
    title: {
      type: String,
      default: () => ''
    },
    click: {
      type: Function
    }
  }
})

  @Component
export default class IconCard extends Props {
}
</script>

<style lang="scss" scoped>
  .button {
    width: auto;
    height: auto;
    display: block;
  }

  .button-icon {
    font-size: 200px !important;
    width: 300px !important;
    height: 300px !important;
    display: block;
    padding: 40px;
  }
</style>
