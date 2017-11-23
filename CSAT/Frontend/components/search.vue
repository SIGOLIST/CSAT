<template>
    <section> 
        <b-field class="search_control" type="is-primary">
            <b-autocomplete
                v-model="name"
                :data="items"
                placeholder="지역 검색"
                field="name"
                :loading="isFetching"
                @input="getAsyncData"
                >

                <!-- <template scope="props">
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
                </template> -->
            </b-autocomplete>
        </b-field>
        <button class="button is-primary" @click="goEvents">검색</button>
    </section>
</template>

<script>
  import debounce from 'lodash/debounce'
  import sigungu from '~/static/sigungu.json'
  export default {
    data() {
      return {
        items: [],
        name: '',
        isFetching: false,
        districts: []
      }
    },
    created() {
      sigungu.forEach((city) => {
        city.gugun.forEach((district, i) => {
          this.districts.push(district)
        })
      })
    },
    methods: {
      goEvents() {
        this.$router.push('/events')
      },
      getAsyncData: debounce(function () {
        this.items = []
        this.isFetching = true
          this.items = this.districts.filter((district, i) => {
            if(district.name.toLowerCase().indexOf(this.name.toLowerCase())>=0) {
              return district
            }
          })
          this.isFetching = false
      }, 500)
    }
  }
</script>
<style src="~/assets/search.scss" lang="scss" scoped>

</style>