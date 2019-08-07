<template>
    <div>
        <div v-for="book of books" :key="book.id"> 
            <a :href="'/book/' + book.id">{{ book.title }}</a>
            <div>{{ book.author }}</div>
            <img :src="book.image" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            books: {
                type: Array,
                required: true
            }
        },
    }
</script>
