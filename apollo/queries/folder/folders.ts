export const folders = gql`query folders($site_id: Int!, $mark_id: Int, $mark_slug: String, $category:String) {
  folders(site_id: $site_id, mark_id: $mark_id, mark_slug: $mark_slug, category: $category) {
    id,
    title,
    title_rus,
    slug,
    offers_count
  }
}`;