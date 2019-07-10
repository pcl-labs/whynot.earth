<template>
  <div id="parallax-container">
    <div id="layer" style="background-image: url(https://res.cloudinary.com/whynotearth/image/upload/v1562682608/1b_ddwcio.png);"></div>
    <div id="layer1" style="background-image: url(https://res.cloudinary.com/whynotearth/image/upload/v1562651585/meredith_smmoxu.png);"></div>
    <div id="layer" style="background-image: url(https://res.cloudinary.com/whynotearth/image/upload/v1562682609/2_ppqnz4.png);"></div>
    <div id="layer" style="background-image: url(https://res.cloudinary.com/whynotearth/image/upload/v1562682608/3_w15w82.png);"></div>
    <div id="layer" style="background-image: url(https://res.cloudinary.com/whynotearth/image/upload/v1562682608/4_phriye.png);"></div>
    <div id="layer" style="background-image: url(https://res.cloudinary.com/whynotearth/image/upload/v1562682609/5_yk3ubw.png);"></div>
    <div id="layer" style="background-image: url(https://res.cloudinary.com/whynotearth/image/upload/v1562682609/6_xbypzd.png);"></div>
    <div id="layer" style="background-image: url(https://res.cloudinary.com/whynotearth/image/upload/v1562682609/7_oljhke.png);"></div>
  </div>
</template>

<script>
export default {
  mounted(){
    window.addEventListener('scroll', () => {
      let parent =  document.getElementById('parallax-container');
      let layer1 = document.getElementById('layer1');
      // let layer2 = document.getElementById('layer2');
      layer1.style.transform = 'translateY(-' + (window.pageYOffset*1.5) + 'px)';
      // layer2.style.transform = 'translateY(-' + (window.pageYOffset * 0.5) + 'px)';

    }, false)
  }
}
</script>

<style>
body {
  margin: 0;
}
html {
  scroll-behavior: smooth;
}

#parallax-container {
  height: 100vh;
  background-size: contain;
}

#layer1 {
  position: relative;
  background-position: center !important;
  height: 100%;
  width: 100%;
  top: 70px;
}
/* 
#layer2 {
  position: absolute;
  background-position: center !important;
  height: 100%;
  width: 100%;
  bottom: 0;
} */

#layer{
  top: 0;
  position: absolute;
  background-position: center !important;
  height: 100vh;
  width: 100%;
  background-size: cover;
}
/* 
#content {
  position: relative;
  background-color: #030f33;
  color: #ffffff;
  padding: 100px;
}

#content h1 {
  font-size: 100px;
  text-align: center;
}

#content p {
  font-size: 18px;
} */
</style>
