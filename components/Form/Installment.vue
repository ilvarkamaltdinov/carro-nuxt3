<template>
  <div class="application__form grid__col-4">
    <FormConstructor :inputs="inputs">
      <template #name>
        Рассрочка
        <span class="heading__promo">{{ $settings.first_installment }}</span>
      </template>
      <template #car-choose>
        <label class="form__field-wrap form__field-wrap--car" :class="{'form__field-wrap--car-active' : offer}">
          <Button class="form__field" @click="$emit('showModal')">
            {{ (offer && `${offer.name}, ${numberFormat(offer.price)} ₽`) || 'Выбрать автомобиль' }}
          </Button>
          <nuxt-icon name="icon-form" class="form__car-icon"/>
        </label>
      </template>
      <template #calculator>
        <div class="catalog form__catalog">
          <slot name="offer" />
        </div>
        <FormCreditCalculator :offer="offer" :params="creditParams" :installment="true"
                              @changePeriod= "$emit('changePeriod', $event)" @changePayment="$emit('changePayment', $event)">
          <template #first-slider-name="{names}">
            {{ names.installment }}
          </template>
        </FormCreditCalculator>
      </template>
    </FormConstructor>
  </div>
</template>

<script setup lang="ts">
import FormCreditCalculator from '~/components/Form/form-components/FormCreditCalculator.vue';
import { ref } from '#imports';
import validation from '~/composables/validation';
import { Input } from '~/components/Form/FormConstructor.vue';
import { Offer } from '~/types/graphql';

defineProps<{
  offer: Offer
}>();

defineEmits(['changePeriod', 'changePayment', 'showModal']);
const inputs = ref<Input[]>([
  {
    name: 'fullName',
    component: 'InputText',
    attrs: {
      type: 'text',
      placeholder: 'ФИО',
      class: 'form__field',
    },
    validationRule: validation.value.fullName.rule,
  },
  {
    name: 'phone',
    component: 'InputMask',
    attrs: {
      type: 'tel',
      placeholder: 'Телефон',
      mask: validation.value.phone.mask,
      class: 'form__field',
      autoClear: false
    },
    validationRule: validation.value.phone.rule,
  },
]);

const creditParams = ref({
  rangePeriodValues: {
    snap: true,
    //todo move in settings
    range: {
      'min': 2,
      '12': 6,
      '24': 12,
      '36': 24,
      '48': 36,
      '60': 48,
      '72': 60,
      '84': 72,
      'max': 84,
    }
  },
  rangePaymentValues: {
    snap: true,
    range: {
      'min': 0,
      '12': 10,
      '24': 20,
      '36': 30,
      '48': 40,
      '60': 50,
      '72': 60,
      '84': 70,
      'max': 80,
    }
  },
  period: 84,
  payment: 0,
});
</script>