<template>
  <v-content class="pt-0">
    <div>
      <div class="full-width-banner"></div>
      <div class="custom-container mx-auto">
      <v-container class="white--text is-small">
        <v-layout>
          <article>
            <h1 class="headline mb-2">.net Programmer</h1>
            <p class="subtitle-1 mb-4">Onsite or Remote</p>
            <div
              class="body-1 grey--text text--lighten-1 mb-4 font-sans-serif"
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad necessitatibus harum, illo molestiae temporibus alias officia dolore rerum suscipit deserunt mollitia ratione, minima veniam! Quod recusandae autem adipisci perferendis architecto distinctio debitis nobis illum temporibus dolore provident odio velit iure harum culpa esse, natus sint eaque perspiciatis, ad repellat alias dolores. Fuga excepturi facere voluptates dolores id iusto rem sunt ex dolore? Nostrum animi reiciendis cumque hic? Veniam enim recusandae aliquam obcaecati quos doloremque et officiis deserunt dolor. Harum illum veniam optio, quasi eligendi rerum autem corporis velit at quos iusto voluptate! Accusantium quos, reprehenderit doloremque corporis ipsum commodi quod!</div>

            <div class="typeform-wrapper mb-4">
              <div class="typeform-widget" data-url="https://paulchrisluke.typeform.com/to/TNDX88" data-transparency="50" style="width: 100%; height: 500px;"></div> <script type="application/javascript"> (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })() </script> <div style="font-family: Sans-Serif;font-size: 12px;color: #999;opacity: 0.5; padding-top: 5px;"> powered by <a href="https://admin.typeform.com/signup?utm_campaign=TNDX88&utm_source=typeform.com-14889424-Free&utm_medium=typeform&utm_content=typeform-embedded-poweredbytypeform&utm_term=EN" style="color: #999" target="_blank">Typeform</a> </div>
            </div>

            <aside>
              <h2 class="text-xs-center title mb-3">Explore Career</h2>

              <articles-list
                :items="articles"
                preview-transformations="q_auto:low,e_preview:duration_8,w_212,c_fill,ar_1:1,ac_none"
                poster-transformations="q_auto:best,w_212,h_212,c_fill,g_auto"
              ></articles-list>
            </aside>
          </article>
        </v-layout>
      </v-container>
      </div>
    </div>
  </v-content>
</template>

<script>
import Vue from "vue";
import ArticlesList from "./BaseArticlesList.vue";
export default Vue.extend({
  data() {
    return {
      articles: [
        {
          image: "http://placehold.it/200x200",
          href: "/go-to-far-away",
          ctaText: "Video Editor",
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero enim porro iste facilis, deleniti earum."
        },
        {
          image: "http://placehold.it/200x200",
          href: "/go-to-far-away",
          ctaText: "Item 2",
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero enim porro iste facilis, deleniti earum."
        },
        {
          image: "http://placehold.it/200x200",
          href: "/go-to-far-away",
          ctaText: "Item 3",
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero enim porro iste facilis, deleniti earum."
        },
        {
          image: "http://placehold.it/200x200",
          href: "/go-to-far-away",
          ctaText: "Item 4",
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero enim porro iste facilis, deleniti earum."
        },
      ]
    };
  },
  components: { ArticlesList }
});
</script>

<style scoped>
.full-width-banner {
  height: 400px;
  background: #aaa;
}
.custom-container {
  max-width: 1200px;
}
</style>
