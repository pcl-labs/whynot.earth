<template>
  <v-card :min-height="minHeight" dark color="transparent" flat style="margin-top:20px; margin-bottom:20px;">
    <v-img :src="imgUrl" style="height:234px; background:#D8DADE;"></v-img>
    <v-card-text style="margin:0; padding:0; margin-top:20px;" v-if="title">
      <h3>{{title}}</h3>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props:{
    imgUrl:'',
    title:'',
    minHeight: '',
  },
  data(){
    return{
    }
  }
}
</script>

<style>
h3{
  font-size: 28px;
  color: #FFFFFF;
}
</style>
