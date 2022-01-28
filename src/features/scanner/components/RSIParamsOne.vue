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
  </div>
</template>
<script>
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
  created: function () {
    console.log("user data from parent component:", this.data, this.searchData);
  },
  methods: {},
};
</script>

<style scoped>
</style>