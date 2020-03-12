<template>
  <v-dialog v-model="dialog" max-width="600px">
    <v-card>
      <v-card-title>{{title}}</v-card-title>
      <v-divider/>
      <v-card-text class="py-3 card-content">
        <v-timeline dense clipped>
          <v-timeline-item
            fill-dot
            class="white--text mb-12"
            color="orange"
            large
          >
            <template v-slot:icon>
              <span>JL</span>
            </template>
            <v-text-field
              v-model="input"
              hide-details
              flat
              label="Leave a comment..."
              solo
              @keydown.enter="comment"
            >
              <template v-slot:append>
                <v-btn
                  class="mx-0"
                  depressed
                  @click="comment"
                >
                  Post
                </v-btn>
              </template>
            </v-text-field>
          </v-timeline-item>

          <v-slide-x-transition
            group
          >
            <v-timeline-item
              v-for="event in timeline"
              :key="event.id"
              class="mb-4"
              color="pink"
              small
            >
              <v-row justify="space-between">
                <v-col cols="7" v-text="event.text"></v-col>
                <v-col class="text-right" cols="5" v-text="event.time"></v-col>
              </v-row>
            </v-timeline-item>
          </v-slide-x-transition>

          <v-timeline-item
            class="mb-6"
            hide-dot
          >
            <span>TODAY</span>
          </v-timeline-item>

          <v-timeline-item
            class="mb-4"
            color="grey"
            icon-color="grey lighten-2"
            small
          >
            <v-row justify="space-between">
              <v-col cols="7">This order was archived.</v-col>
              <v-col class="text-right" cols="5">15:26 EDT</v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item
            class="mb-4"
            small
          >
            <v-row justify="space-between">
              <v-col cols="7">
                <v-chip
                  class="white--text ml-0"
                  color="purple"
                  label
                  small
                >
                  APP
                </v-chip>
                Digital Downloads fulfilled 1 item.
              </v-col>
              <v-col class="text-right" cols="5">15:25 EDT</v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item
            class="mb-4"
            color="grey"
            small
          >
            <v-row justify="space-between">
              <v-col cols="7">
                Order confirmation email was sent to John Leider (john@vuetifyjs.com).
              </v-col>
              <v-col class="text-right" cols="5">15:25 EDT</v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item
            class="mb-4"
            hide-dot
          >
            <v-btn
              class="mx-0"
              color="white"
            >
              Resend Email
            </v-btn>
          </v-timeline-item>

          <v-timeline-item
            class="mb-4"
            color="grey"
            small
          >
            <v-row justify="space-between">
              <v-col cols="7">
                A $15.00 USD payment was processed on PayPal Express Checkout
              </v-col>
              <v-col class="text-right" cols="5">15:25 EDT</v-col>
            </v-row>
          </v-timeline-item>

          <v-timeline-item
            color="grey"
            small
          >
            <v-row justify="space-between">
              <v-col cols="7">
                John Leider placed this order on Online Store (checkout #1937432132572).
              </v-col>
              <v-col class="text-right" cols="5">15:25 EDT</v-col>
            </v-row>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
      <v-divider/>
      <v-card-actions>
        <v-btn color="blue darken-1" class="ml-auto" text @click="dialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import bus, { types } from '@/utils/bus'

  @Component
export default class Event extends Vue {
    private dialog = true
    private title = ''

    private items = ['Foo', 'Bar', 'Fizz', 'Buzz']
    // form
    private description = ''
    private category = ''
    private color = ''
    private icon = ''

    private created () {
      bus.$on(types.openAddEventListModal, this.handleOpen)
    }

    private handleOpen () {
      this.dialog = true
    }

    private handleSelectIcon (item: string) {
      this.icon = item
    }
}
</script>

<style lang="scss" scoped>

</style>
