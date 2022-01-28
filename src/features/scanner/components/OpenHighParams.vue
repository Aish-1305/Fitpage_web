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
      -1
    </div>
    <div
      style="
        border-bottom: 1px dotted #ececec;
        padding: 10px;
        text-align: left;
        color: #ffffff;
      "
    >
      -2
    </div>
    <div
      style="
        border-bottom: 1px dotted #ececec;
        padding: 10px;
        text-align: left;
        color: #ffffff;
      "
    >
      -3
    </div>
    <div
      style="
        border-bottom: 1px dotted #ececec;
        padding: 10px;
        text-align: left;
        color: #ffffff;
      "
    >
      -5
    </div>
    <div
      style="
        border-bottom: 1px dotted #ececec;
        padding: 10px;
        text-align: left;
        color: #ffffff;
      "
    >
      -10
    </div>

    <!-- <div style="border-bottom: 1px dotted #ececec;">
      <ul>
        <li>
          <div  @click="onClickOpenHigh" style="padding: 10px; text-align: left; margin-left: 5px">
            <div
              style="color: #ffffff; font-family: sans-serif; font-size: 14px"
            >
              Open = High
            </div>
            <div
              style="color: #34b71f; font-family: sans-serif; font-size: 12px"
            >
              Bullish
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div style="border-bottom: 1px dotted #ececec;">
      <ul>
        <li>
          <div @click="onClickCCIReversal"  style="padding: 10px; text-align: left; margin-left: 5px">
            <div
              style="color: #ffffff; font-family: sans-serif; font-size: 14px"
            >
              CCI Reversal
            </div>
            <div
              style="color:  #f3392f;  font-family: sans-serif; font-size: 12px"
            >
              Bearish
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div style="border-bottom: 1px dotted #ececec;">
      <ul>
        <li>
          <div @click="onClickRSIReversal"   style="padding: 10px; text-align: left; margin-left: 5px">
            <div
              style="color: #ffffff; font-family: sans-serif; font-size: 14px"
            >
              RSI Overbought
            </div>
            <div
              style="color: #f3392f; font-family: sans-serif; font-size: 12px"
            >
              Bearish
            </div>
          </div>
        </li>
      </ul>
    </div> -->
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