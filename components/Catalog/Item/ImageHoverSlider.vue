<template>
  <a @click.prevent="$emit('click')" class="catalog__img brazzers-daddy">
    <img :data-src="coverSrc"
         @load="onImgLoad"
         :class="className"
         :src="coverSrc"/>
    <div class="tmb-wrap">
      <div class="tmb-wrap-table"
           v-if="images && images.length"
           @mouseleave="mouseLeave">
        <div v-for="(photo, key) in images"
             :key="key"
             :class="{'active': key === activeThumb }"
             @mouseover="mouseOver(photo.small, key)">
        </div>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import { Offer } from '~/types/graphql';

const props = defineProps<{
  images: Offer['images'];
}>();

// зачем
let className = ref<string>('');
// писать
let limit = ref<number>(10);
// типы
let forceCoverPhoto = ref<string | null>(null);
// для ref?
let activeThumb = ref<number>(0);
const onImgLoad = () => {
  className.value = 'loaded';
};
const mouseOver = (photo: string, key: number) => {
  activeThumb.value = key;
  if (forceCoverPhoto.value !== null) {
    className.value = 'load';
  }
  forceCoverPhoto.value = photo;
};
const mouseLeave = () => {
  activeThumb.value = 0;
  forceCoverPhoto.value = null;
  className.value = 'loaded';
};
// const images = computed(() => {
//   return [
//     '/img/mock/offer-card-img-1.webp',
//     '/img/mock/offer-card-img-2.webp',
//     '/img/mock/offer-card-img-3.webp',
//     '/img/mock/offer-card-img-1.webp',
//     '/img/mock/offer-card-img-2.webp',
//     '/img/mock/offer-card-img-3.webp',
//     '/img/mock/offer-card-img-1.webp',
//     '/img/mock/offer-card-img-2.webp',
//     '/img/mock/offer-card-img-3.webp',
//     '/img/mock/offer-card-img-1.webp',
//     '/img/mock/offer-card-img-2.webp',
//     '/img/mock/offer-card-img-3.webp'
//   ];
//   // return props.offer.images;
// });
const coverSrc = computed(() => {
  //todo fixme not working
  return forceCoverPhoto.value
    ? forceCoverPhoto.value
    : props.images[0].small_webp;
});
</script>