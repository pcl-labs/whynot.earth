<template>
  <div id="parallax-container">
    <div id="layer" style="background-image: url(https://res.cloudinary.com/whynotearth/image/upload/v1562651586/1b_xpy1xd.png);"></div>
    <div id="layer1" style="background-image: url(https://res.cloudinary.com/whynotearth/image/upload/v1562651585/meredith_smmoxu.png);"></div>
    <div id="layer" style="background-image: url(https://res.cloudinary.com/whynotearth/image/upload/v1562651585/2_glqsw6.png);"></div>
    <div id="layer" style="background-image: url(https://res.cloudinary.com/whynotearth/image/upload/v1562651585/3_ltyll1.png);"></div>
    <div id="layer" style="background-image: url(https://res.cloudinary.com/whynotearth/image/upload/v1562651586/4_rendb4.png);"></div>
    <div id="layer" style="background-image: url(https://res.cloudinary.com/whynotearth/image/upload/v1562651584/5b_qnkog2.png);"></div>
  </div>
</template>

<script>
export default {
  mounted(){
    window.addEventListener('scroll', () => {
      let parent =  document.getElementById('parallax-container');
      let layer1 = document.getElementById('layer1');
      // let layer2 = document.getElementById('layer2');
      layer1.style.transform = 'translateY(-' + (window.pageYOffset * 2) + 'px)';
      // layer2.style.transform = 'translateY(-' + (window.pageYOffset * 0.5) + 'px)';

    }, false)
  }
}
</script>

<style>
body {
  margin: 0;
}

#parallax-container {
  height: 100vh;
  background-size: cover;
}

#layer1 {
  position: absolute;
  background-position: center !important;
  height: 100%;
  width: 100%;
  bottom: 0;
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
