<template>
    <div>
        <h3>{{ book.title }}</h3>
        <div>{{ book.author }}</div>
        <img :src="book.image" alt="">
        <div>{{ book.description }}</div>
    </div>
</template>

<script>
    import { bookQuery } from '../graphql/queries/queries'
    export default {
        props: {
            id: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                book: {}
            }
        },
        apollo: {
            book: {
                query: bookQuery,
                variables() {
                    return {
                        id: this.id
                    }
                }
            } 
        }
    }
</script>
