<template>
  <div class="form">
    <b-field label="title">
      <b-input value="행사 제목" v-model="data.title"></b-input>
    </b-field>
    <b-field label="item">
      <b-input value="상품" v-model="data.item"></b-input>
    </b-field>
    <b-field label="price">
      <b-input value="가격" v-model="data.price" type="number"></b-input>
    </b-field>
    <b-field label="description">
      <b-input value="설명" v-model="data.description"></b-input>
    </b-field>
    <b-field label="시">
      <b-select placeholder="서울특별시" v-model="data.city">
        <option v-for="city in cities" :value="city.name" :key="city.id">
          {{ city.name }}
        </option>
      </b-select>
    </b-field>
    <b-field label="구">
      <b-select placeholder="강북구" v-model="data.district">
        <option v-for="district in districts" :value="district.name" :key="district.id">
          {{ district.name }}
        </option>
      </b-select>
    </b-field>
    <b-field label="url">
      <b-input value="주소" v-model="data.url"></b-input>
    </b-field>
    <b-field label="시작일">
      <b-datepicker placeholder="시작일" icon="calendar-today" v-model="data.date.start" :readonly="false">
      </b-datepicker>
    </b-field>
    <b-field label="종료일">
      <b-datepicker placeholder="종료일" icon="calendar-today" v-model="data.date.end" :readonly="false">
      </b-datepicker>
    </b-field>
    <button class="button is-primary" @click="addEvent">등록</button> {{data}}
  </div>
</template>

<script>
  import sigungu from '~/static/sigungu.json'
  export default {
    layout: 'manage',
    data() {
      return {
        data: {
          title: "",
          item: "",
          price: 0,
          description: "",
          location: {
            city: "서울특별시",
            district: "강북구",
          },
          url: "",
          date: {
            start: 0,
            end: 0
          }
        },
        cities: [],
      }
    },
    created() {
      sigungu.forEach((city, i) => {
        this.cities.push({
          "id": i,
          "name": city.name
        })
      })
    },
    computed: {
      districts() {
        if (this.data.location.city == "") {
          return []
        } else {
          const index = sigungu.findIndex(x => x.name === this.data.location.city)
          return sigungu[index].gugun.map((district, i) => {
            return {
              "id": i,
              "name": district.name
            }
          })
        }
      }
    },
    methods: {
      addEvent() {
  
      }
    }
  }
</script>

<style scoped>
  
</style>
