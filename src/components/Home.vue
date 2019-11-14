<template>
  <div>
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
        <ResponsiveSlider :data="landing" label="Our Projects"></ResponsiveSlider>
        <ResponsiveSlider :data="career" label="Career"></ResponsiveSlider>
        <ResponsiveSlider :data="blog" label="Blog"></ResponsiveSlider>
      </v-container>
    </div>
  </div>
</template>

<script>
const ResponsiveSlider = () => import ('@/components/ResponsiveSlider.vue')

export default {
  components: {
    ResponsiveSlider
  },
  data(){
    return {
      landing: {},
      career: {},
      blog: {}
    }
  },
  mounted(){
    this.$http.get('https://stagingapi.whynot.earth/api/v0/pages/slug/whynotearth/categories/by-name/landing')
      .then(landingResult => {
        this.landing = landingResult.data
        return this.$http.get('https://stagingapi.whynot.earth/api/v0/pages/slug/whynotearth/categories/by-name/career')
      })
      .then(careerResult => {
        this.career = careerResult.data
        return this.$http.get('https://stagingapi.whynot.earth/api/v0/pages/slug/whynotearth/categories/by-name/blog')
      })
      .then(blogResults => {
        this.blog = blogResults.data
      })


    // Parallax
    window.addEventListener('scroll', () => {
      let parent =  document.getElementById('parallax-container');
      let children = document.getElementsByClassName('layer');
      let meredith = document.getElementById('meredith');
      meredith.style.transform = 'translateY(-' + (window.pageYOffset*0.3) + 'px)';
      for (let i = 0; i < children.length; i++) {
        children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.length) + 'px)';
      }
    }, false)
  }
}
</script>

<style scoped>
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
