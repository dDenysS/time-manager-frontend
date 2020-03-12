<template>
  <v-card>
    <v-container>
      <h2 class="title text-center">dsfds fds fas fas fa sdffffffffffsddddddddddddddddddddddddddddddddd</h2>
      <v-row justify="space-between">
        <v-col :cols="11" class="px-0">
          <v-btn v-for="item in [1,2,3,4,5,6]" :key="item" class="mx-1 mb-2" fab scoped large color="purple">
            <v-icon color="white">fas fa-address-card</v-icon>
          </v-btn>
        </v-col>

        <v-col
          :cols="1"
          class="text-center pl-0">
          <v-row
            class="flex-column ma-0 fill-height"
            justify="center">
            <v-col class="px-0">
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            </v-col>

            <v-col class="px-0">
              <v-btn icon>
                <v-icon>fas fa-trash-alt</v-icon>
              </v-btn>
            </v-col>
            <v-col class="px-0">
              <v-btn icon>
                <v-icon>fas fa-trash-alt</v-icon>
              </v-btn>
            </v-col>
            <v-col class="px-0">
              <v-btn icon>
                <v-icon>fas fa-trash-alt</v-icon>
              </v-btn>
            </v-col>
            <v-col class="px-0">
              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Card extends Vue {
}
</script>
