import { OfferPage } from '~/apollo/fragments/offer/offerPage';

export const offerGql = gql`
    ${OfferPage}
    query offer($site_id: Int!, $mark_slug: String, $folder_slug: String!, $external_id: Int!, $dateFormat: String) {
  offer(site_id: $site_id, mark_slug: $mark_slug, folder_slug: $folder_slug, external_id: $external_id) {
    ... OfferPage
  }
}`;