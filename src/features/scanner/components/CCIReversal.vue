<template>
  <div
    style="
      width: 100%;
      max-width: 420px;
      padding: 15px;
      margin: auto;
      list-style: none;
      background-color: #01131b;
      min-height: 300px;
    "
  >
    <div style="min-height: 60px; background-color: #1686b0">
      <div style="padding: 10px; text-align: left; margin-left: 5px">
        <div style="color: #ffffff; font-family: sans-serif; font-size: 14px">
          {{myData.name}}
        </div>
        <div style="color: #f3392f; font-family: sans-serif; font-size: 12px">
         {{myData.tag}}
        </div>
      </div>
    </div>
    <div>
      <div style="padding: 10px; text-align: left">
        <div
          style="
            color: #ffffff;
            font-family: sans-serif;
            font-size: 14px;
            text-align: left;
          "
        >
          CCI
          <span @click="onClickEventOne" style="color: #1686b0; cursor: pointer"
            >({{myData.criteria[0].variable.$1.default_value}})</span
          >
          crosses below
          <span @click="onClickEventTwo" style="color: #1686b0; cursor: pointer"
            >({{myData.criteria[0].variable.$2.values[0]}})</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ROUTES } from "../../../constants/index";

export default {
  props: {
    myData: {
      type: Object,
    },
  },
  data() {
    return {
      search: "",
      csiData: [],
    };
  },
  created: function () {
    console.log("user data from parent component:", this.data, this.searchData);
  },
  mounted() {
    console.log('this.myData :>> ', this.myData);
    // this.csiData = this.myData;

  },
  methods: {
    onClickEventOne() {
      this.$router.push(ROUTES.CCI_PERIOD_PARAMS);
    },
    onClickEventTwo() {
      this.$router.push(ROUTES.CCI_ARRAY_PARAMS);
    },
  },
};
</script>

<style scoped>
</style>