<template>
  <section class="article-list">
    <v-layout row wrap>
      <v-flex xs6 sm4 md3 class="article-list--column" v-for="(item, index) in items" :key="index">
        <article-list-item
          class="ma-1"
          :href="item.href"
          :preview-transformations="previewTransformations"
          :poster-transformations="posterTransformations"
          :image-box-class="imageBoxClass"
          :title-class="titleClass"
          :item="item"
        />
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
import Vue from "vue";
import ArticleListItem from "./BaseArticlesListItem.vue";

export default Vue.extend({
  name: "base-articles-list",
  components: { ArticleListItem },
  props: {
    items: {
      type: Array,
      default: () => []
    },
    itemsPerRow: {
      type: Number,
      default: 4
    },
    showPlaceholder: {
      type: Boolean,
      default: false
    },
    previewLinesOfReadMore: {
      type: Number
    },
    imageBoxClass: {
      type: String
    },
    titleClass: {
      type: String
    },
    previewTransformations: {
      type: String,
      required: true
    },
    posterTransformations: {
      type: String,
      required: true
    }
  }
});
</script>
