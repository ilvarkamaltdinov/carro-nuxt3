<template>
  <div class="modal__wrap">
    <div class="modal__choose-group">
      <h3 class="heading heading--h2">Модель</h3>
      <div class="makes">
        <div class="makes__wrap">
          <ul class="makes__list makes__list--models">
            <li class="makes__item" @click="$emit('select', 'folder', folder)" v-for="folder in mark.folders">
                      <span class="makes__link">
                        <span class="makes__title">
                          {{ folder.title }}
                        </span>
                        <span class="makes__qty">
                          {{ folder.offers_count }}
                        </span>
                      </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MarkFolder } from '~/types/graphql';

defineProps<{
  mark: MarkFolder
}>();
</script>