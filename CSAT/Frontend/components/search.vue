<template>
    <section>
        <b-field>
            <b-autocomplete
                v-model="name"
                :data="items"
                placeholder="지역 검색"
                field="title"
                :loading="isFetching"
                @input="getAsyncData"
                >

                <template scope="props">
                    <div class="media">
                        <div class="media-left">
                            <img width="32" :src="`https://image.tmdb.org/t/p/w500/${props.option.poster_path}`">
                        </div>
                        <div class="media-content">
                            {{ props.option.title }}
                            <br>
                            <small>
                                Released at {{ props.option.release_date }},
                                rated <b>{{ props.option.vote_average }}</b>
                            </small>
                        </div>
                    </div>
                </template>
            </b-autocomplete>
        </b-field>
    </section>
</template>

<script>
  import debounce from 'lodash/debounce'
  export default {
    data() {
      return {
        items: [],
        name: '',
        isFetching: false
      }
    },
    created() {
    },
    methods: {
      getAsyncData: debounce(function () {
        this.items = []
        this.isFetching = true
        this.$axios.$get(`https://api.themoviedb.org/3/search/movie?api_key=bb6f51bef07465653c3e553d6ab161a8&query=${this.name}`)
          .then((data) => {
            data.results.forEach((item) => this.items.push(item))
            this.isFetching = false
          }, response => {
            this.isFetching = false
          })
      }, 500)
    }
  }
</script>
