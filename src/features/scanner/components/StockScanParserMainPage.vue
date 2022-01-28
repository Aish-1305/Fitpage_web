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
    <div v-for="stockData in stocksDetails" :key="stockData.id">
      <div style="border-bottom: 1px dotted #ececec">
        <ul style="padding: 6px; margin: 0px">
          <li>
            <div
              @click="onClickList(stockData)"
              style="
                padding: 10px;
                text-align: left;
                margin-left: 5px;
                cursor: pointer;
              "
            >
              <div
                style="color: #ffffff; font-family: sans-serif; font-size: 14px"
              >
                {{ stockData.name }}
              </div>
              <div
                :style="
                  stockData.tag === 'Bearish' ? 'color:red' : 'color: #34b71f'
                "
                style="color: #34b71f; font-family: sans-serif; font-size: 12px"
              >
                {{ stockData.tag }}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>

const stocksDetails = [
  {
    id: 1,
    name: "Top gainers",
    tag: "Intraday Bullish",
    color: "green",
    criteria: [
      { type: "plain_text", text: "Sort - %price change in descending order" },
    ],
  },
  {
    id: 2,
    name: "Intraday buying seen in last 15 minutes",
    tag: "Bullish",
    color: "green",
    criteria: [
      { type: "plain_text", text: "Current candle open = current candle high" },
      {
        type: "plain_text",
        text: "Previous candle open = previous candle high",
      },
      {
        type: "plain_text",
        text: "2 previous candle’s open = 2 previous candle’s high",
      },
    ],
  },
  {
    id: 3,
    name: "Open = High",
    tag: "Bullish",
    color: "green",
    criteria: [
      {
        type: "variable",
        text: "Today’s open \u003c yesterday’s low by $1 %",
        variable: { $1: { type: "value", values: [-3, -1, -2, -5, -10] } },
      },
    ],
  },
  {
    id: 4,
    name: "CCI Reversal",
    tag: "Bearish",
    color: "red",
    criteria: [
      {
        type: "variable",
        text: "CCI $1 crosses below $2",
        variable: {
          $1: {
            type: "indicator",
            study_type: "cci",
            parameter_name: "period",
            min_value: 1,
            max_value: 99,
            default_value: 20,
          },
          $2: { type: "value", values: [100, 200] },
        },
      },
    ],
  },
  {
    id: 5,
    name: "RSI Overbought",
    tag: "Bearish",
    color: "red",
    criteria: [
      {
        type: "variable",
        text: "Max of last 5 days close \u003e Max of last 120 days close by $1 %",
        variable: { $1: { type: "value", values: [2, 1, 3, 5] } },
      },
      {
        type: "variable",
        text: "Today's Volume \u003e prev $2 Vol SMA by $3 x",
        variable: {
          $2: { type: "value", values: [10, 5, 20, 30] },
          $3: { type: "value", values: [1.5, 0.5, 1, 2, 3] },
        },
      },
      {
        type: "variable",
        text: "RSI $4 \u003e 20",
        variable: {
          $4: {
            type: "indicator",
            study_type: "rsi",
            parameter_name: "period",
            min_value: 1,
            max_value: 99,
            default_value: 14,
          },
        },
      },
    ],
  },
];
export default {
  components: {},

  data() {
    return {
      stocksDetails,
      id: "",
      selectedDetails: "",
    };
  },
  created: function () {},
  methods: {
    onClickList(details) {
      const { id } = details;
      this.id = id;
      this.selectedDetails = details;

      if (id === 1) {
        this.$router.push({
          name: "TopGainers",
          params: {
            myData: this.selectedDetails,
          },
        });
      }
      if (id === 2) {
        this.$router.push({
          name: "IntradayBuying",
          params: {
            myData: this.selectedDetails,
          },
        });
      }
      if (id === 3) {
        this.$router.push({
          name: "OpenHigh",
          params: {
            myData: this.selectedDetails,
          },
        });
      }
      if (id === 4) {
        this.$router.push({
          name: "CCIReversal",
          params: {
            myData: this.selectedDetails,
          },
        });
      }
      if (id === 5) {
        this.$router.push({
          name: "RSIReversal",
          params: {
            myData: this.selectedDetails,
          },
        });
      }
    },
  },
};
</script>

<style scoped>
</style>