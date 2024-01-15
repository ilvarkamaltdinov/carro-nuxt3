import { defineStore } from 'pinia';
import { settings } from '~/apollo/queries/settings';
import { request } from '~/utils/request';
import { SettingsQuery } from '~/types/graphql';

interface SettingSite {
  counter_ym: string,
  counter_vk: string,
  contact_phone: string
  contact_coordinates: string
  contact_address: string
  contact_schedule: string
  legal_inn: string
  legal_kpp: string
  legal_name: string
  legal_ogrn: string
  legal_address: string
  credit_percent: string
  dealer_title: string
  dealer_anchor: string
}

export const useSettings = defineStore('settings', {
  state: () => ({
    settings: <SettingSite>{}
  }),
  actions: {
    async getSettings() {
      try {
        const { data } = await request<SettingsQuery>(settings);
        data.value.settings!.settings!.forEach((setting) => {
          this.settings[setting!.key as keyof SettingSite] = setting!.value!;
        });
        return this.settings;
      } catch (error) {
        console.log(error);
      }
    }
  }
});