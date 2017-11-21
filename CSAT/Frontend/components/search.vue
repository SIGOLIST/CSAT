<template>
    <section>

        <p class="content"><b>Selected:</b> {{ selected }}</p>
        <b-field label="Find a movie">
            <b-autocomplete
                v-model="name"
                :data="data"
                placeholder="e.g. Fight Club"
                field="title"
                :loading="isFetching"
                @input="getAsyncData"
                @select="option => selected = option">
            </b-autocomplete>
        </b-field>
    </section>
</template>

<script>
  import debounce from 'lodash/debounce'
  export default {
    data() {
      return {
        data: [],
        name: '',
        isFetching: false
      }
    },
    created() {
    },
    methods: {
      print(a) {
        console.log(a)
      },
      getAsyncData: debounce(function () {
        this.data = []
        this.isFetching = true
        this.$axios.$get(`https://api.themoviedb.org/3/search/movie?api_key=bb6f51bef07465653c3e553d6ab161a8&query=${this.name}`)
          .then((data) => {
            data.results.forEach((item) => this.data.push(item))
            this.isFetching = false
          }, response => {
            this.isFetching = false
          })
      }, 500)
    }
  }
</script>
