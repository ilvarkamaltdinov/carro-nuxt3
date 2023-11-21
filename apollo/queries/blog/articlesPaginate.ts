export const articlesPaginate = gql`query articlesPaginate($site_id: Int,  $category_url :String, $page: Int, $limit: Int) {
    articlesPaginate(
        site_id: $site_id,
        category_url: $category_url,
        page: $page
        limit: $limit
    ) {
        data
        {
            id
            page_title
            views
            url
            createdAt(format:"d.m.Y")
            image_preview{
                thumb
                small
                thumb_webp
                small_webp
            }

        }
        last_page
    }
}`;