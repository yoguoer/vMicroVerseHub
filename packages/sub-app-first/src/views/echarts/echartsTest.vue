<template>
  <vBar
    :data="chartData"
    :options="chartOptions"
    :params="chartParams"
    :height="height"
    :width="width"
    :showCheckbox="false"
    :showTips="false"
    :id="id"
    :loading="loading" />
</template>

<script setup lang="ts" name="BarDemo">
import { vBar }  from 'v-echarts-ui'; // 或者：import { vBar }  from 'v-echarts-ui/common-charts';
import { computed, onMounted, ref } from 'vue';

const id = 'BarDemo';
const chartData = ref({});
const width = '500px'; // 可选
const height = '500px'; // 可选
const loading = ref(true); // 可选
// 可选，不传则使用默认Options
const chartOptions = computed(() => {
  return {
    toolbox: {
      top: 0,
      right: 45, // toolbox的定位位置
    },
    title: {
      show: true,
      text: '条形图',
      x: 'center', //水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
      y: 'top', //垂直安放位置，默认为top，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
    },
    legend: {
      top: 10,
      right: 75,
      padding: [0, 0, 0, 0],
      itemGap: 30,
      itemHeight: 3,
      textStyle: {
        color: '#000000',
        fontSize: 12,
      },
    },
    grid: {
      bottom: 30,
      top: 40,
      left: 25,
      right: 50,
      // grid.left grid.right grid.top grid.bottom grid.width grid.height 决定的是包括了坐标轴标签在内的所有内容所形成的矩形的位置
      // 常用于『防止标签溢出』的场景，标签溢出指的是，标签长度动态变化时，可能会溢出容器或者覆盖其他组件。
      containLabel: true,
    },
    textStyle: {
      fontSize: 14,
    },
    tooltip: {},
    dataset: {},
    xAxis: {
      type: 'category',
      axisLabel: {
        width: 120,
        hideOverlap: false,
        interval: 0,
        overflow: 'break',
        rotate: '10',
        align: 'center',
        verticalAlign: 'top',
      },
    },
  };
});

const chartParams = computed(() => {
  return {
    showToolBox: true, // 显示工具栏
    position: 'top', // 柱状图数字提示位置
    isCross: false, // 柱状图是否为横向,
  };
});

async function getData() {
  try {
    chartData.value = {
      xAxis: [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月',
      ],
      series: [
        {
          name: 2023,
          data: [0.97, 0.97, 1.03, 1.05, 1.05, 1.07, 1.08, 1.09, 1.1, 1.12, 1.14, 1.16],
        },
        {
          name: 2024,
          data: [1.08, 1.11, 1.14, null, null, null, null, null, null, null, null, null],
        },
      ],
      row: [
        {
          month: '2024-01',
        },
        {
          month: '2024-02',
        },
        {
          month: '2024-03',
        },
        {
          month: '2023-04',
        },
        {
          month: '2023-05',
        },
        {
          month: '2023-06',
        },
        {
          month: '2023-07',
        },
        {
          month: '2023-08',
        },
        {
          month: '2023-09',
        },
        {
          month: '2023-10',
        },
        {
          month: '2023-11',
        },
        {
          month: '2023-12',
        },
      ],
      msg: '研发人效指数=单位时间内关闭NPI项目的总标准工时/上述项目的全期间申报工时',
    };
  } catch (error) {
    console.log('🚀 ~ getData ~ error:', error);
  }
}

// 在组件挂载后获取数据
onMounted(() => {
  getData();
});
</script>