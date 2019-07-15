<template>
  <v-container-fluid>
    <div id="parallax-container">
      <div class="layer" style="background: url(https://res.cloudinary.com/whynotearth/image/upload/c_scale,q_auto:low,f_auto/v1562682608/1b_ddwcio.png);"></div>
      <div id="meredith" style="background: url(https://res.cloudinary.com/whynotearth/image/upload/c_scale,q_auto:low,f_auto/v1562682607/meredith_fkpe6f.png); background-repeat: no-repeat; top:90px;">
        <v-layout justify-center>
          <v-flex xs12 sm6 md6 text-xs-center class="headerText">
            <h1>Meet Meredith...</h1>
            <h2>I love cuddles lick the plastic bag, paw your face to wake you up in the morning.</h2>
          </v-flex>
        </v-layout>
      </div>
      <div class="layer" style="background: url(https://res.cloudinary.com/whynotearth/image/upload/c_scale,q_auto:low,f_auto/v1562682609/2_ppqnz4.png);"></div>
      <div class="layer" style="background: url(https://res.cloudinary.com/whynotearth/image/upload/c_scale,q_auto:low,f_auto/v1562682608/3_w15w82.png);"></div>
      <div class="layer" style="background: url(https://res.cloudinary.com/whynotearth/image/upload/c_scale,q_auto:low,f_auto/v1562682608/4_phriye.png);"></div>
      <div class="layer" style="background: url(https://res.cloudinary.com/whynotearth/image/upload/c_scale,q_auto:low,f_auto/v1562682609/5_yk3ubw.png);"></div>
      <div class="layer" style="background: url(https://res.cloudinary.com/whynotearth/image/upload/c_scale,q_auto:low,f_auto/v1562682609/6_xbypzd.png);"></div>
      <div class="layer" style="background: url(https://res.cloudinary.com/whynotearth/image/upload/c_scale,q_auto:low,f_auto/v1562682609/7_oljhke.png);"></div>
    </div>
    <div id="content">
      <v-container grid-list-md>
        <v-layout row wrap justify-space-between justify-center>
          <v-flex xs12 sm6 md3 v-for="meredith in merediths" v-bind:key="meredith.id">
            <v-card height="631px">
              <v-img></v-img>
            </v-card>
          </v-flex>
        </v-layout>
        <h2 class="listTitle">Integrations</h2>
        <v-layout row wrap justify-space-between justify-center>
          <v-flex xs12 sm6 md3 v-for="integration in integrations" v-bind:key="integration.id">
            <Card
              :title="integration.title"
              :imgUrl="integration.imgUrl"
              minHeight="350px"
            >
            </Card>
          </v-flex>
        </v-layout>
        <h2 class="listTitle">Clients</h2>
        <v-layout row wrap justify-space-between justify-center>
          <v-flex xs12 sm6 md3 v-for="client in clients" v-bind:key="client.id">
            <Card
              :title="client.title"
              :imgUrl="client.imgUrl"
              minHeight="350px"
            >
            </Card>
          </v-flex>
        </v-layout>
        <h2 class="listTitle">Blog</h2>
        <v-layout row wrap justify-space-between justify-center>
          <v-flex xs12 sm6 md3 v-for="blog in blogs" v-bind:key="blog.id">
            <Card
              :title="blog.title"
              :imgUrl="blog.imgUrl"
              minHeight="350px"
            >
            </Card>
          </v-flex>
        </v-layout>
        <h2 class="listTitle">Careers</h2>
        <v-layout row wrap justify-space-between justify-center>
          <v-flex xs12 sm6 md3 v-for="career in careers" v-bind:key="career.id">
            <Card
              :title="career.title"
              :imgUrl="career.imgUrl"
              minHeight="350px"
            >
            </Card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </v-container-fluid>
</template>

<script>
const Card = () => import ('@/components/Card.vue')

export default {
  components: {
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
          title:'Facebook',
          imgUrl:''
        },
        {
          id:3,
          title:'E-commerce',
          imgUrl:''
        },
        {
          id:4,
          title:'Instagram',
          imgUrl:''
        }
      ],
      blogs:[
        {
          id:1,
          title:'Building the tech future of Cambodia in a national park — Kirirom',
          imgUrl:''
        },
        {
          id:2,
          title:'Making our first $1000 in Cambodia t-shirt merch printing business',
          imgUrl:''
        },
        {
          id:3,
          title:'Google can see the future. Yes, literally.',
          imgUrl:''
        },
        {
          id:4,
          title:'Collecting data for artificial intelligence, privacy, and the future.',
          imgUrl:''
        }
      ],
      clients:[
        {
          id:1,
          title:'Bill Bensley',
          imgUrl:''
        },
        {
          id:2,
          title:'Shinta Mani Wild',
          imgUrl:''
        },
        {
          id:3,
          title:'Fauna In Focus',
          imgUrl:''
        },
        {
          id:4,
          title:'Rehash Trash',
          imgUrl:''
        }
      ],
      careers:[
        {
          id:1,
          title:'Video Editor',
          imgUrl:''
        },
        {
          id:2,
          title:'.net Programmer',
          imgUrl:''
        },
        {
          id:3,
          title:'Python Programmer',
          imgUrl:''
        },
        {
          id:4,
          title:'Copywriter',
          imgUrl:''
        }
      ],
      merediths:[
        {
          id:1,
          imgUrl:''
        },
        {
          id:2,         
          imgUrl:''
        },
        {
          id:3,
          imgUrl:''
        },
        {
          id:4,
          imgUrl:''
        }
      ]
    }
  },
  mounted(){
    window.addEventListener('scroll', () => {
      let parent =  document.getElementById('parallax-container');
      let children = document.getElementsByClassName('layer');
      let meredith = document.getElementById('meredith');
      meredith.style.transform = 'translateY(-' + (window.pageYOffset*0.3) + 'px)';
      for(let i = 0; i < children.length; i++) {
        children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.length) + 'px)';
      }
    }, false)
  }
}
</script>

<style>
.listTitle{
  font-size: 32px;
  color: #D8DADE;
  margin-bottom: 20px;
  margin-top: 20px; 
}
@media only screen and (max-width: 600px) {
  .container{
    max-width: 342px;
  }
}
@media only screen and (min-width: 768px) {
  .container{
    max-width: 950px;
  }
}
@media only screen and (min-width: 1024px) {
  .container{
    max-width: 1279px;
  }
}
html {
  scroll-behavior: smooth;
}
::-webkit-scrollbar { 
    display: none; 
}
body {
  margin: 0;
}
#parallax-container {
  height: 930px;
  display: block;
}
#parallax-container div {
  position: fixed;
  top: 0;
  background-position: center !important;
  transform: translateY(0px);
  height: 1000px;
  width: 100%;
}
#content {
  position: relative;
  background-color: #121416;
  color: #ffffff;
  width: 100%;
}

.headerText{
  top: 137px;
  padding:30px;
  width: 100%;
  height: 100%;
}

.headerText h1{
  font-size: 48px;
  color: #ffffff;
}
.headerText h2{
  color: #FFFFFF;
  font-size: 32px;
}
</style>
