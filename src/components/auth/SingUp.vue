<template>
  <v-form
    ref="form"
    v-model="valid">

    <v-text-field
      v-model="email"
      :rules="rules.email"
      label="E-mail"
      single-line
      solo
      prepend-inner-icon="far fa-envelope"
      required/>

    <v-text-field
      v-model="password"
      label="Password"
      single-line
      solo
      prepend-inner-icon="fa fa-key"
      required/>

    <v-text-field
      v-model="confirmPassword"
      label="Confirm password"
      single-line
      solo
      prepend-inner-icon="fa fa-key"
      required/>

    <v-checkbox
      v-model="agreePolicy"
      :rules="rules.agreePolicy"
      label="Do you agree?"
      prepend-inner-icon="fa fa-key"
      required/>

    <v-btn color="error"
           class="ml-auto"
           @click="reset">
      Reset Form
    </v-btn>
    <v-btn :disabled="!valid"
           color="success"
           @click="submit">
      Submit
    </v-btn>

  </v-form>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

  @Component
export default class Header extends Vue {
    private valid = true

    // form
    private email = ''
    private password = ''
    private confirmPassword = ''
    private agreePolicy = ''

    // rules
    private rules = {
      email: [
        (v: string) => !!v || 'E-mail is required',
        (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      password: [
        (v: string) => !!v || 'E-mail is required',
        (v: string) => v.trim().length > 5 || 'Minimum password length must be 5 characters',
        (v: string) => v.trim().length < 20 || 'Maximum password length must be 20 characters'
      ],
      confirmPassword: [
        (v: string) => !!v || 'E-mail is required',
        (v: string) => v.trim() === this.password.trim() || 'Maximum password length must be 20 characters'
      ],
      agreePolicy: [
        (v: string) => !!v || 'You must agree to continue!'
      ]
    }

    private submit () {
      console.log('submit')
    }
}
</script>
