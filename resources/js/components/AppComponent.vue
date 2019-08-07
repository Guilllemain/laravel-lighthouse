<template>
      <div>
          <categories-component></categories-component>
      </div>
</template>

<script>
    import gql from 'graphql-tag'
    import CategoriesComponent from './CategoriesComponent'

    export default {
        components: { CategoriesComponent },
    }
</script>
