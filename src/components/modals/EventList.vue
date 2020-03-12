<template>
  <v-dialog v-model="dialog" max-width="600px">
    <v-card>
      <v-card-title>Add event</v-card-title>
      <v-divider/>
      <v-card-text class="py-3 card-content">
        <v-form
          ref="form"
          v-model="valid">
          <v-text-field
            v-model="name"
            :rules="rules.title"
            label="Title"
            prepend-inner-icon="fas fa-heading"
            required/>
          <v-text-field
            v-model="description"
            :rules="rules.description"
            label="Description"
            prepend-inner-icon="fas fa-heading"
            required/>

          <v-autocomplete
            v-modal="category"
            :rules="rules.required"
            class="mb-2"
            :items="items"
            label="Category">
            <template v-slot:prepend-inner>
              <v-icon>fas fa-list-alt</v-icon>
            </template>
          </v-autocomplete>

          <v-text-field
            :value="color"
            :rules="rules.required"
            disabled
            label="Color"
            required>
            <template v-slot:prepend-inner>
              <v-icon :style="`color:${color}`">fas fa-eye-dropper</v-icon>
            </template>
          </v-text-field>
          <v-color-picker :width="552" v-model="color"/>

          <v-text-field
            class="mt-4"
            v-model="icon"
            :rules="rules.required"
            label="Icon"
            placeholder="Select icon"
            disabled
            prepend-inner-icon="fas fa-file-signature"
            required>
            <template v-slot:prepend-inner>
              <v-icon>{{icon}}</v-icon>
            </template>
          </v-text-field>

          <virtual-list :size="20" :remain="8">
            <div v-for="item of listNameIcons"
                 @click="handleSelectIcon(item)"
                 :key="item">
              <v-btn tile
                     :class="{
                        'list-icon-button pa-2':true,
                        'success': item === icon
                     }"
                     block
                     icon>
                <v-icon class="mr-4">{{ item }}</v-icon>
                {{ item }}
              </v-btn>
            </div>
          </virtual-list>

        </v-form>
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
import VirtualList from 'vue-virtual-scroll-list'

import listNameIcons from '@/assets/listNameIcons'
import bus, { types } from '@/utils/bus'

  @Component({
    components: { VirtualList }
  })
export default class Event extends Vue {
    private dialog = false
    private valid = false
    private listNameIcons = listNameIcons

    private items = ['Foo', 'Bar', 'Fizz', 'Buzz']
    // form
    private title = ''
    private description = ''
    private category = ''
    private color = ''
    private icon = ''

    private rules = {
      required: [
        (v: string) => !!v || 'Field is required'
      ],
      title: [
        (v: string) => !!v || 'Name is required',
        (v: string) => v.trim().length > 1 || 'Minimum password length must be 1 characters',
        (v: string) => v.trim().length < 25 || 'Maximum password length must be 25 characters'
      ],
      description: [
        (v: string) => !!v || 'Description is required',
        (v: string) => v.trim().length > 1 || 'Minimum password length must be 1 characters',
        (v: string) => v.trim().length < 150 || 'Maximum password length must be 150 characters'
      ]
    }

    private created () {
      bus.$on(types.openAddEventModal, this.handleOpen)
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
