<template>
  <v-container-fluid>
    <Parallax></Parallax>
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
</style>
