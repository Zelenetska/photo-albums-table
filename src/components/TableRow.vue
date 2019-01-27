<template>
  <div class="table-row">
    <div class="col id-col">{{ photoData.albumId }}</div>
    <div class="col album-title-col">{{ photoData.albumTitle }}</div>
    <div class="col photo-title-col">{{ photoData.title }}</div>
    <div class="col img-col"><img :src="photoData.thumbnailUrl" alt=""></div>
  </div>
</template>

<script>
    export default {
      name: "TableRow",
      props: {
        photoData: {
          type: Object
        }
      }
    }
</script>

<style scoped>
  img {
    width: 60px;
  }
</style>
