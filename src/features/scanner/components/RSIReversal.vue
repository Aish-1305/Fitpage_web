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
          {{ myData.name }}
        </div>
        <div style="color: #34b71f; font-family: sans-serif; font-size: 12px">
           {{ myData.tag }}
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
            margin-bottom: 10px;
          "
        >
           {{ myData.criteria[0].text}}
          <span
            @click="onClickEventFirst"
            style="color: #1686b0; cursor: pointer"
            >({{ myData.criteria[0].variable.$1.values[0]}})</span
          >%
        </div>
        <div
          style="
            color: #ffffff;
            font-family: sans-serif;
            font-size: 14px;
            text-align: left;
            margin-bottom: 10px;
          "
        >
          and
        </div>
        <div
          style="
            color: #ffffff;
            font-family: sans-serif;
            font-size: 14px;
            text-align: left;
            margin-bottom: 10px;
          "
        >
           {{ myData.criteria[1].text}}
          <span
            @click="onClickEventSecond"
            style="color: #1686b0; cursor: pointer"
            >({{ myData.criteria[1].variable.$2.values[0]}})</span
          >
          Vol SMA by
          <span
            @click="onClickEventThird"
            style="color: #1686b0; cursor: pointer"
            >({{ myData.criteria[1].variable.$3.values[0]}})</span
          >
        </div>
        <div
          style="
            color: #ffffff;
            font-family: sans-serif;
            font-size: 14px;
            text-align: left;
            margin-bottom: 10px;
          "
        >
          and
        </div>
        <div
          style="
            color: #ffffff;
            font-family: sans-serif;
            font-size: 14px;
            text-align: left;
          "
        >
        
           {{ myData.criteria[2].text}}
          <span
            @click="onClickEventFourth"
            style="color: #1686b0; cursor: pointer"
            > ({{ myData.criteria[2].variable.$4.default_value}})</span
          >
          greater than 20
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
      type: Object
    }
  },
  data() {
    return {
      search: "",
      rsiData: [],
    };
  },
  watch : {
    // onClickEventFirst() {
    //   console.log("this.myData.name", this.myData.name);
    // },
  }, 
  created: function () {
    console.log("user data from parent component:", this.data, this.searchData);
  },
   mounted() {
    this.rsiData = this.myData;

    // results.map((x) => {
    //         this.teamListingData.push({
    //           name:
    //             x.userDetails[0].firstName + " " + x.userDetails[0].lastName,
    //           mobile: x.userDetails[0].mobile,
    //           email: x.userDetails[0].email,
    //           status: x.userDetails[0].status,
    //         });
    
    console.log('myData :>> ', this.myData , this.rsiData);
  },

  methods: {
    onClickEventFirst() {
      this.$router.push(ROUTES.RSI_PARAMS_ONE);
    },
    onClickEventSecond() {
      this.$router.push(ROUTES.RSI_PARAMS_TWO);
    },
    onClickEventThird() {
      this.$router.push(ROUTES.RSI_PARAMS_THREE);
    },
    onClickEventFourth() {
      this.$router.push(ROUTES.RSI_PERIOD_PARAMS);
    },
  },
};
</script>

<style scoped>
</style>