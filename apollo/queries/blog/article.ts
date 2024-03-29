export const article = gql`query article($site_id: Int! $url: String) {
    article(site_id: $site_id, url: $url) {
        id
        slug
        page_title
        long_title
        short_description
        description
        url
        views
        video_youtube
        body
        createdAt(format:"d.m.Y")
        image_preview{
            thumb
        }
        image_slide{
            src
        }
        image{
            medium
            large
            medium_webp
            large_webp
            src
        }

    }
}`;
