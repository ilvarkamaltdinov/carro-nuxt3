import { Mark } from '~/app/types/marks';
export const getAlphabet = (marks: Mark[]) => {
  let alphabet: string[] = [];
  marks.map(mark => {
    alphabet.push(mark.title[0]);
  });
  alphabet = [...new Set(alphabet)].sort();
  return alphabet;
};

export function filterMarksByLetter(marks: Mark[], letter: string) {
  return marks.filter(mark => mark.title[0].toLowerCase() === letter.toLowerCase());
}

export function sortMarksCatalog(marks: Mark[], count: number, showAll: boolean): Mark[] {
  if (showAll) {
    return marks.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    marks = marks.sort((a, b) => parseFloat(String(b!.offers_count!)) - parseFloat(String(a!.offers_count!)));
    marks = marks.slice(0, count);
    marks = marks.sort((a, b) => a.slug.toLowerCase().localeCompare(b.slug.toLowerCase()));
    return marks.sort((a, b) => a.title.localeCompare(b.title));
  }
}
export function markTitle(mark:Mark){
  return mark.slug === 'mercedes-benz' ? 'Mercedes' : mark.title;
}