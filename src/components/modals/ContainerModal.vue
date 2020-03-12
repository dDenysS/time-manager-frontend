<template>
  <div>
    <category/>
    <event/>
    <event-list/>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import Category from './Category.vue'
import Event from './Event.vue'
import EventList from './EventList.vue'

@Component({
  components: { Category, Event, EventList }
})
export default class ContainerModal extends Vue {
}
</script>
