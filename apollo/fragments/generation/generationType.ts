export const GenerationType = gql`fragment GenerationType on Generation {
    id
    name
    year_begin
    year_end
    slug,
    offers_count
}`;
