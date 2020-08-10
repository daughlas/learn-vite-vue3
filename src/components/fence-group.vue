<template>
  <div class="container">
    <template v-for="(fence, index) in fenceGroup.fences">
      <FenceComponent :key="index" :fence="fence"></FenceComponent>
    </template>
  </div>
</template>

<script>
import FenceComponent from './fence.vue'
export default {
  components: {
    FenceComponent
  },
  props: {
    fenceGroup: Array
  },
  setup(props) {
    console.log(props.fenceGroup)
  }
}
</script>

<style scoped>

</style>