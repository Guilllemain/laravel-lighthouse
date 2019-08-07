<template>
      <div>
          <div> 
              <div v-if="$apollo.loading">Loading...</div>
              <ul v-else>
                <li><a @click.prevent="selectedCategory = 'all'" href="#">All</a></li>
                <li><a @click.prevent="selectedCategory = 'featured'" href="#">Featured</a></li>
                <li v-for="category of categories" :key="category.id">
                  <a @click.prevent="selectedCategory = category.id" href="#">{{ category.name }}</a>
                </li>
              </ul>
          </div>
          <book-list-component :books="books"></book-list-component>
      </div>
</template>

<script>
    import gql from 'graphql-tag'
    import { categoriesQuery, categoryQuery, booksQuery } from '../graphql/queries/queries'
    import BookListComponent from './BookListComponent'
    
    export default {
        components: { BookListComponent },
        data() {
            return {
                selectedCategory: 'featured',
                categories: [],
                books: []
            }
        },
        apollo: {
            categories: categoriesQuery,
            books: {
                query() {
                    if (this.selectedCategory === 'all' || this.selectedCategory === 'featured') {
                        return booksQuery
                    }
                    return categoryQuery      
                },
                variables() {
                    if (this.selectedCategory === 'featured') {
                        return {
                            featured: true
                        }
                    } else if (this.selectedCategory !== 'all') {
                        return {
                            id: this.selectedCategory
                        }
                    }
                },
                update: data => data.books || data.category.books
            }
        }
    }
</script>
