<template>
  <div class="container">
    <div class="title">
      {{fence.title}}
    </div>
    <div class="specs">
      <template v-for="(cell, index) in fence.cells">
        <span :key="index">{{cell.value}}</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fence: Object
  }
}
</script>

<style scoped>

</style>