export const stationCategory = gql`query stationCategory($site_id: Int!) {
    stationCategory(site_id: $site_id) {
        id,
        title,
        stations{
            id
            title
            price
            image{
                medium
                large
                medium_webp
                large_webp
            }
        }
    }
}`;