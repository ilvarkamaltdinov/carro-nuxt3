import { GenerationType } from '~/apollo/fragments/generation/generationType';

export const markFolderGeneration = gql`
    ${GenerationType}
    query markFolderGeneration($site_id: Int! $category: String) {
    markFolderGeneration(site_id: $site_id, category: $category) {
        id,
        title,
        slug,
        offers_count,
        folders {
            id,
            title,
            slug,
            offers_count,
            generations {
                ... GenerationType
            }
        }
    }
}`;