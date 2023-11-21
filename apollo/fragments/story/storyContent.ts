export const StoryContent = gql`fragment StoryContent on StoryContent {
  id
  title
  body
  button_title
  button_link
  button_color
  image{
    small
    small_webp
    medium
    medium_webp
  }
}`;
