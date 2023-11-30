import {defineStore} from 'pinia';
import {request} from '~/helpers/request';
import {Mark, MarksQueryVariables} from '~/types/graphql';
import {marks} from '~/apollo/queries/marks';

type MarksState = {
  allMarks: Mark[];
  popularMarks: Mark[];
  popularMarksNames: string[]
};
export const useMarks = defineStore('marks', {
  state: (): MarksState => {
    return {
      allMarks: [],
      popularMarksNames: [
        'audi', 'bmw', 'mercedes-benz', 'ford', 'hyundai', 'kia', 'toyota', 'volkswagen', 'nissan', 'skoda'
      ],
      popularMarks: []
    };
  },

  getters: {
    sortedMarks() {

    }
  },

  actions: {
    async getAllMarksFillPopular() {
      const {data} = await request<{marks: Mark[]}, MarksQueryVariables>(marks);
      this.allMarks = data.value.marks;
      this.popularMarks = this.popularMarksNames.map((name) => this.allMarks.find((mark) => mark.slug === name)) as Mark[];
    }
  }
});