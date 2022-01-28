import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "StockScanParserMainPage",
      component: () => import("./features/scanner/components/StockScanParserMainPage.vue"),
    },
    {
        path: "/page/top-gainers",
        name: "TopGainers",
        component: () => import("./features/scanner/components/TopGainers.vue"),
        props: true
      },
      {
        path: "/page/open-high",
        name: "OpenHigh",
        component: () => import("./features/scanner/components/OpenHigh.vue"),
        props: true
      },
      {
        path: "/page/intraday-buying",
        name: "IntradayBuying",
        component: () => import("./features/scanner/components/IntradayBuying.vue"),
        props: true
      },
      {
        path: "/page/cci-reversal",
        name: "CCIReversal",
        component: () => import("./features/scanner/components/CCIReversal.vue"),
        props: true
      },
      {
        path: "/page/rsi-reversal",
        name: "RSIReversal",
        component: () => import("./features/scanner/components/RSIReversal.vue"),
        props: true
      },
      {
        path: "/page/open-high-params",
        name: "OpenHighParams",
        component: () => import("./features/scanner/components/OpenHighParams.vue"),
      },
      {
        path: "/page/cci-period-params",
        name: "CCIPeriodParams",
        component: () => import("./features/scanner/components/CCIPeriodParams.vue"),
      },
      {
        path: "/page/cci-array-params",
        name: "CCIArrayParams",
        component: () => import("./features/scanner/components/CCIArrayParams.vue"),
      },
      {
        path: "/page/rsi-params-one",
        name: "RSIParamsOne",
        component: () => import("./features/scanner/components/RSIParamsOne.vue"),
      },
      {
        path: "/page/rsi-params-two",
        name: "RSIParamsTwo",
        component: () => import("./features/scanner/components/RSIParamsTwo.vue"),
      },
      {
        path: "/page/rsi-params-three",
        name: "RSIParamsThree",
        component: () => import("./features/scanner/components/RSIParamsThree.vue"),
      },
      {
        path: "/page/rsi-period-params",
        name: "RSIPeriodParams",
        component: () => import("./features/scanner/components/RSIPeriodParams.vue"),
      },
  ],
});


export default router;
