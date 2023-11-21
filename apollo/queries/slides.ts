export const slides = gql`query slides($site_id: Int!) {
  slides(site_id: $site_id) {
    id,
    title,
    body,
    link,
    image {
      slide_1x,
      slide_2x,
      slide_1x_webp,
      slide_2x_webp,
      src
    },
    image_element {
      thumb,
      small,
      thumb_webp,
      small_webp,
      src
    }
  }
}`;