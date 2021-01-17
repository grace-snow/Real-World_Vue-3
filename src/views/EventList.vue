<template>
  <div class="events">
    <h1>Events For Good</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'

// Not great to be importing axios into every component that needs it (i.e Single Event will also need this data)
// Better to create a **SERVICE** for this :)
// import axios from 'axios'

// BETTER: use a single axios instance in a service
import EventService from '@/services/EventService.js'

export default {
  name: 'Home',
  components: {
    EventCard
  },
  data() {
    return {
      events: null
    }
  },
  created() {
    // OLD implementation:
    // axios
    //   .get(
    //     'https://my-json-server.typicode.com/grace-snow/Real-World_Vue-3/events'
    //   )
    //   .then(response => {
    //     this.events = response.data
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
    EventService
      .getEvents()
      .then(response => {
        this.events = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
