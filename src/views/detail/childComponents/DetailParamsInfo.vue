<template>
  <div class="params-info">
    <p>参数信息</p>  
    <div class="size">
      <table v-for="(table,index) in paramsInfo.sizes" :key="index">
        <tr v-for="(tr,indey) in table" :key="indey">
          <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
        </tr>
      </table>
    </div>
    <div class="info">
      <table>
        <tr v-for="(tr,index) in paramsInfo.infos" :key="index">
            <td v-for="(td,indey) in tr" :key="indey">
                {{td}}
            </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    paramsInfo: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped>
    .params-info {
      padding: 5px;
      font-size: 14px;
    }
    .params-info p{
      font-size: 16px;
    }
    .size tr,
    .info tr{
        display: flex;
        width: 100vw;
        height: 34px;
        line-height: 34px;
        border-bottom: 1px solid #f6f6f6;
        color: #333;
    }
    .size tr td {
        flex: 1;
    }
    .info tr{
      color: var(--color-tint);
    }
    .info tr td:first-child {
      width: 25vw;
      color: #333;
    }
</style>