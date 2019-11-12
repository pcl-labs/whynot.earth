<template>
  <article class="article-list-item pb-3">
    <div>
      <div @mouseover="onMouseOver" @mouseleave="onMouseLeave" class="position-relative">
        <!-- like -->
        <!-- issue #139 like button commented out-->
        <a class="like position-absolute">
          <img
            class="like-image d-block w-100"
            src="https://res.cloudinary.com/ddwsbpkzk/image/upload/v1568559589/Shinta%20Mani%20Wild/general/icon-like_bqhyu6.svg"
            alt
          />
        </a>

        <div class="article-list-item--media">
          <!-- image -->
          <div
            key="poster"
            class="article-list-item--media-poster aspect-ratio-box"
            :class="imageBoxClass"
          >
            <div class="aspect-ratio-box-inside">
              <img
                class="article-list-item--image w-100"
                :src="item.image"
                alt=""
              />
            </div>
          </div>

          <transition name="fade" mode="in-out">
            <!-- video preview (item.image is mp4) -->
            <div
              v-if="isHovered && item.image"
              key="video"
              class="aspect-ratio-box article-list-item--media-inside position-absolute"
              :class="imageBoxClass"
            >
              <div class="aspect-ratio-box-inside">
                <video class="article-list-item--video d-block w-100" autoplay muted loop>
                  <source
                    :src="transformCloudinaryUrl(item.image, previewTransformations)"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </transition>
        </div>

        <h3
          class="article-list-item--title font-serif-2 my-2 d-flex align-items-center my-2"
          :class="titleClass"
        >
          <router-link
            :to="href"
            class="article-list-item--title-link text-decoration-none stretched-link"
            v-text="item.ctaText"
          ></router-link>
        </h3>
      </div>
      <p class="description mb-0" v-text="item.content"></p>
    </div>
  </article>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      isHovered: false,
      mouseOverTimer: -1
    };
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    href: {
      type: String,
      default: "#"
    },
    imageBoxClass: {
      type: String,
      default: "ratio-1-1"
    },
    titleClass: {
      type: String,
      default: "h3 font-weight-normal"
    },
    previewTransformations: {
      type: String,
      required: true
    },
    posterTransformations: {
      type: String,
      required: true
    }
  },
  methods: {
    onMouseOver() {
      const delayTime = 700;
      this.mouseOverTimer = setTimeout(() => {
        this.isHovered = true;
      }, delayTime);
    },
    onMouseLeave() {
      this.isHovered = false;
      clearTimeout(this.mouseOverTimer);
    }
  }
});
</script>

<style scoped>
.article-list-item--title {
  line-height: 1;
}
.featured-items .article-list-item {
  padding-bottom: 0 !important;
}

.featured-items .article-list-item--title {
  min-height: 32px;
  font-size: 20px;
}
@media (min-height: 768px) {
  .featured-items .article-list-item--title {
    font-size: 32px;
    height: 48px;
  }
}
.featured-items.is-huge .article-list-item--title {
  line-height: 0.8;
}
.description {
  font-size: 12px;
  line-height: 1.5;
}
.like {
  top: 8px;
  right: 8px;
  z-index: 2;
}
.like-image {
  width: 32px;
  height: 32px;
}
.image-placeholder {
  background: url("https://res.cloudinary.com/ddwsbpkzk/image/upload/w_88/Shinta%20Mani%20Wild/home/Bensley_Collection_Shinta_ManiWild_brandmark_white_k9xfuy.png")
    center no-repeat;
  background-size: 88px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.article-list-item--media-inside {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.article-list-item--title-link {
  color: white;
}
</style>
