<template>
  <div class="car__info grid__col-6">
    <div class="car__info-tabs">
      <div class="tabs">
        <ul class="tabs__list" id="tabs" role="tablist">
          <li
              role="presentation"
              class="tabs__item"
              :ref="'tab' + index"
              v-for="(tab, index) in tabs"
              :key="index + 1"
              :id="tab.id"
              v-show="tab.showButton"
              :class="{ 'tabs__item--active': activeTab === index + 1 }"
          >
            <button
                @click="onTabClick(index + 1)"
                class="tabs__link"
                role="tab"
                data-toggle="tab"
            >
              {{ tab.title }}
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="car__info-groups" v-if="showTech">
      <div class="car__info-group">
        <h2 class="visually-hidden">Характеристики автомобиля</h2>
        <Tech :techs="currentTechs"/>
      </div>
      <OfferTerms
          v-if="showTerms && isMobile"
          class="car__info-group--options"
      />
      <!--        TODO equipment_group_list.length-->
      <OfferComplectation class="car__info-group--options" v-if="showComplectation && true"/>
      <!--        TODO offer.description-->
      <OfferDescription v-if="!isMobile && offer.description"/>
      <OfferDealer v-if="!isMobile" class="car__info-group--options"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import Tech from '~/components/Tech/index.vue';
import OfferTerms from '~/components/Offer/Terms.vue';
import OfferComplectation from '~/components/Offer/Complectation.vue';
import OfferDescription from '~/components/Offer/Description.vue';
import OfferDealer from '~/components/Offer/Dealer.vue';
import { TechType } from '~/app/types/tech';
import { engineVolume, numberFormat } from '~/utils/filters';

const { isMobile } = useDevice();
const offer = inject('offer');

let activeTab = ref(1);
const tabs = computed(() => {
  let tabs = [
    {
      title: 'Характеристики',
      id: 'tab-1',
      showButton: true,
    },
    {
      title: 'Преимущества',
      id: 'tab-2',
      showButton: true
      // !!this.equipment_group_list.length,
    },
  ];


  return tabs.filter((item) => item.showButton);
});
const showTech = computed(() => {
  if (isMobile) {
    return activeTab.value === 1;
  } else {
    return true;
  }
});
const showTerms = computed(() => {
  if (isMobile) {
    return activeTab.value === 2;
  } else {
    return true;
  }
});
const showComplectation = computed(() => {
  if (isMobile) {
    return activeTab.value === 2;
  } else {
    return true;
  }
});
const currentTechs = computed<TechType[]>(() => {
  let techs = [
    {
      title: 'год',
      slug: 'year',
      value: offer?.value.year,
      icon: 'icon-year'
    },
    {
      title: 'коробка',
      slug: 'gearbox',
      value: offer?.value.gearbox.title_short_rus,
      icon: 'icon-gear'
    },
    {
      title: 'пробег',
      slug: 'run',
      value: `${numberFormat(offer?.value.run)} км`,
      icon: 'icon-mileage',
    },
    {
      title: 'объем двигателя',
      slug: 'engine_volume',
      value: `${engineVolume(offer?.value.engine_volume)} л`,
      icon: 'icon-volume',
    },
    {
      title: 'мощность двигателя',
      slug: 'engine_power',
      value: `${offer?.value.engine_power} л.с.`,
      icon: 'icon-engine',
    },
    {
      title: 'тип двигателя',
      slug: 'engine_type',
      value: offer?.value.engineType.title,
      icon: 'icon-fuel'
    },
    {
      title: 'тип кузова',
      slug: 'body_type',
      value: offer?.value.bodyType.title,
      icon: 'icon-form'
    },
    {
      title: 'привод',
      slug: 'drive_type',
      value: offer?.value.driveType.title,
      icon: 'icon-wd'
    },
    {
      title: 'владельцы',
      slug: 'owner',
      value: offer?.value.owner.title,
      icon: 'icon-owners'
    }
  ];
  if (isMobile) {
    techs.push(
      {
        title: 'цвет',
        slug: 'color',
        value: offer?.value.color.title,
        icon: 'icon-color'
      }
    );
  }
  return techs;

});

function onTabClick(index: number) {
  activeTab.value = index;
  // await this.carInfoSwiper.slideTo(tab - 1)
}
</script>