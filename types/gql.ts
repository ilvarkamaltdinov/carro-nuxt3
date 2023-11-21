/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment BankListType on Bank {\n    id\n    name\n    slug\n    request\n    approval\n    rating\n    rate\n    image\n}": types.BankListTypeFragmentDoc,
    "\n    fragment BankType on Bank {\n    id\n    name\n    slug\n    rate\n    title\n    image\n    image_car {\n        thumb\n        small\n        thumb_webp\n        small_webp\n    }\n    site_text{\n        ...SiteText\n    }\n}": types.BankTypeFragmentDoc,
    "fragment DealerContact on Dealer {\n  id\n  slug\n  address\n}": types.DealerContactFragmentDoc,
    "\n    fragment DealerList on Dealer {\n    id\n    phone\n    title\n    metro\n    short_description\n    youtube_playlist_review\n    slug\n    address\n    rating\n    schedule\n    site\n    images {\n        ... DealerImage\n    }\n}": types.DealerListFragmentDoc,
    "\n    fragment DealerPage on Dealer {\n    id\n    slug\n    title\n    city\n    address\n    metro\n    schedule\n    phone\n    coordinates\n    site\n    rating\n    short_description\n    description\n    image_logo\n    images {\n    ... DealerImage\n    }\n}": types.DealerPageFragmentDoc,
    "fragment DealerReviewList on Dealer {\n    id\n    title\n    youtube_playlist_review\n}": types.DealerReviewListFragmentDoc,
    "\n    fragment OfferFilterValues on OfferFilterValues {\n  mark{\n    ... MarkFieldType\n  }\n  folder{\n    ... FolderFieldType\n  }\n  generation{\n    ... GenerationFieldType\n  }\n  gearbox{\n    ... GearboxFieldType\n  }\n  engineType{\n    ... EngineTypeFieldType\n  }\n  driveType{\n    ... DriveTypeFieldType\n  }\n  bodyType{\n    ... BodyTypeFieldType\n  }\n  year\n  price\n  chosen{\n    ... ChosenFieldType\n  }\n}": types.OfferFilterValuesFragmentDoc,
    "\n    fragment OnlyFilterValues on OfferFilterValues {\n  mark{\n    ... MarkFieldType\n  }\n  folder{\n    ... FolderFieldType\n  }\n  generation{\n    ... GenerationFieldType\n  }\n  chosen{\n    ... ChosenFieldType\n  }\n}": types.OnlyFilterValuesFragmentDoc,
    "fragment BodyTypeFieldType on BodyTypeField {\n  title\n  id\n  slug\n}": types.BodyTypeFieldTypeFragmentDoc,
    "\nfragment ChosenFieldType on ChosenFieldType {\n  mark{\n    ... MarkFieldType\n  }\n  folder{\n    ... FolderFieldType\n  }\n  generation{\n    ... GenerationFieldType\n  }\n  gearbox{\n    ... GearboxFieldType\n  }\n  engineType{\n    ... EngineTypeFieldType\n  }\n  driveType{\n    ... DriveTypeFieldType\n  }\n  bodyType{\n    ... BodyTypeFieldType\n  }\n  yearFrom\n  yearTo\n  priceFrom\n  priceTo\n}": types.ChosenFieldTypeFragmentDoc,
    "fragment DriveTypeFieldType on DriveTypeField {\n  title\n  id\n  slug\n}": types.DriveTypeFieldTypeFragmentDoc,
    "fragment EngineTypeFieldType on EngineTypeField {\n  title\n  id\n  slug\n}": types.EngineTypeFieldTypeFragmentDoc,
    "fragment FolderFieldType on FolderField {\n  title\n  id\n  slug\n  mark_id\n}": types.FolderFieldTypeFragmentDoc,
    "fragment GearboxFieldType on GearboxField {\n  title\n  title_short_rus\n  id\n  slug\n}": types.GearboxFieldTypeFragmentDoc,
    "fragment GenerationFieldType on GenerationField {\n  title\n  id\n  slug\n}": types.GenerationFieldTypeFragmentDoc,
    "fragment MarkFieldType on MarkField {\n  title\n  id\n  slug\n}": types.MarkFieldTypeFragmentDoc,
    "fragment OwnerFieldType on OwnerField {\n  title\n  id\n  slug\n}": types.OwnerFieldTypeFragmentDoc,
    "fragment GenerationType on Generation {\n    id\n    name\n    year_begin\n    year_end\n    slug,\n    offers_count\n}": types.GenerationTypeFragmentDoc,
    "fragment DealerImage on DealerImage\n{\n    small\n    medium\n    small_webp\n    medium_webp\n}": types.DealerImageFragmentDoc,
    "\n    fragment OfferPage on Offer {\n    id\n    is_active\n    is_stock\n    external_id\n    name\n    category_enum\n    price\n    price_old\n    run\n    vin\n    year\n    description\n    rating {\n        rating_total\n        rating_body\n        rating_interior\n        rating_technical\n    }\n    createdAt(format: $dateFormat, sub_day: true)\n    engine_power\n    engine_volume\n    modification{\n        id\n        name\n    }\n    complectation{\n        ... ComplectationType\n    }\n    color {\n        ... ColorType\n    }\n    images {\n        ... ImageAllType\n    }\n    mark {\n        ... MarkType\n    }\n    folder {\n        ... FolderType\n    }\n    owner {\n        ... OwnerType\n    }\n    driveType {\n        ... DriveTypeType\n    }\n    bodyType {\n        ... BodyTypeType\n    }\n    gearbox {\n        ... GearboxType\n    }\n    engineType {\n        ... EngineTypeType\n    }\n    generation {\n        ... GenerationOfferType\n    }\n    equipment_groups{\n        ... EquipmentType\n    }\n    dealer{\n        ... DealerType\n    }\n}": types.OfferPageFragmentDoc,
    "\n    fragment OfferPagination on OfferTypePagination {\n  data {\n    id\n    external_id\n    is_stock\n    external_unique_id\n    name\n    category_enum\n    price\n    price_old\n    run\n    vin\n    color {\n      ... ColorType\n    }\n    rating {\n      rating_total\n      rating_body\n      rating_interior\n      rating_technical\n    }\n    year\n    createdAt(format: $dateFormat, sub_day: true)\n    engine_power\n    engine_volume\n    mark {\n      ... MarkType\n    }\n    folder {\n      ... FolderType\n    }\n    images {\n      small_webp\n    }\n    owner {\n      ... OwnerType\n    }\n    driveType {\n      ... DriveTypeType\n    }\n    bodyType {\n      ... BodyTypeType\n    }\n    gearbox {\n      ... GearboxType\n    }\n    engineType {\n      ... EngineTypeType\n    }\n    generation {\n      ... GenerationOfferType\n    }\n    dealer {\n      ... DealerMiniType\n    }\n  }\n  last_page\n  current_page\n  total\n  has_more_pages\n}": types.OfferPaginationFragmentDoc,
    "fragment BodyTypeType on BodyType {\n  id\n  title\n  name\n}": types.BodyTypeTypeFragmentDoc,
    "fragment ColorType on Color {\n  id\n  title\n  name\n}": types.ColorTypeFragmentDoc,
    "fragment ComplectationType on Complectation {\n  id\n  name\n}": types.ComplectationTypeFragmentDoc,
    "fragment DealerMiniType on Dealer {\n    id\n    phone\n    slug\n    title\n    image_logo\n}": types.DealerMiniTypeFragmentDoc,
    "fragment DealerType on Dealer {\n    id\n    slug\n    title\n    address\n    city\n    metro\n    schedule\n    phone\n    rating\n    image_logo\n}": types.DealerTypeFragmentDoc,
    "fragment DriveTypeType on DriveType {\n  id\n  title\n  name\n}": types.DriveTypeTypeFragmentDoc,
    "fragment EngineTypeType on EngineType {\n  id\n  title\n  name\n}": types.EngineTypeTypeFragmentDoc,
    "fragment EquipmentType on TitleValues {\n    title\n    values\n}": types.EquipmentTypeFragmentDoc,
    "fragment FolderType on Folder {\n  id\n  slug\n  title\n}": types.FolderTypeFragmentDoc,
    "fragment GearboxType on Gearbox {\n  id\n  title\n  title_short_rus\n  name\n}": types.GearboxTypeFragmentDoc,
    "fragment GenerationOfferType on Generation {\n  id\n  slug\n  name\n}": types.GenerationOfferTypeFragmentDoc,
    "fragment ImageAllType on OfferImage {\n    original\n    small_webp\n    small\n    medium_webp\n    medium\n}": types.ImageAllTypeFragmentDoc,
    "fragment ImageThumbType on OfferImage {\n  thumb\n  original\n}": types.ImageThumbTypeFragmentDoc,
    "fragment MarkType on Mark {\n  id\n  slug\n  title\n}": types.MarkTypeFragmentDoc,
    "fragment ModificationType on Modification{\n  id\n  name\n}": types.ModificationTypeFragmentDoc,
    "fragment OwnerType on Owner {\n  id\n  title\n  number\n}": types.OwnerTypeFragmentDoc,
    "fragment WheelType on Wheel {\n  id\n  name\n}": types.WheelTypeFragmentDoc,
    "\n    fragment SeoTag on SeoTag {\n    page_title\n    title\n    description\n    crumbs {\n        ... SeoTagCrumbs\n    },\n    site_text {\n       ... SiteText\n    }\n\n}": types.SeoTagFragmentDoc,
    "fragment SeoTagCrumbs on SeoTagCrumbs {\n  title\n  link\n}": types.SeoTagCrumbsFragmentDoc,
    "fragment SiteText on SiteText {\n    body\n}": types.SiteTextFragmentDoc,
    "fragment Story on Story {\n  id\n  title\n  image {\n    tiny,\n    tiny_webp,\n    xs,\n    xs_webp\n  }\n}": types.StoryFragmentDoc,
    "fragment StoryContent on StoryContent {\n  id\n  title\n  body\n  button_title\n  button_link\n  button_color\n  image{\n    small\n    small_webp\n    medium\n    medium_webp\n  }\n}": types.StoryContentFragmentDoc,
    "fragment OfferUrl on OfferUrlType {\n    mark_slug\n    folder_slug\n    external_id\n}": types.OfferUrlFragmentDoc,
    "fragment OfferUrlFilterPagination on OfferUrlFilterPaginationType {\n    mark_slug_array\n    folder_slug_array\n    generation_slug_array\n    year_from\n    engine_type_id_array\n    body_type_id_array\n    category\n}": types.OfferUrlFilterPaginationFragmentDoc,
    "mutation feedback(\n  $external_id:Int,\n  $site_id:Int!,\n  $type:String!,\n  $client_name:String,\n  $client_phone:String!,\n  $client_age:String,\n  $client_region:String,\n  $client_vehicle_mark:String,\n  $client_vehicle_model:String,\n  $client_vehicle_run:String,\n  $client_vehicle_year:String,\n  $client_vehicle_body_type: String,\n  $client_vehicle_price: String,\n  $client_vehicle_owners: String,\n  $client_vehicle_gearbox: String,\n  $client_vehicle_engine: String,\n  $credit_initial_fee:String,\n  $credit_period:String,\n  $utm_source:String,\n  $utm_content:String,\n  $utm_medium:String,\n  $utm_campaign:String,\n  $utm_term:String,\n  $offer_title:String,\n  $offer_price:String,\n  $comment:String\n\n){\n  feedback(\n    external_id: $external_id,\n    site_id: $site_id,\n    type: $type,\n    client_name: $client_name,\n    client_phone: $client_phone,\n    client_age: $client_age,\n    client_region: $client_region,\n    client_vehicle_mark: $client_vehicle_mark,\n    client_vehicle_model: $client_vehicle_model,\n    client_vehicle_run: $client_vehicle_run,\n    client_vehicle_year: $client_vehicle_year,\n    client_vehicle_body_type: $client_vehicle_body_type,\n    client_vehicle_price: $client_vehicle_price,\n    client_vehicle_owners: $client_vehicle_owners,\n    client_vehicle_gearbox: $client_vehicle_gearbox,\n    client_vehicle_engine: $client_vehicle_engine,\n    credit_initial_fee: $credit_initial_fee,\n    credit_period: $credit_period,\n    utm_source: $utm_source,\n    utm_content: $utm_content,\n    utm_medium: $utm_medium,\n    utm_campaign: $utm_campaign,\n    utm_term: $utm_term,\n    offer_title: $offer_title,\n    offer_price: $offer_price,\n    comment: $comment){\n    id\n  }\n}": types.FeedbackDocument,
    "\n    query bank($site_id: Int!, $slug: String!) {\n  bank(site_id: $site_id, slug: $slug) {\n    id\n    name\n    slug\n    rate\n    title\n    image\n    image_car {\n      thumb\n      small\n      thumb_webp\n      small_webp\n    }\n    site_text{\n      ... SiteText\n    }\n  }\n}": types.BankDocument,
    "\n    query banks($site_id: Int!) {\n  banks(site_id: $site_id) {\n    ...BankListType\n  }\n}": types.BanksDocument,
    "query article($site_id: Int! $url: String) {\n    article(site_id: $site_id, url: $url) {\n        id\n        slug\n        page_title\n        long_title\n        short_description\n        description\n        url\n        views\n        video_youtube\n        body\n        createdAt(format:\"d.m.Y\")\n        image_preview{\n            thumb\n        }\n        image_slide{\n            src\n        }\n        image{\n            medium\n            large\n            medium_webp\n            large_webp\n            src\n        }\n\n    }\n}": types.ArticleDocument,
    "query articleCategory($site_id: Int!, $limit: Int) {\n    articleCategory(site_id: $site_id) {\n        id\n        slug\n        page_title\n        url\n        articles(limit:$limit){\n            id\n            page_title\n            views\n            url\n            createdAt(format:\"d.m.Y\")\n            image_preview{\n                thumb\n                small\n                thumb_webp\n                small_webp\n            }\n        }\n    }\n}": types.ArticleCategoryDocument,
    "query articlesPaginate($site_id: Int,  $category_url :String, $page: Int, $limit: Int) {\n    articlesPaginate(\n        site_id: $site_id,\n        category_url: $category_url,\n        page: $page\n        limit: $limit\n    ) {\n        data\n        {\n            id\n            page_title\n            views\n            url\n            createdAt(format:\"d.m.Y\")\n            image_preview{\n                thumb\n                small\n                thumb_webp\n                small_webp\n            }\n\n        }\n        last_page\n    }\n}": types.ArticlesPaginateDocument,
    "\n    query dealer($site_id: Int!, $slug: String!) {\n  dealer(site_id: $site_id,  slug: $slug) {\n    ...DealerPage\n  }\n}": types.DealerDocument,
    "\n    query dealers($site_id: Int!) {\n  dealers(site_id: $site_id) {\n    ...DealerList\n  }\n}": types.DealersDocument,
    "\n    query dealersContact($site_id: Int!) {\n  dealers(site_id: $site_id) {\n    ...DealerContact\n  }\n}": types.DealersContactDocument,
    "query folders($site_id: Int!, $mark_id: Int, $mark_slug: String, $category:String) {\n  folders(site_id: $site_id, mark_id: $mark_id, mark_slug: $mark_slug, category: $category) {\n    id,\n    title,\n    title_rus,\n    slug,\n    offers_count\n  }\n}": types.FoldersDocument,
    "\n    query generations($site_id: Int!, $folder_id: Int, $mark_slug: String, $category: String,  $folder_slug: String) {\n    generations(site_id: $site_id, folder_id: $folder_id, category: $category, mark_slug: $mark_slug, folder_slug: $folder_slug) {\n        ... GenerationType\n    }\n}": types.GenerationsDocument,
    "\n    query markFolderGeneration($site_id: Int! $category: String) {\n    markFolderGeneration(site_id: $site_id, category: $category) {\n        id,\n        title,\n        slug,\n        offers_count,\n        folders {\n            id,\n            title,\n            slug,\n            offers_count,\n            generations {\n                ... GenerationType\n            }\n        }\n    }\n}": types.MarkFolderGenerationDocument,
    "query marks($site_id: Int! $category: String) {\n  marks(site_id: $site_id, category: $category) {\n    id,\n    title,\n    slug,\n    offers_count,\n  }\n}": types.MarksDocument,
    "\n    query offer($site_id: Int!, $mark_slug: String, $folder_slug: String!, $external_id: Int!, $dateFormat: String) {\n  offer(site_id: $site_id, mark_slug: $mark_slug, folder_slug: $folder_slug, external_id: $external_id) {\n    ... OfferPage\n  }\n}": types.OfferDocument,
    "\n    query offerFilters(\n  $site_id: Int,\n  $category: String,\n  $mark_slug_array: [String],\n  $folder_slug_array: [String],\n  $generation_slug_array: [String],\n  $engine_type_id_array: [Int],\n  $body_type_id_array: [Int],\n  $gearbox_id_array: [Int],\n  $drive_type_id_array: [Int],\n  $owner_id_array:[Int],\n  $year_from: Int,\n  $year_to: Int,\n  $price_from: Int,\n  $price_to: Int,\n  $url: String\n) {\n  offerFilters(\n    site_id: $site_id,\n    mark_slug_array: $mark_slug_array,\n    folder_slug_array: $folder_slug_array,\n    generation_slug_array: $generation_slug_array,\n    engine_type_id_array: $engine_type_id_array,\n    body_type_id_array: $body_type_id_array,\n    gearbox_id_array: $gearbox_id_array,\n    drive_type_id_array: $drive_type_id_array,\n    owner_id_array: $owner_id_array,\n    year_from: $year_from,\n    year_to: $year_to,\n    price_from: $price_from,\n    price_to: $price_to,\n    category: $category,\n    url:$url\n  )\n  {\n    ... OfferFilterValues\n  }\n}": types.OfferFiltersDocument,
    "\n    query offerUrl(\n    $site_id: Int,\n    $url: String\n) {\n    offerUrl(\n        site_id: $site_id\n        url: $url\n    )\n    {\n        __typename\n        ... on OfferUrlType {\n            ... OfferUrl\n        }\n        ... on OfferUrlFilterPaginationType {\n            ... OfferUrlFilterPagination\n        }\n    }\n}": types.OfferUrlDocument,
    "\n    query offers(\n    $site_id: Int,\n    $page: Int,\n    $limit: Int,\n    $category: String,\n    $mark_slug_array: [String],\n    $folder_slug_array: [String],\n    $external_id_array: [Int],\n    $sort: String,\n    $except_external_id: Int,\n    $generation_slug_array: [String],\n    $engine_type_id_array: [Int],\n    $body_type_id_array: [Int],\n    $gearbox_id_array: [Int],\n    $drive_type_id_array: [Int],\n    $owner_id_array:[Int],\n    $year_from: Int,\n    $year_to: Int,\n    $price_from: Int,\n    $price_to: Int,\n    $set: [String],\n    $url: String,\n    $dateFormat: String\n) {\n    offers(\n        page: $page,\n        limit: $limit,\n        site_id: $site_id,\n        mark_slug_array: $mark_slug_array,\n        folder_slug_array: $folder_slug_array,\n        external_id_array: $external_id_array,\n        sort: $sort,\n        except_external_id:$except_external_id,\n        generation_slug_array: $generation_slug_array,\n        engine_type_id_array: $engine_type_id_array,\n        body_type_id_array: $body_type_id_array,\n        gearbox_id_array: $gearbox_id_array,\n        drive_type_id_array: $drive_type_id_array,\n        owner_id_array: $owner_id_array,\n        year_from: $year_from,\n        year_to: $year_to,\n        price_from: $price_from,\n        price_to: $price_to,\n        category: $category,\n        set: $set,\n        url:$url\n    ) {\n        ... OfferPagination\n    }\n}": types.OffersDocument,
    "query regions($site_id: Int!) {\n  regions(site_id: $site_id) {\n    id,\n    title\n  }\n}": types.RegionsDocument,
    "\n    query seoTags($site_id: Int!, $url: String!) {\n    seoTag(site_id: $site_id, url: $url) {\n       ... SeoTag\n    }\n}": types.SeoTagsDocument,
    "query settings($site_id: Int!) {\n    settings(site_id: $site_id) {\n        id,\n        settings{\n            key,\n            value\n        }\n    }\n}": types.SettingsDocument,
    "\n    query siteConfig(\n        $site_id:Int\n        $category:String\n    ){\n        settings(\n            site_id: $site_id) {\n            id\n            settings{\n                key\n                value\n            }\n        }\n        markFolderGeneration(site_id: $site_id, category: $category) {\n            id\n            title\n            title_rus\n            slug\n            offers_count\n            folders{\n                id\n                title\n                title_rus\n                slug\n                offers_count\n                generations{\n                    id\n                    name\n                    slug\n                    year_begin\n                    year_end\n                    offers_count\n                }\n            }\n        }\n    }": types.SiteConfigDocument,
    "query slides($site_id: Int!) {\n  slides(site_id: $site_id) {\n    id,\n    title,\n    body,\n    link,\n    image {\n      slide_1x,\n      slide_2x,\n      slide_1x_webp,\n      slide_2x_webp,\n      src\n    },\n    image_element {\n      thumb,\n      small,\n      thumb_webp,\n      small_webp,\n      src\n    }\n  }\n}": types.SlidesDocument,
    "query stationCategory($site_id: Int!) {\n    stationCategory(site_id: $site_id) {\n        id,\n        title,\n        stations{\n            id\n            title\n            price\n            image{\n                medium\n                large\n                medium_webp\n                large_webp\n            }\n        }\n    }\n}": types.StationCategoryDocument,
    "\n    query stories(\n  $site_id: Int!\n) {\n  stories(\n    site_id: $site_id,\n  ) {\n    ... Story\n  }\n}": types.StoriesDocument,
    "\n    query storyContents(\n    $site_id: Int!,\n    $story_id:Int\n) {\n    storyContents(\n        site_id: $site_id,\n        story_id: $story_id,\n    ) {\n        ... StoryContent\n    }\n}": types.StoryContentsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BankListType on Bank {\n    id\n    name\n    slug\n    request\n    approval\n    rating\n    rate\n    image\n}"): (typeof documents)["fragment BankListType on Bank {\n    id\n    name\n    slug\n    request\n    approval\n    rating\n    rate\n    image\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment BankType on Bank {\n    id\n    name\n    slug\n    rate\n    title\n    image\n    image_car {\n        thumb\n        small\n        thumb_webp\n        small_webp\n    }\n    site_text{\n        ...SiteText\n    }\n}"): (typeof documents)["\n    fragment BankType on Bank {\n    id\n    name\n    slug\n    rate\n    title\n    image\n    image_car {\n        thumb\n        small\n        thumb_webp\n        small_webp\n    }\n    site_text{\n        ...SiteText\n    }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment DealerContact on Dealer {\n  id\n  slug\n  address\n}"): (typeof documents)["fragment DealerContact on Dealer {\n  id\n  slug\n  address\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment DealerList on Dealer {\n    id\n    phone\n    title\n    metro\n    short_description\n    youtube_playlist_review\n    slug\n    address\n    rating\n    schedule\n    site\n    images {\n        ... DealerImage\n    }\n}"): (typeof documents)["\n    fragment DealerList on Dealer {\n    id\n    phone\n    title\n    metro\n    short_description\n    youtube_playlist_review\n    slug\n    address\n    rating\n    schedule\n    site\n    images {\n        ... DealerImage\n    }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment DealerPage on Dealer {\n    id\n    slug\n    title\n    city\n    address\n    metro\n    schedule\n    phone\n    coordinates\n    site\n    rating\n    short_description\n    description\n    image_logo\n    images {\n    ... DealerImage\n    }\n}"): (typeof documents)["\n    fragment DealerPage on Dealer {\n    id\n    slug\n    title\n    city\n    address\n    metro\n    schedule\n    phone\n    coordinates\n    site\n    rating\n    short_description\n    description\n    image_logo\n    images {\n    ... DealerImage\n    }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment DealerReviewList on Dealer {\n    id\n    title\n    youtube_playlist_review\n}"): (typeof documents)["fragment DealerReviewList on Dealer {\n    id\n    title\n    youtube_playlist_review\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment OfferFilterValues on OfferFilterValues {\n  mark{\n    ... MarkFieldType\n  }\n  folder{\n    ... FolderFieldType\n  }\n  generation{\n    ... GenerationFieldType\n  }\n  gearbox{\n    ... GearboxFieldType\n  }\n  engineType{\n    ... EngineTypeFieldType\n  }\n  driveType{\n    ... DriveTypeFieldType\n  }\n  bodyType{\n    ... BodyTypeFieldType\n  }\n  year\n  price\n  chosen{\n    ... ChosenFieldType\n  }\n}"): (typeof documents)["\n    fragment OfferFilterValues on OfferFilterValues {\n  mark{\n    ... MarkFieldType\n  }\n  folder{\n    ... FolderFieldType\n  }\n  generation{\n    ... GenerationFieldType\n  }\n  gearbox{\n    ... GearboxFieldType\n  }\n  engineType{\n    ... EngineTypeFieldType\n  }\n  driveType{\n    ... DriveTypeFieldType\n  }\n  bodyType{\n    ... BodyTypeFieldType\n  }\n  year\n  price\n  chosen{\n    ... ChosenFieldType\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment OnlyFilterValues on OfferFilterValues {\n  mark{\n    ... MarkFieldType\n  }\n  folder{\n    ... FolderFieldType\n  }\n  generation{\n    ... GenerationFieldType\n  }\n  chosen{\n    ... ChosenFieldType\n  }\n}"): (typeof documents)["\n    fragment OnlyFilterValues on OfferFilterValues {\n  mark{\n    ... MarkFieldType\n  }\n  folder{\n    ... FolderFieldType\n  }\n  generation{\n    ... GenerationFieldType\n  }\n  chosen{\n    ... ChosenFieldType\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BodyTypeFieldType on BodyTypeField {\n  title\n  id\n  slug\n}"): (typeof documents)["fragment BodyTypeFieldType on BodyTypeField {\n  title\n  id\n  slug\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nfragment ChosenFieldType on ChosenFieldType {\n  mark{\n    ... MarkFieldType\n  }\n  folder{\n    ... FolderFieldType\n  }\n  generation{\n    ... GenerationFieldType\n  }\n  gearbox{\n    ... GearboxFieldType\n  }\n  engineType{\n    ... EngineTypeFieldType\n  }\n  driveType{\n    ... DriveTypeFieldType\n  }\n  bodyType{\n    ... BodyTypeFieldType\n  }\n  yearFrom\n  yearTo\n  priceFrom\n  priceTo\n}"): (typeof documents)["\nfragment ChosenFieldType on ChosenFieldType {\n  mark{\n    ... MarkFieldType\n  }\n  folder{\n    ... FolderFieldType\n  }\n  generation{\n    ... GenerationFieldType\n  }\n  gearbox{\n    ... GearboxFieldType\n  }\n  engineType{\n    ... EngineTypeFieldType\n  }\n  driveType{\n    ... DriveTypeFieldType\n  }\n  bodyType{\n    ... BodyTypeFieldType\n  }\n  yearFrom\n  yearTo\n  priceFrom\n  priceTo\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment DriveTypeFieldType on DriveTypeField {\n  title\n  id\n  slug\n}"): (typeof documents)["fragment DriveTypeFieldType on DriveTypeField {\n  title\n  id\n  slug\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment EngineTypeFieldType on EngineTypeField {\n  title\n  id\n  slug\n}"): (typeof documents)["fragment EngineTypeFieldType on EngineTypeField {\n  title\n  id\n  slug\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment FolderFieldType on FolderField {\n  title\n  id\n  slug\n  mark_id\n}"): (typeof documents)["fragment FolderFieldType on FolderField {\n  title\n  id\n  slug\n  mark_id\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment GearboxFieldType on GearboxField {\n  title\n  title_short_rus\n  id\n  slug\n}"): (typeof documents)["fragment GearboxFieldType on GearboxField {\n  title\n  title_short_rus\n  id\n  slug\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment GenerationFieldType on GenerationField {\n  title\n  id\n  slug\n}"): (typeof documents)["fragment GenerationFieldType on GenerationField {\n  title\n  id\n  slug\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment MarkFieldType on MarkField {\n  title\n  id\n  slug\n}"): (typeof documents)["fragment MarkFieldType on MarkField {\n  title\n  id\n  slug\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment OwnerFieldType on OwnerField {\n  title\n  id\n  slug\n}"): (typeof documents)["fragment OwnerFieldType on OwnerField {\n  title\n  id\n  slug\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment GenerationType on Generation {\n    id\n    name\n    year_begin\n    year_end\n    slug,\n    offers_count\n}"): (typeof documents)["fragment GenerationType on Generation {\n    id\n    name\n    year_begin\n    year_end\n    slug,\n    offers_count\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment DealerImage on DealerImage\n{\n    small\n    medium\n    small_webp\n    medium_webp\n}"): (typeof documents)["fragment DealerImage on DealerImage\n{\n    small\n    medium\n    small_webp\n    medium_webp\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment OfferPage on Offer {\n    id\n    is_active\n    is_stock\n    external_id\n    name\n    category_enum\n    price\n    price_old\n    run\n    vin\n    year\n    description\n    rating {\n        rating_total\n        rating_body\n        rating_interior\n        rating_technical\n    }\n    createdAt(format: $dateFormat, sub_day: true)\n    engine_power\n    engine_volume\n    modification{\n        id\n        name\n    }\n    complectation{\n        ... ComplectationType\n    }\n    color {\n        ... ColorType\n    }\n    images {\n        ... ImageAllType\n    }\n    mark {\n        ... MarkType\n    }\n    folder {\n        ... FolderType\n    }\n    owner {\n        ... OwnerType\n    }\n    driveType {\n        ... DriveTypeType\n    }\n    bodyType {\n        ... BodyTypeType\n    }\n    gearbox {\n        ... GearboxType\n    }\n    engineType {\n        ... EngineTypeType\n    }\n    generation {\n        ... GenerationOfferType\n    }\n    equipment_groups{\n        ... EquipmentType\n    }\n    dealer{\n        ... DealerType\n    }\n}"): (typeof documents)["\n    fragment OfferPage on Offer {\n    id\n    is_active\n    is_stock\n    external_id\n    name\n    category_enum\n    price\n    price_old\n    run\n    vin\n    year\n    description\n    rating {\n        rating_total\n        rating_body\n        rating_interior\n        rating_technical\n    }\n    createdAt(format: $dateFormat, sub_day: true)\n    engine_power\n    engine_volume\n    modification{\n        id\n        name\n    }\n    complectation{\n        ... ComplectationType\n    }\n    color {\n        ... ColorType\n    }\n    images {\n        ... ImageAllType\n    }\n    mark {\n        ... MarkType\n    }\n    folder {\n        ... FolderType\n    }\n    owner {\n        ... OwnerType\n    }\n    driveType {\n        ... DriveTypeType\n    }\n    bodyType {\n        ... BodyTypeType\n    }\n    gearbox {\n        ... GearboxType\n    }\n    engineType {\n        ... EngineTypeType\n    }\n    generation {\n        ... GenerationOfferType\n    }\n    equipment_groups{\n        ... EquipmentType\n    }\n    dealer{\n        ... DealerType\n    }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment OfferPagination on OfferTypePagination {\n  data {\n    id\n    external_id\n    is_stock\n    external_unique_id\n    name\n    category_enum\n    price\n    price_old\n    run\n    vin\n    color {\n      ... ColorType\n    }\n    rating {\n      rating_total\n      rating_body\n      rating_interior\n      rating_technical\n    }\n    year\n    createdAt(format: $dateFormat, sub_day: true)\n    engine_power\n    engine_volume\n    mark {\n      ... MarkType\n    }\n    folder {\n      ... FolderType\n    }\n    images {\n      small_webp\n    }\n    owner {\n      ... OwnerType\n    }\n    driveType {\n      ... DriveTypeType\n    }\n    bodyType {\n      ... BodyTypeType\n    }\n    gearbox {\n      ... GearboxType\n    }\n    engineType {\n      ... EngineTypeType\n    }\n    generation {\n      ... GenerationOfferType\n    }\n    dealer {\n      ... DealerMiniType\n    }\n  }\n  last_page\n  current_page\n  total\n  has_more_pages\n}"): (typeof documents)["\n    fragment OfferPagination on OfferTypePagination {\n  data {\n    id\n    external_id\n    is_stock\n    external_unique_id\n    name\n    category_enum\n    price\n    price_old\n    run\n    vin\n    color {\n      ... ColorType\n    }\n    rating {\n      rating_total\n      rating_body\n      rating_interior\n      rating_technical\n    }\n    year\n    createdAt(format: $dateFormat, sub_day: true)\n    engine_power\n    engine_volume\n    mark {\n      ... MarkType\n    }\n    folder {\n      ... FolderType\n    }\n    images {\n      small_webp\n    }\n    owner {\n      ... OwnerType\n    }\n    driveType {\n      ... DriveTypeType\n    }\n    bodyType {\n      ... BodyTypeType\n    }\n    gearbox {\n      ... GearboxType\n    }\n    engineType {\n      ... EngineTypeType\n    }\n    generation {\n      ... GenerationOfferType\n    }\n    dealer {\n      ... DealerMiniType\n    }\n  }\n  last_page\n  current_page\n  total\n  has_more_pages\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BodyTypeType on BodyType {\n  id\n  title\n  name\n}"): (typeof documents)["fragment BodyTypeType on BodyType {\n  id\n  title\n  name\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ColorType on Color {\n  id\n  title\n  name\n}"): (typeof documents)["fragment ColorType on Color {\n  id\n  title\n  name\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ComplectationType on Complectation {\n  id\n  name\n}"): (typeof documents)["fragment ComplectationType on Complectation {\n  id\n  name\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment DealerMiniType on Dealer {\n    id\n    phone\n    slug\n    title\n    image_logo\n}"): (typeof documents)["fragment DealerMiniType on Dealer {\n    id\n    phone\n    slug\n    title\n    image_logo\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment DealerType on Dealer {\n    id\n    slug\n    title\n    address\n    city\n    metro\n    schedule\n    phone\n    rating\n    image_logo\n}"): (typeof documents)["fragment DealerType on Dealer {\n    id\n    slug\n    title\n    address\n    city\n    metro\n    schedule\n    phone\n    rating\n    image_logo\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment DriveTypeType on DriveType {\n  id\n  title\n  name\n}"): (typeof documents)["fragment DriveTypeType on DriveType {\n  id\n  title\n  name\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment EngineTypeType on EngineType {\n  id\n  title\n  name\n}"): (typeof documents)["fragment EngineTypeType on EngineType {\n  id\n  title\n  name\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment EquipmentType on TitleValues {\n    title\n    values\n}"): (typeof documents)["fragment EquipmentType on TitleValues {\n    title\n    values\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment FolderType on Folder {\n  id\n  slug\n  title\n}"): (typeof documents)["fragment FolderType on Folder {\n  id\n  slug\n  title\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment GearboxType on Gearbox {\n  id\n  title\n  title_short_rus\n  name\n}"): (typeof documents)["fragment GearboxType on Gearbox {\n  id\n  title\n  title_short_rus\n  name\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment GenerationOfferType on Generation {\n  id\n  slug\n  name\n}"): (typeof documents)["fragment GenerationOfferType on Generation {\n  id\n  slug\n  name\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ImageAllType on OfferImage {\n    original\n    small_webp\n    small\n    medium_webp\n    medium\n}"): (typeof documents)["fragment ImageAllType on OfferImage {\n    original\n    small_webp\n    small\n    medium_webp\n    medium\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ImageThumbType on OfferImage {\n  thumb\n  original\n}"): (typeof documents)["fragment ImageThumbType on OfferImage {\n  thumb\n  original\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment MarkType on Mark {\n  id\n  slug\n  title\n}"): (typeof documents)["fragment MarkType on Mark {\n  id\n  slug\n  title\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ModificationType on Modification{\n  id\n  name\n}"): (typeof documents)["fragment ModificationType on Modification{\n  id\n  name\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment OwnerType on Owner {\n  id\n  title\n  number\n}"): (typeof documents)["fragment OwnerType on Owner {\n  id\n  title\n  number\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment WheelType on Wheel {\n  id\n  name\n}"): (typeof documents)["fragment WheelType on Wheel {\n  id\n  name\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    fragment SeoTag on SeoTag {\n    page_title\n    title\n    description\n    crumbs {\n        ... SeoTagCrumbs\n    },\n    site_text {\n       ... SiteText\n    }\n\n}"): (typeof documents)["\n    fragment SeoTag on SeoTag {\n    page_title\n    title\n    description\n    crumbs {\n        ... SeoTagCrumbs\n    },\n    site_text {\n       ... SiteText\n    }\n\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment SeoTagCrumbs on SeoTagCrumbs {\n  title\n  link\n}"): (typeof documents)["fragment SeoTagCrumbs on SeoTagCrumbs {\n  title\n  link\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment SiteText on SiteText {\n    body\n}"): (typeof documents)["fragment SiteText on SiteText {\n    body\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment Story on Story {\n  id\n  title\n  image {\n    tiny,\n    tiny_webp,\n    xs,\n    xs_webp\n  }\n}"): (typeof documents)["fragment Story on Story {\n  id\n  title\n  image {\n    tiny,\n    tiny_webp,\n    xs,\n    xs_webp\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment StoryContent on StoryContent {\n  id\n  title\n  body\n  button_title\n  button_link\n  button_color\n  image{\n    small\n    small_webp\n    medium\n    medium_webp\n  }\n}"): (typeof documents)["fragment StoryContent on StoryContent {\n  id\n  title\n  body\n  button_title\n  button_link\n  button_color\n  image{\n    small\n    small_webp\n    medium\n    medium_webp\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment OfferUrl on OfferUrlType {\n    mark_slug\n    folder_slug\n    external_id\n}"): (typeof documents)["fragment OfferUrl on OfferUrlType {\n    mark_slug\n    folder_slug\n    external_id\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment OfferUrlFilterPagination on OfferUrlFilterPaginationType {\n    mark_slug_array\n    folder_slug_array\n    generation_slug_array\n    year_from\n    engine_type_id_array\n    body_type_id_array\n    category\n}"): (typeof documents)["fragment OfferUrlFilterPagination on OfferUrlFilterPaginationType {\n    mark_slug_array\n    folder_slug_array\n    generation_slug_array\n    year_from\n    engine_type_id_array\n    body_type_id_array\n    category\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "mutation feedback(\n  $external_id:Int,\n  $site_id:Int!,\n  $type:String!,\n  $client_name:String,\n  $client_phone:String!,\n  $client_age:String,\n  $client_region:String,\n  $client_vehicle_mark:String,\n  $client_vehicle_model:String,\n  $client_vehicle_run:String,\n  $client_vehicle_year:String,\n  $client_vehicle_body_type: String,\n  $client_vehicle_price: String,\n  $client_vehicle_owners: String,\n  $client_vehicle_gearbox: String,\n  $client_vehicle_engine: String,\n  $credit_initial_fee:String,\n  $credit_period:String,\n  $utm_source:String,\n  $utm_content:String,\n  $utm_medium:String,\n  $utm_campaign:String,\n  $utm_term:String,\n  $offer_title:String,\n  $offer_price:String,\n  $comment:String\n\n){\n  feedback(\n    external_id: $external_id,\n    site_id: $site_id,\n    type: $type,\n    client_name: $client_name,\n    client_phone: $client_phone,\n    client_age: $client_age,\n    client_region: $client_region,\n    client_vehicle_mark: $client_vehicle_mark,\n    client_vehicle_model: $client_vehicle_model,\n    client_vehicle_run: $client_vehicle_run,\n    client_vehicle_year: $client_vehicle_year,\n    client_vehicle_body_type: $client_vehicle_body_type,\n    client_vehicle_price: $client_vehicle_price,\n    client_vehicle_owners: $client_vehicle_owners,\n    client_vehicle_gearbox: $client_vehicle_gearbox,\n    client_vehicle_engine: $client_vehicle_engine,\n    credit_initial_fee: $credit_initial_fee,\n    credit_period: $credit_period,\n    utm_source: $utm_source,\n    utm_content: $utm_content,\n    utm_medium: $utm_medium,\n    utm_campaign: $utm_campaign,\n    utm_term: $utm_term,\n    offer_title: $offer_title,\n    offer_price: $offer_price,\n    comment: $comment){\n    id\n  }\n}"): (typeof documents)["mutation feedback(\n  $external_id:Int,\n  $site_id:Int!,\n  $type:String!,\n  $client_name:String,\n  $client_phone:String!,\n  $client_age:String,\n  $client_region:String,\n  $client_vehicle_mark:String,\n  $client_vehicle_model:String,\n  $client_vehicle_run:String,\n  $client_vehicle_year:String,\n  $client_vehicle_body_type: String,\n  $client_vehicle_price: String,\n  $client_vehicle_owners: String,\n  $client_vehicle_gearbox: String,\n  $client_vehicle_engine: String,\n  $credit_initial_fee:String,\n  $credit_period:String,\n  $utm_source:String,\n  $utm_content:String,\n  $utm_medium:String,\n  $utm_campaign:String,\n  $utm_term:String,\n  $offer_title:String,\n  $offer_price:String,\n  $comment:String\n\n){\n  feedback(\n    external_id: $external_id,\n    site_id: $site_id,\n    type: $type,\n    client_name: $client_name,\n    client_phone: $client_phone,\n    client_age: $client_age,\n    client_region: $client_region,\n    client_vehicle_mark: $client_vehicle_mark,\n    client_vehicle_model: $client_vehicle_model,\n    client_vehicle_run: $client_vehicle_run,\n    client_vehicle_year: $client_vehicle_year,\n    client_vehicle_body_type: $client_vehicle_body_type,\n    client_vehicle_price: $client_vehicle_price,\n    client_vehicle_owners: $client_vehicle_owners,\n    client_vehicle_gearbox: $client_vehicle_gearbox,\n    client_vehicle_engine: $client_vehicle_engine,\n    credit_initial_fee: $credit_initial_fee,\n    credit_period: $credit_period,\n    utm_source: $utm_source,\n    utm_content: $utm_content,\n    utm_medium: $utm_medium,\n    utm_campaign: $utm_campaign,\n    utm_term: $utm_term,\n    offer_title: $offer_title,\n    offer_price: $offer_price,\n    comment: $comment){\n    id\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query bank($site_id: Int!, $slug: String!) {\n  bank(site_id: $site_id, slug: $slug) {\n    id\n    name\n    slug\n    rate\n    title\n    image\n    image_car {\n      thumb\n      small\n      thumb_webp\n      small_webp\n    }\n    site_text{\n      ... SiteText\n    }\n  }\n}"): (typeof documents)["\n    query bank($site_id: Int!, $slug: String!) {\n  bank(site_id: $site_id, slug: $slug) {\n    id\n    name\n    slug\n    rate\n    title\n    image\n    image_car {\n      thumb\n      small\n      thumb_webp\n      small_webp\n    }\n    site_text{\n      ... SiteText\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query banks($site_id: Int!) {\n  banks(site_id: $site_id) {\n    ...BankListType\n  }\n}"): (typeof documents)["\n    query banks($site_id: Int!) {\n  banks(site_id: $site_id) {\n    ...BankListType\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query article($site_id: Int! $url: String) {\n    article(site_id: $site_id, url: $url) {\n        id\n        slug\n        page_title\n        long_title\n        short_description\n        description\n        url\n        views\n        video_youtube\n        body\n        createdAt(format:\"d.m.Y\")\n        image_preview{\n            thumb\n        }\n        image_slide{\n            src\n        }\n        image{\n            medium\n            large\n            medium_webp\n            large_webp\n            src\n        }\n\n    }\n}"): (typeof documents)["query article($site_id: Int! $url: String) {\n    article(site_id: $site_id, url: $url) {\n        id\n        slug\n        page_title\n        long_title\n        short_description\n        description\n        url\n        views\n        video_youtube\n        body\n        createdAt(format:\"d.m.Y\")\n        image_preview{\n            thumb\n        }\n        image_slide{\n            src\n        }\n        image{\n            medium\n            large\n            medium_webp\n            large_webp\n            src\n        }\n\n    }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query articleCategory($site_id: Int!, $limit: Int) {\n    articleCategory(site_id: $site_id) {\n        id\n        slug\n        page_title\n        url\n        articles(limit:$limit){\n            id\n            page_title\n            views\n            url\n            createdAt(format:\"d.m.Y\")\n            image_preview{\n                thumb\n                small\n                thumb_webp\n                small_webp\n            }\n        }\n    }\n}"): (typeof documents)["query articleCategory($site_id: Int!, $limit: Int) {\n    articleCategory(site_id: $site_id) {\n        id\n        slug\n        page_title\n        url\n        articles(limit:$limit){\n            id\n            page_title\n            views\n            url\n            createdAt(format:\"d.m.Y\")\n            image_preview{\n                thumb\n                small\n                thumb_webp\n                small_webp\n            }\n        }\n    }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query articlesPaginate($site_id: Int,  $category_url :String, $page: Int, $limit: Int) {\n    articlesPaginate(\n        site_id: $site_id,\n        category_url: $category_url,\n        page: $page\n        limit: $limit\n    ) {\n        data\n        {\n            id\n            page_title\n            views\n            url\n            createdAt(format:\"d.m.Y\")\n            image_preview{\n                thumb\n                small\n                thumb_webp\n                small_webp\n            }\n\n        }\n        last_page\n    }\n}"): (typeof documents)["query articlesPaginate($site_id: Int,  $category_url :String, $page: Int, $limit: Int) {\n    articlesPaginate(\n        site_id: $site_id,\n        category_url: $category_url,\n        page: $page\n        limit: $limit\n    ) {\n        data\n        {\n            id\n            page_title\n            views\n            url\n            createdAt(format:\"d.m.Y\")\n            image_preview{\n                thumb\n                small\n                thumb_webp\n                small_webp\n            }\n\n        }\n        last_page\n    }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query dealer($site_id: Int!, $slug: String!) {\n  dealer(site_id: $site_id,  slug: $slug) {\n    ...DealerPage\n  }\n}"): (typeof documents)["\n    query dealer($site_id: Int!, $slug: String!) {\n  dealer(site_id: $site_id,  slug: $slug) {\n    ...DealerPage\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query dealers($site_id: Int!) {\n  dealers(site_id: $site_id) {\n    ...DealerList\n  }\n}"): (typeof documents)["\n    query dealers($site_id: Int!) {\n  dealers(site_id: $site_id) {\n    ...DealerList\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query dealersContact($site_id: Int!) {\n  dealers(site_id: $site_id) {\n    ...DealerContact\n  }\n}"): (typeof documents)["\n    query dealersContact($site_id: Int!) {\n  dealers(site_id: $site_id) {\n    ...DealerContact\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query folders($site_id: Int!, $mark_id: Int, $mark_slug: String, $category:String) {\n  folders(site_id: $site_id, mark_id: $mark_id, mark_slug: $mark_slug, category: $category) {\n    id,\n    title,\n    title_rus,\n    slug,\n    offers_count\n  }\n}"): (typeof documents)["query folders($site_id: Int!, $mark_id: Int, $mark_slug: String, $category:String) {\n  folders(site_id: $site_id, mark_id: $mark_id, mark_slug: $mark_slug, category: $category) {\n    id,\n    title,\n    title_rus,\n    slug,\n    offers_count\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query generations($site_id: Int!, $folder_id: Int, $mark_slug: String, $category: String,  $folder_slug: String) {\n    generations(site_id: $site_id, folder_id: $folder_id, category: $category, mark_slug: $mark_slug, folder_slug: $folder_slug) {\n        ... GenerationType\n    }\n}"): (typeof documents)["\n    query generations($site_id: Int!, $folder_id: Int, $mark_slug: String, $category: String,  $folder_slug: String) {\n    generations(site_id: $site_id, folder_id: $folder_id, category: $category, mark_slug: $mark_slug, folder_slug: $folder_slug) {\n        ... GenerationType\n    }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query markFolderGeneration($site_id: Int! $category: String) {\n    markFolderGeneration(site_id: $site_id, category: $category) {\n        id,\n        title,\n        slug,\n        offers_count,\n        folders {\n            id,\n            title,\n            slug,\n            offers_count,\n            generations {\n                ... GenerationType\n            }\n        }\n    }\n}"): (typeof documents)["\n    query markFolderGeneration($site_id: Int! $category: String) {\n    markFolderGeneration(site_id: $site_id, category: $category) {\n        id,\n        title,\n        slug,\n        offers_count,\n        folders {\n            id,\n            title,\n            slug,\n            offers_count,\n            generations {\n                ... GenerationType\n            }\n        }\n    }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query marks($site_id: Int! $category: String) {\n  marks(site_id: $site_id, category: $category) {\n    id,\n    title,\n    slug,\n    offers_count,\n  }\n}"): (typeof documents)["query marks($site_id: Int! $category: String) {\n  marks(site_id: $site_id, category: $category) {\n    id,\n    title,\n    slug,\n    offers_count,\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query offer($site_id: Int!, $mark_slug: String, $folder_slug: String!, $external_id: Int!, $dateFormat: String) {\n  offer(site_id: $site_id, mark_slug: $mark_slug, folder_slug: $folder_slug, external_id: $external_id) {\n    ... OfferPage\n  }\n}"): (typeof documents)["\n    query offer($site_id: Int!, $mark_slug: String, $folder_slug: String!, $external_id: Int!, $dateFormat: String) {\n  offer(site_id: $site_id, mark_slug: $mark_slug, folder_slug: $folder_slug, external_id: $external_id) {\n    ... OfferPage\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query offerFilters(\n  $site_id: Int,\n  $category: String,\n  $mark_slug_array: [String],\n  $folder_slug_array: [String],\n  $generation_slug_array: [String],\n  $engine_type_id_array: [Int],\n  $body_type_id_array: [Int],\n  $gearbox_id_array: [Int],\n  $drive_type_id_array: [Int],\n  $owner_id_array:[Int],\n  $year_from: Int,\n  $year_to: Int,\n  $price_from: Int,\n  $price_to: Int,\n  $url: String\n) {\n  offerFilters(\n    site_id: $site_id,\n    mark_slug_array: $mark_slug_array,\n    folder_slug_array: $folder_slug_array,\n    generation_slug_array: $generation_slug_array,\n    engine_type_id_array: $engine_type_id_array,\n    body_type_id_array: $body_type_id_array,\n    gearbox_id_array: $gearbox_id_array,\n    drive_type_id_array: $drive_type_id_array,\n    owner_id_array: $owner_id_array,\n    year_from: $year_from,\n    year_to: $year_to,\n    price_from: $price_from,\n    price_to: $price_to,\n    category: $category,\n    url:$url\n  )\n  {\n    ... OfferFilterValues\n  }\n}"): (typeof documents)["\n    query offerFilters(\n  $site_id: Int,\n  $category: String,\n  $mark_slug_array: [String],\n  $folder_slug_array: [String],\n  $generation_slug_array: [String],\n  $engine_type_id_array: [Int],\n  $body_type_id_array: [Int],\n  $gearbox_id_array: [Int],\n  $drive_type_id_array: [Int],\n  $owner_id_array:[Int],\n  $year_from: Int,\n  $year_to: Int,\n  $price_from: Int,\n  $price_to: Int,\n  $url: String\n) {\n  offerFilters(\n    site_id: $site_id,\n    mark_slug_array: $mark_slug_array,\n    folder_slug_array: $folder_slug_array,\n    generation_slug_array: $generation_slug_array,\n    engine_type_id_array: $engine_type_id_array,\n    body_type_id_array: $body_type_id_array,\n    gearbox_id_array: $gearbox_id_array,\n    drive_type_id_array: $drive_type_id_array,\n    owner_id_array: $owner_id_array,\n    year_from: $year_from,\n    year_to: $year_to,\n    price_from: $price_from,\n    price_to: $price_to,\n    category: $category,\n    url:$url\n  )\n  {\n    ... OfferFilterValues\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query offerUrl(\n    $site_id: Int,\n    $url: String\n) {\n    offerUrl(\n        site_id: $site_id\n        url: $url\n    )\n    {\n        __typename\n        ... on OfferUrlType {\n            ... OfferUrl\n        }\n        ... on OfferUrlFilterPaginationType {\n            ... OfferUrlFilterPagination\n        }\n    }\n}"): (typeof documents)["\n    query offerUrl(\n    $site_id: Int,\n    $url: String\n) {\n    offerUrl(\n        site_id: $site_id\n        url: $url\n    )\n    {\n        __typename\n        ... on OfferUrlType {\n            ... OfferUrl\n        }\n        ... on OfferUrlFilterPaginationType {\n            ... OfferUrlFilterPagination\n        }\n    }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query offers(\n    $site_id: Int,\n    $page: Int,\n    $limit: Int,\n    $category: String,\n    $mark_slug_array: [String],\n    $folder_slug_array: [String],\n    $external_id_array: [Int],\n    $sort: String,\n    $except_external_id: Int,\n    $generation_slug_array: [String],\n    $engine_type_id_array: [Int],\n    $body_type_id_array: [Int],\n    $gearbox_id_array: [Int],\n    $drive_type_id_array: [Int],\n    $owner_id_array:[Int],\n    $year_from: Int,\n    $year_to: Int,\n    $price_from: Int,\n    $price_to: Int,\n    $set: [String],\n    $url: String,\n    $dateFormat: String\n) {\n    offers(\n        page: $page,\n        limit: $limit,\n        site_id: $site_id,\n        mark_slug_array: $mark_slug_array,\n        folder_slug_array: $folder_slug_array,\n        external_id_array: $external_id_array,\n        sort: $sort,\n        except_external_id:$except_external_id,\n        generation_slug_array: $generation_slug_array,\n        engine_type_id_array: $engine_type_id_array,\n        body_type_id_array: $body_type_id_array,\n        gearbox_id_array: $gearbox_id_array,\n        drive_type_id_array: $drive_type_id_array,\n        owner_id_array: $owner_id_array,\n        year_from: $year_from,\n        year_to: $year_to,\n        price_from: $price_from,\n        price_to: $price_to,\n        category: $category,\n        set: $set,\n        url:$url\n    ) {\n        ... OfferPagination\n    }\n}"): (typeof documents)["\n    query offers(\n    $site_id: Int,\n    $page: Int,\n    $limit: Int,\n    $category: String,\n    $mark_slug_array: [String],\n    $folder_slug_array: [String],\n    $external_id_array: [Int],\n    $sort: String,\n    $except_external_id: Int,\n    $generation_slug_array: [String],\n    $engine_type_id_array: [Int],\n    $body_type_id_array: [Int],\n    $gearbox_id_array: [Int],\n    $drive_type_id_array: [Int],\n    $owner_id_array:[Int],\n    $year_from: Int,\n    $year_to: Int,\n    $price_from: Int,\n    $price_to: Int,\n    $set: [String],\n    $url: String,\n    $dateFormat: String\n) {\n    offers(\n        page: $page,\n        limit: $limit,\n        site_id: $site_id,\n        mark_slug_array: $mark_slug_array,\n        folder_slug_array: $folder_slug_array,\n        external_id_array: $external_id_array,\n        sort: $sort,\n        except_external_id:$except_external_id,\n        generation_slug_array: $generation_slug_array,\n        engine_type_id_array: $engine_type_id_array,\n        body_type_id_array: $body_type_id_array,\n        gearbox_id_array: $gearbox_id_array,\n        drive_type_id_array: $drive_type_id_array,\n        owner_id_array: $owner_id_array,\n        year_from: $year_from,\n        year_to: $year_to,\n        price_from: $price_from,\n        price_to: $price_to,\n        category: $category,\n        set: $set,\n        url:$url\n    ) {\n        ... OfferPagination\n    }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query regions($site_id: Int!) {\n  regions(site_id: $site_id) {\n    id,\n    title\n  }\n}"): (typeof documents)["query regions($site_id: Int!) {\n  regions(site_id: $site_id) {\n    id,\n    title\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query seoTags($site_id: Int!, $url: String!) {\n    seoTag(site_id: $site_id, url: $url) {\n       ... SeoTag\n    }\n}"): (typeof documents)["\n    query seoTags($site_id: Int!, $url: String!) {\n    seoTag(site_id: $site_id, url: $url) {\n       ... SeoTag\n    }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query settings($site_id: Int!) {\n    settings(site_id: $site_id) {\n        id,\n        settings{\n            key,\n            value\n        }\n    }\n}"): (typeof documents)["query settings($site_id: Int!) {\n    settings(site_id: $site_id) {\n        id,\n        settings{\n            key,\n            value\n        }\n    }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query siteConfig(\n        $site_id:Int\n        $category:String\n    ){\n        settings(\n            site_id: $site_id) {\n            id\n            settings{\n                key\n                value\n            }\n        }\n        markFolderGeneration(site_id: $site_id, category: $category) {\n            id\n            title\n            title_rus\n            slug\n            offers_count\n            folders{\n                id\n                title\n                title_rus\n                slug\n                offers_count\n                generations{\n                    id\n                    name\n                    slug\n                    year_begin\n                    year_end\n                    offers_count\n                }\n            }\n        }\n    }"): (typeof documents)["\n    query siteConfig(\n        $site_id:Int\n        $category:String\n    ){\n        settings(\n            site_id: $site_id) {\n            id\n            settings{\n                key\n                value\n            }\n        }\n        markFolderGeneration(site_id: $site_id, category: $category) {\n            id\n            title\n            title_rus\n            slug\n            offers_count\n            folders{\n                id\n                title\n                title_rus\n                slug\n                offers_count\n                generations{\n                    id\n                    name\n                    slug\n                    year_begin\n                    year_end\n                    offers_count\n                }\n            }\n        }\n    }"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query slides($site_id: Int!) {\n  slides(site_id: $site_id) {\n    id,\n    title,\n    body,\n    link,\n    image {\n      slide_1x,\n      slide_2x,\n      slide_1x_webp,\n      slide_2x_webp,\n      src\n    },\n    image_element {\n      thumb,\n      small,\n      thumb_webp,\n      small_webp,\n      src\n    }\n  }\n}"): (typeof documents)["query slides($site_id: Int!) {\n  slides(site_id: $site_id) {\n    id,\n    title,\n    body,\n    link,\n    image {\n      slide_1x,\n      slide_2x,\n      slide_1x_webp,\n      slide_2x_webp,\n      src\n    },\n    image_element {\n      thumb,\n      small,\n      thumb_webp,\n      small_webp,\n      src\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query stationCategory($site_id: Int!) {\n    stationCategory(site_id: $site_id) {\n        id,\n        title,\n        stations{\n            id\n            title\n            price\n            image{\n                medium\n                large\n                medium_webp\n                large_webp\n            }\n        }\n    }\n}"): (typeof documents)["query stationCategory($site_id: Int!) {\n    stationCategory(site_id: $site_id) {\n        id,\n        title,\n        stations{\n            id\n            title\n            price\n            image{\n                medium\n                large\n                medium_webp\n                large_webp\n            }\n        }\n    }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query stories(\n  $site_id: Int!\n) {\n  stories(\n    site_id: $site_id,\n  ) {\n    ... Story\n  }\n}"): (typeof documents)["\n    query stories(\n  $site_id: Int!\n) {\n  stories(\n    site_id: $site_id,\n  ) {\n    ... Story\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query storyContents(\n    $site_id: Int!,\n    $story_id:Int\n) {\n    storyContents(\n        site_id: $site_id,\n        story_id: $story_id,\n    ) {\n        ... StoryContent\n    }\n}"): (typeof documents)["\n    query storyContents(\n    $site_id: Int!,\n    $story_id:Int\n) {\n    storyContents(\n        site_id: $site_id,\n        story_id: $story_id,\n    ) {\n        ... StoryContent\n    }\n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;