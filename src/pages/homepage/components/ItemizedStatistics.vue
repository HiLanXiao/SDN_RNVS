<template>
  <div id="app">
    <div id="graph">
      <div class="graphOne" ref="graphOne"></div>
      <div class="graphTwo" ref="graphTwo"></div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "ItemizedStatistics",
  data() {
    return {
      graphOne: null,
      graphTwo: null,
      optionOne: {
        title: {
          text: "最近七天链路总带宽统计(统计单位为/天)"
        },
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["8.21", "8.22", "8.23", "8.24", "8.25", "8.26"],
            axisTick: {
              alignWithLabel: true,
              interval: 0
            }
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            type: "bar",
            barWidth: "60%",
            data: [10, 52, 200, 334, 390, 330],
            label: {
              normal: {
                show: true,
                position: "top"
              }
            }
          }
        ]
      },
      optionTwo: {
        title: {
          text: "最近七天链路丢包情况统计(统计单位为/天)"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          bottom: 10,
          left: "center",
          data: ["丢包率>15%", "丢包率>10%", "丢包率>5%", "丢包率<5%"]
        },
        series: [
          {
            name: "链路丢包情况统计",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: true
              }
            },
            data: [
              { value: 335, name: "丢包率>15%" },
              { value: 310, name: "丢包率>10%" },
              { value: 234, name: "丢包率>5%" },
              { value: 135, name: "丢包率<5%" }
            ]
          }
        ]
      }
    };
  },
  methods: {},
  watch: {},
  mounted() {
    this.graphOne = echarts.init(this.$refs.graphOne);
    this.graphOne.setOption(this.optionOne);
    this.graphTwo = echarts.init(this.$refs.graphTwo);
    this.graphTwo.setOption(this.optionTwo);
  }
};
</script>

<style lang="stylus" scoped>
#graph
  display flex
  height 100%
  width 100%
  justify-content space-around
.graphOne
  flex 1
  height 500px
  width 600px
  margin-left 5%
  margin-top 3%
.graphTwo
  flex 1
  height 500px
  width 500px
  margin 2% 5%
  margin-top 3%
.el-header
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
</style>
