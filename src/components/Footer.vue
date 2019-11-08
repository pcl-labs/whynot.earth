<template>
  <footer>
    <v-container >
      <v-layout row justify-center align-center wrap>
        <v-flex xs12 sm3 md3 lg3>
          <img src="../assets/whynotearth.png" class="meredith"/>
        </v-flex>
        <v-flex xs12 sm3 md3 lg3>
          <ul>
            <li>Connect</li>
            <li><a href="#">Discord</a></li>
            <li><a href="#">Twitch</a></li>
            <li><a href="#">Github</a></li>
          </ul>
        </v-flex>
        <v-flex xs12 sm3 md3 lg3>
          <ul>
            <li>Learn</li>
            <li><a href="#">Project</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </v-flex>
        <v-flex xs12 sm3 md3 lg3>
          <ul>
            <li>Support</li>
            <li><a href="#">Donate</a></li>
            <li><a href="#">Contribute</a></li>
            <li><a href="#">Partner</a></li>
          </ul>
        </v-flex>
      </v-layout>
    </v-container>
  </footer>
</template>

<script>
export default {
}
</script>

<style>
  a {
   color: inherit;
   text-decoration: none;
  }

  .meredith {
    height: 120px;
  }

  footer {
    background-color: #191C21;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    color: #D8DADE;
    margin-bottom: 10px;
  }

  li:first-child {
    font-family: 'Bitter-Bold';
  }

  li:not(:first-child) {
    opacity: 0.8;
    
  }
  
  @media (max-width: 600px) {

    li {
      text-align: center;
    }

    li:first-child {
      font-size: 20px;
    }

    .meredith {
      height: 60px;
    }

    img {
      display: block;
      margin: 0 auto;
      margin-bottom: 16px;
    }

  }
</style>
