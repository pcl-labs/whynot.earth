<template>
  <footer>
    <v-container text-xs-center>
      <v-layout row justify-center align-center wrap>
        <v-flex xs12 sm3 md3 lg3>
          <img src="../assets/whynotearth.png" class="meredith"/>
        </v-flex>
        <v-flex xs12 sm3 md3 lg3>
          <ul>
            <li>Connect</li>
            <li><a href="https://discord.gg/2ZX8FdC">Discord</a></li>
            <li><a href="https://twitch.tv/paulchrisluke">Twitch</a></li>
            <li><a href="https://github.com/whynotearth/whynot.earth/wiki">Github</a></li>
          </ul>
        </v-flex>
        <v-flex xs12 sm3 md3 lg3>
          <ul>
            <li>Support</li>
            <li><a href="https://www.paypal.me/paulchrisluke">Donate</a></li>
          </ul>
        </v-flex>
        <v-flex xs12 sm3 md3 lg3>
          <ul>
            <li>aurelox llc</li>
            <li><a href="#">(423) 451-6118</a></li>
          </ul>
        </v-flex>
      </v-layout>
    </v-container>
  </footer>
</template>

<script>
export default {
    name: 'page-footer'
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
    position: relative;
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
    font-weight: 600;
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
