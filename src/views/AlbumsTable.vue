<template>
  <div class="main-container">
    <appHeader></appHeader>
    <div class="container">
      <search
        @searchQueryChanged="onSearch($event)"
      ></search>
      <appTable
          :searchQuery="searchQuery"
      ></appTable>
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header.vue';
  import Table from '../components/Table.vue';
  import Search from '../components/Search.vue';
    export default {
      name: "AlbumsTable",
      components: {
        appHeader: Header,
        appTable: Table,
        search: Search
      },
      data() {
        return {
          searchQuery: ''
        }
      },
      methods: {
        onSearch(query) {
          this.searchQuery = query;
        }
      }
    }
</script>

<style scoped>
  .main-container {
      background-color: #f2f2f2;
      min-height: 100vh;
  }
</style>
