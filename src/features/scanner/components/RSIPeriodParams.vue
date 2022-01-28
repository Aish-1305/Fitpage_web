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
    <div style="min-height: 60px">
      <div
        style="
          color: #ffffff;
          text-align: left;
          margin-bottom: 10px;
          font-weight: 600;
        "
      >
        RSI
      </div>
      <div style="color: #ffffff; text-align: left; margin-bottom: 10px">
        Set Parameters
      </div>
      <div
        style="
          display: flex;
          padding: 10px;
          text-align: left;
          margin-left: 5px;
          background-color: #ffffff;
          min-height: 60px;
          justify-content: space-between;
          align-items: center;
        "
      >
        <div style="color: #000000; font-family: sans-serif; font-size: 14px">
          Period
        </div>
        <div style="color: #f3392f; font-family: sans-serif; font-size: 12px">
          <input />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
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
  methods: {},
};
</script>

<style scoped>
</style>