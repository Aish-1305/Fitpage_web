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
    <div
      style="
        border-bottom: 1px dotted #ececec;
        padding: 10px;
        text-align: left;
        color: #ffffff;
      "
    >
      100
    </div>
    <div
      style="border-bottom: 1px dotted #ececec;
    padding: 10px;
    text-align: left;
    color: #ffffff;"
    >
      200
    </div>
  </div>
</template>
<script>
import { ROUTES } from "../../../constants/index";

export default {
  props: {
    data: Array,
    searchData: Array,
    searchText: String,
  },
  data() {
    return {
      search: "",
    };
  },
  created: function () {
    console.log("user data from parent component:", this.data, this.searchData);
  },
  //   components: {
  //     InputSearch: Input.Search
  //   },
  methods: {
    onClickTopGainers() {
      this.$router.push(ROUTES.TOP_GAINER);
    },
    onClickOpenHigh() {
      this.$router.push(ROUTES.OPEN_HIGH);
    },
    onClickIntradayBuying() {
      this.$router.push(ROUTES.INTRADAY_BUYING);
    },
    onClickCCIReversal() {
      this.$router.push(ROUTES.CCI_REVERSAL);
    },
    onClickRSIReversal() {
      this.$router.push(ROUTES.RSI_REVERSAL);
    },
  },
};
</script>

<style scoped>
</style>