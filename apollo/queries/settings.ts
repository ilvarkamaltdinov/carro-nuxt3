export const settings = gql`query settings($site_id: Int!) {
    settings(site_id: $site_id) {
        id,
        settings{
            key,
            value
        }
    }
}`;