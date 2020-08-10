<template>
  <div class="container">
    <FenceGroupComponent :fenceGroup="fenceGroup"></FenceGroupComponent>
  </div>
</template>

<script lang="ts">
import FenceGroupComponent from './fence-group.vue'
import { ref } from 'vue'
import {FenceGroup} from '../models/fence-group'

export default {
  components: {
    FenceGroupComponent
  },
  setup() {
    const res = {
      id: 2,
      title: "林间有风自营针织衫",
      subtitle: "秋日冬款，浪漫满屋",
      category_id: 12,
      root_category_id: 2,
      price: "77.00",
      description: null,
      discount_price: "62.00",
      tags: "秋日冬款$浪漫满屋",
      is_test: true,
      online: true,
      sku_list: [
        {
          id: 2,
          price: 77.76,
          discount_price: null,
          online: true,
          title: "金属灰·七龙珠",
          spu_id: 2,
          category_id: 17,
          root_category_id: 3,
          specs: [
            { key_id: 1, key: "颜色", value_id: 45, value: "金属灰" },
            { key_id: 3, key: "图案", value_id: 9, value: "七龙珠" },
            { key_id: 4, key: "尺码", value_id: 14, value: "小号 S" },
          ],
          code: "2$1-45#3-9#4-14",
          stock: 0,
        },
        {
          id: 3,
          price: 66.0,
          discount_price: 59.0,
          online: true,
          title: "青芒色·灌篮高手",
          spu_id: 2,
          category_id: 17,
          root_category_id: 3,
          specs: [
            { key_id: 1, key: "颜色", value_id: 42, value: "青芒色" },
            { key_id: 3, key: "图案", value_id: 10, value: "灌篮高手" },
            { key_id: 4, key: "尺码", value_id: 15, value: "中号 M" },
          ],
          code: "2$1-42#3-10#4-15",
          stock: 995,
        },
        {
          id: 4,
          price: 88.0,
          discount_price: null,
          online: true,
          title: "青芒色·圣斗士",
          spu_id: 2,
          category_id: 17,
          root_category_id: 3,
          specs: [
            { key_id: 1, key: "颜色", value_id: 42, value: "青芒色" },
            { key_id: 3, key: "图案", value_id: 11, value: "圣斗士" },
            { key_id: 4, key: "尺码", value_id: 16, value: "大号  L" },
          ],
          code: "2$1-42#3-11#4-16",
          stock: 8,
        },
        {
          id: 5,
          price: 77.0,
          discount_price: 59.0,
          online: true,
          title: "橘黄色·七龙珠",
          spu_id: 2,
          category_id: 17,
          root_category_id: 3,
          specs: [
            { key_id: 1, key: "颜色", value_id: 44, value: "橘黄色" },
            { key_id: 3, key: "图案", value_id: 9, value: "七龙珠" },
            { key_id: 4, key: "尺码", value_id: 14, value: "小号 S" },
          ],
          code: "2$1-44#3-9#4-14",
          stock: 0,
        },
      ],
      sketch_spec_id: 1,
      default_sku_id: 2,
    }
    const fenceGroup = new FenceGroup(res)
    fenceGroup.initFences()
    return {
      fenceGroup
    }
  }
}
</script>

<style scoped>
  .container {
    width: 640px;
    margin: 0 auto;
    border: 1px solid #aaa;
  }
</style>