<template>
  <main class="page-main">
    <div class="grid">
      <!--      <crumbs :crumbs="crumbs" />-->
    </div>
    <div class="grid grid--container">
      <section class="page-main__about about grid">
        <div class="heading-group heading-group--h1">
          <div class="heading-group__wrap">
            <h1 class="heading heading--h1">
              {{ title }}
              <span class="heading__promo"></span>
            </h1>
            <span class="heading-group__label">Находим лучшие автомобили с 2015 года</span>
          </div>
        </div>
        <div class="about__block grid__col-12 grid text">
          <ContentBlock class="grid__col-8 text__wrap--figure">
            <template #figure>
              <NuxtImg class="text__figure-img lazyload" src="/figures/figure-4@2x.png" format="webp" />
            </template>
            <template #content>
              <h2 class="heading heading--h2">Коротко о главном</h2>
              <p class="text__p">
                В «стенах» нашего автопортала собраны тысячи подержанных
                автомобилей, прошедших техническую и юридическую экспертизу, а также
                новые автомобили и коммерческий транспорт.
              </p>
              <p class="text__p">
                Проверенные временем, опытные автодилеры формируют каталог {{ $settings.dealer_title }},
                объединяя сотни автомобилей на одной площадке. Это удобно
                покупателям — тот случай, когда огромный выбор непременно переходит
                в качественную покупку.
              </p>
            </template>
          </ContentBlock>
          <ContentBlock class="grid__col-4">
            <template #content>
              <h2 class="heading heading--h2">Формирование парка</h2>
              <p class="text__p">
                Что делает нас успешнее и прогрессивнее? Это уникальность и
                продуманность автопарка – у нас собраны наиболее востребованные и
                удачные модели самых разнообразных марок.
              </p>
              <p class="text__p">
                Проверка отдельно взятой модели начинается на этапе ее закупки и
                затем — продолжается во время предпродажной подготовки.
              </p>
            </template>
          </ContentBlock>
          <ContentBlock class="grid__col-7">
            <template #content>
              <h2 class="heading heading--h2">Наши принципы</h2>
              <p class="text__p">
                Каждый день мы стремимся сделать покупку авто безопасной,
                цивилизованной и доступной, что и стало визитной карточкой {{ $settings.dealer_title }}.
              </p>
              <p class="text__p">
                Выгодный автокредит, детальная информация о товаре, гарантия и
                подарки — то, ради чего люди приходят на наш автопортал.
              </p>
              <p class="text__p">
                Мы сформировали культурный б/у-сегмент в сфере автоторговли и не
                собираемся останавливаться на достигнутом.
              </p>
            </template>
          </ContentBlock>
          <ContentBlock class="grid__col-5">
            <template #content>
              <h2 class="heading heading--h2">Почему мы?</h2>
              <p class="text__p">
                Всего несколько кликов — и вы не только выбрали подходящее авто по
                нужным параметрам, но и получили предварительное одобрение
                автокредита и всю информацию об автодилере.
              </p>
              <p class="text__p">
                Мы разработали современный портал, на котором удобно искать
                автомобиль своей мечты с любого устройства.
              </p>
            </template>
          </ContentBlock>
        </div>
      </section>
      <VideoAbout/>
    </div>
  </main>
</template>

<script setup lang="ts">
import VideoAbout from '~/components/Video/About.vue';
import ContentBlock from '~/components/TextContent/ContentBlock.vue';
</script>