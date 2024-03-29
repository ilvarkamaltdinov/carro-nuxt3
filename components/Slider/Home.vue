<template>
  <Swiper class="swiper swiper--progress swiper--index"
          :slides-per-view="1"
          slide-active-class="swiper-slide-visible"
          @swiper="onSwiper"
          :modules="[Autoplay, Pagination, Navigation]"
          :loop="true"
          :watch-slides-progress="true"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false
          }"
          :pagination="pagination"
          :space-between="50">
    <SwiperSlide v-for="slide in slides" :key="slide.id">
      <nuxt-link :to="slide.telegram ? '': slide.link" @click="slide.telegram ? navigateToTelegram(): null"
                 :class="{'slider-index__item--black': slide.id === 10}"
                 class="slider-index__item">
        <div class="slider-index__media-wrap">
          <div class="slider-index__media">
            <NuxtImg data-aos="fade-up" class="slider-index__media slider-index__media--element lazyload"
                     :src="`/slider-index/slider-index-${slide.id}/slider-index-element-${slide.id}@2x.webp`"/>
            <NuxtImg data-aos="fade-right" class="slider-index__media slider-index__media--car lazyload"
                     :src="`/slider-index/slider-index-${slide.id}/slider-index-car-${slide.id}@2x.webp`"/>
          </div>
        </div>
        <div class="slider-index__text-wrap">
          <div class="slider-index__circle"
               data-aos="fade-up-left"
               data-aos-duration="750"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true"></div>
          <div class="slider-index__text">
            <div class="slider-index__heading">{{ slide.heading }}</div>
            <div class="slider-index__content">{{ slide.content }}</div>
          </div>
        </div>
      </nuxt-link>
    </SwiperSlide>
    <template #container-start>
      <div
          class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"></div>
    </template>
  </Swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';

type SlideType = {
  id: number
  heading: string
  content: string
  link?: string
  telegram?: boolean
}
const { $settings } = useNuxtApp();

function navigateToTelegram() {
  window.location.href = $settings!.soc_telegram;
}

const pagination = ref({
  el: '.swiper--index .swiper-pagination',
  clickable: true,
  type: 'bullets' as const,
  renderBullet: (index: number, className: string) => {
    return '<span class="' + className + '">' + '<span class="swiper-pagination-bar"></span>' + '<span class="swiper-pagination-progress"></span>' + '</span>';
  },
});

const slides = computed<SlideType[]>(() => {
  return [
    {
      id: 6,
      heading: `Супер-автокредит от ${$settings!.credit_percent} годовых`,
      content: `Скидка ${$settings!.sale_credit}, одобрение по паспорту и В/У, взнос от 0%`,
      link: '/',
    },
    {
      id: 7,
      heading: ' Читайте наш Telegram-канал',
      content: 'Последние поступления, акции, новости',
      telegram: true,
    },
    {
      id: 8,
      heading: 'Обменяй авто по Trade-In',
      content: `Выгода ${$settings!.sale_tradein} ₽, рыночная цена, оформление 30 мин.`,
      link: '/',
    },
    {
      id: 1,
      heading: `Рассрочка ${$settings!.first_installment} от Совкомбанка`,
      content: 'Успей купить авто на выгодных условиях',
      link: '/',
    },
    {
      id: 2,
      heading: 'Автокредит ВТБ',
      content: `Лучшие условия для клиентов ${$settings!.dealer_anchor}`,
      link: '/',
    },
    {
      id: 3,
      heading: 'Рассрочка от Сбера и Сетелем',
      content: `Лучшие условия для клиентов ${$settings!.dealer_anchor}`,
      link: '/',
    },
    {
      id: 4,
      heading: 'Заморозили цены и ставки',
      content: 'Успей купить автомобиль по старой цене',
      link: '/',
    },
    {
      id: 5,
      heading: '2-й комплект резины в подарок',
      content: 'При покупке автомобиля в кредит',
      link: '/',
    }
  ];
});
const onSwiper = () => {
  AOS.init();
};

</script>

