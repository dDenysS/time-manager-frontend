<template>
  <v-dialog v-model="dialog" max-width="600px">
    <v-card>
      <v-card-title class="headline">
        Add group
      </v-card-title>
      <v-card-text>
        <v-form
          ref="form"
          v-model="valid">
          <v-text-field
            v-model="name"
            :rules="rules.name"
            label="Name"
            prepend-inner-icon="fas fa-file-signature"
            required/>

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
      <v-card-actions>
        <v-spacer/>
        <v-btn color="blue darken-1" text @click="closeDialog">Close</v-btn>
        <v-btn color="blue darken-1" text @click="save">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import VirtualList from 'vue-virtual-scroll-list'

import listNameIcons from '@/assets/listNameIcons'
import { IVForm } from '@/types'
import IconCard from '@/components/common/IconCard.vue'
import bus, { types } from '@/utils/bus'

@Component({
  components: { IconCard, VirtualList }
})
export default class Card extends Vue {
    private valid = false
    private dialog = false
    private listNameIcons = listNameIcons
    // form
    private name = ''
    private color = ''
    private icon = ''

    $refs!: {
      form: IVForm;
    }

    // rules
    private rules = {
      required: [
        (v: string) => !!v || 'Field is required'
      ],
      name: [
        (v: string) => !!v || 'Name is required',
        (v: string) => v.trim().length > 1 || 'Minimum password length must be 1 characters',
        (v: string) => v.trim().length < 15 || 'Maximum password length must be 15 characters'
      ]
    }

    private created () {
      bus.$on(types.openAddCategoryModal, this.handleOpen)
    }

    private handleOpen () {
      this.dialog = true
    }

    private handleSelectIcon (icon: string): void {
      this.icon = icon
    }

    closeDialog () {
      this.$refs.form.reset()
      this.dialog = false
    }

    private save () {
      this.closeDialog()
    }
}
</script>

<style lang="scss" scoped>
  .picker {
    width: 100%;
  }

  .list-icon-button {
    justify-content: flex-start;
  }
</style>
