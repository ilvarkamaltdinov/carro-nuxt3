export const marks = gql`query marks($site_id: Int! $category: String) {
  marks(site_id: $site_id, category: $category) {
    id,
    title,
    slug,
    offers_count,
  }
}`;