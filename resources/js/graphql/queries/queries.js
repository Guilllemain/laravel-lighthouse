import gql from 'graphql-tag'

const categoriesQuery = gql`
    query {
        categories {
            id
            name
        }
    }
`

const booksQuery = gql`
    query($featured: Boolean) {
        books(featured: $featured) {
            id
            title
            author
            featured
            image
        }
    }
`

const categoryQuery = gql`
    query($id: ID!) {
        category(id: $id) {
            id
            name
            books {
                id
                title
                author
                image
            }
        }
    }
`

const bookQuery = gql`
    query($id: ID!) {
        book(id: $id) {
            id
            title
            author
            image
            link
            description
            category {
                id
                name
            }
        }
    }
`

export { categoriesQuery, booksQuery, categoryQuery, bookQuery }