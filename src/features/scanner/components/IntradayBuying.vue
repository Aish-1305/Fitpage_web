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
        <div style="color: #34b71f; font-family: sans-serif; font-size: 12px">
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
            margin-top: 10px;
          "
        >{{myData.criteria[0].text}}
         
        </div>
        <div
          style="
            color: #ffffff;
            font-family: sans-serif;
            font-size: 14px;
            text-align: left;
            margin-top: 10px;
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
            margin-top: 10px;
          "
        >
          {{myData.criteria[1].text}}
        </div>
        <div
          style="
            color: #ffffff;
            font-family: sans-serif;
            font-size: 14px;
            text-align: left;
            margin-top: 10px;
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
            margin-top: 10px;
          "
        >
         {{myData.criteria[2].text}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    myData: {
      type: Object,
    },
  },
  data() {
    return {
      search: "",
    };
  },
  created: function () {
    console.log("user data from parent component:", this.data, this.searchData);
  },
   mounted(){
    console.log('this.myData :>> ', this.myData);
 },
  methods: {},
};
</script>

<style scoped>
</style>