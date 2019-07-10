<template>
  <v-container-fluid>
    <Parallax></Parallax>
    <v-container>
      <v-layout row wrap justify-space-between>
        <Card
          v-for="integration in integrations" v-bind:key="integration.id"
          :title="integration.title"
          :imgUrl="integration.imgUrl"
        >
        </Card>
      </v-layout>
    </v-container>
  </v-container-fluid>
</template>

<script>
const Parallax = () => import ('@/components/Parallax.vue')
const Card = () => import ('@/components/Card.vue')

export default {
  components: {
    Parallax,
    Card
  },
  data(){
    return{
      integrations:[
        {
          id:1,
          title:'Google Ads',
          imgUrl:''
        },
        {
          id:2,
          title:'Google Ads',
          imgUrl:''
        },
        {
          id:3,
          title:'Google Ads',
          imgUrl:''
        },
        {
          id:4,
          title:'Google Ads',
          imgUrl:''
        }
      ]
    }
  }
}
</script>

<style>
.container{
  margin: 0;
  width: 1279px;
}
html {
  scroll-behavior: smooth;
}
</style>
