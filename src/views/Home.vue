<template>
  <v-container class="mini-container">
    <v-row>
      <v-col>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn :color="`${modeCard==='detail'?'success':'grey'}`" v-on="on" @click="modeCard='detail'">
              <v-icon>fas fa-th</v-icon>
            </v-btn>
          </template>
          <span>Detail block view</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn class="ml-3" :color="`${modeCard==='big'?'success':'grey'}`" v-on="on" @click="modeCard='big'">
              <v-icon>fas fa-th-large</v-icon>
            </v-btn>
          </template>
          <span>Big icon view</span>
        </v-tooltip>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="card in cards" :cols="6" :key="card">
        <card v-if="modeCard==='detail'"/>
        <icon-card title="ADSF sdf sdf sdf s" icon="far fa-plus-square" v-else/>
      </v-col>
      <v-col :cols="6">
        <icon-card title="Add category" icon="far fa-plus-square" :click="openAddModalCategory"/>
      </v-col>
    </v-row>
    <v-btn
      @click="addEvent"
      color="pink"
      class="button-add-event"
      dark
      large
      fixed
      bottom
      right
      fab>
      <v-icon>fas fa-plus</v-icon>
    </v-btn>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import Card from '@/components/common/Card.vue'
import IconCard from '@/components/common/IconCard.vue'

import bus, { types } from '@/utils/bus'

@Component({
  components: { IconCard, Card }
})
export default class Home extends Vue {
    private cards = [1, 2, 3]
    private modeCard = 'big'

    private openAddModalCategory () {
      bus.$emit(types.openAddCategoryModal)
    }

    private addEvent () {
      bus.$emit(types.openAddEventModal)
    }
}
</script>

<style lang="scss" scoped>
  .mini-container {
    max-width: 1000px;
  }

  .button-add-event {
    bottom: 75px;
    right: 75px;
  }
</style>
