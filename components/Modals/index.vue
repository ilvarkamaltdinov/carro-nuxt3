<template>
  <transition name="menu">
    <ModalsMenuMarks v-if="headerMenuMarksModal"/>
  </transition>
  <transition name="menu">
    <ModalsMenu v-if="headerMenuModal"/>
  </transition>
  <transition name="overlay">
    <div v-if="modal.open"
         @click="closeModal()"
         class="overlay"></div>
  </transition>
  <transition name="modal">
    <ModalsOfferSelection v-if="modal.open && modal.component === 'offerSelection'"/>
  </transition>
</template>

<script setup lang="ts">
import ModalsMenuMarks from '~/components/Modals/MenuMarks.vue';
import ModalsMenu from '~/components/Modals/Menu.vue';
import ModalsOfferSelection from '~/components/Modals/OfferSelection.vue';

import {useHeader} from '~/store/header';
import {useModals} from '~/store/modals';

const closeModal = () => useModals().closeModal();

//Всплывашки шапки
const headerMenuMarksModal = computed(() => useHeader().marks);
const headerMenuModal = computed(() => useHeader().menu);
//Основные модалки
const modal = computed(() => useModals().modal);
</script>
