<template>
    <v-footer>
        <v-btn to="http://google.com" class="ma-2" tile outlined  color="purple">
            <v-icon left>fab fa-github</v-icon>
            Edit
        </v-btn>
    </v-footer>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

    @Component
export default class Footer extends Vue {
}
</script>
