<template>
  <v-container>
    <v-row justify="center">
      <v-col :md="8" class="mx-auto">
        <v-card>
          <v-row>
            <v-col md6>
              <v-list>
                <v-subheader>Others methods</v-subheader>
                <v-list-item-group color="primary">
                  <v-list-item>
                    <v-list-item-content>
                      <v-btn to="http://google.com" class="ma-2">
                        <v-icon left>fab fa-facebook-square</v-icon>
                        Facebook
                      </v-btn>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-btn to="http://google.com" class="ma-2">
                        <v-icon left>fab fa-instagram</v-icon>
                        Instagram
                      </v-btn>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-content>
                      <v-btn to="http://google.com" class="ma-2">
                        <v-icon left>fab fa-github</v-icon>
                        Github
                      </v-btn>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-col>
            <v-col md6>
              <v-tabs v-model="authTab"
                      :centered="true"
                      icons-and-text>
                <v-tabs-slider/>

                <v-tab href="#sing-in">
                  Sing In
                  <v-icon>fas fa-sign-in-alt</v-icon>
                </v-tab>

                <v-tab href="#sing-up">
                  Sing Up
                  <v-icon>fas fa-user-plus</v-icon>
                </v-tab>
              </v-tabs>

              <v-tabs-items v-model="authTab">
                <v-tab-item value="sing-in">
                  <v-card flat>
                    <SingIn/>
                  </v-card>
                </v-tab-item>
                <v-tab-item value="sing-up">
                  <v-card flat>
                    <SingUp/>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import SingIn from '@/components/auth/SingIn.vue'
import SingUp from '@/components/auth/SingUp.vue'

  @Component({
    components: { SingUp, SingIn }
  })
export default class Auth extends Vue {
    private authTab = '#sing-in'
}
</script>
