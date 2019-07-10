<template>
  <v-flex>
    <v-card height="350px" dark color="transparent" flat>
      <v-img :src="imgUrl" style="height:234px; background:#D8DADE;"></v-img>
      <v-card-text style="margin:0; padding:0; margin-top:20px;">
        <h3>{{title}}</h3>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props:{
    imgUrl:'',
    title:'',
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
