# 基本方法

> GIS 地图相关 API 使用

<demo-block>
:::slot source
<gis-map1></gis-map1>
:::

这是一个基础的 GISMAP 例子

:::slot highlight

```vue
<template>
  <el-row type="flex" justify="center">
    <el-col :span="24">
      <GisMap ref="drawMap" :options="mapOption" @markerClick="markerClick"></GisMap>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Component, Vue, Ref, Watch } from 'vue-property-decorator'
import GisMap from '../../packages/GisMap/index.vue'
import { Message } from 'element-ui'
import _ from 'lodash'

@Component({
  components: {
    GisMap
  }
})
export default class GisDemo extends Vue {
  @Ref() readonly drawMap: GisMap
  private mapOption = {
    center: [104.063455, 30.663795],
    zoom: 15,
    // 是否打开编辑模式
    isDraw: false
  }
  private mapvData = [
    { name: '北京', value: 23 },
    { name: '天津', value: 43 },
    { name: '上海', value: 13 },
    { name: '重庆', value: 63 },
    { name: '石家庄', value: 73 },
    { name: '太原', value: 23 },
    { name: '呼和浩特', value: 23 },
    { name: '哈尔滨', value: 13 },
    { name: '长春', value: 23 },
    { name: '沈阳', value: 53 },
    { name: '济南', value: 23 },
    { name: '南京', value: 43 },
    { name: '合肥', value: 23 },
    { name: '杭州', value: 93 },
    { name: '南昌', value: 23 },
    { name: '福州', value: 43 },
    { name: '郑州', value: 23 },
    { name: '武汉', value: 53 },
    { name: '长沙', value: 23 },
    { name: '广州', value: 63 },
    { name: '南宁', value: 23 },
    { name: '西安', value: 33 },
    { name: '银川', value: 23 },
    { name: '兰州', value: 33 },
    { name: '西宁', value: 23 },
    { name: '乌鲁木齐', value: 23 },
    { name: '成都', value: 73 },
    { name: '贵阳', value: 23 },
    { name: '昆明', value: 63 },
    { name: '拉萨', value: 23 },
    { name: '海口', value: 23 }
  ]
  mounted() {
    this.addMarkers()
    this.drawPolygon()
  }
  // 清除标记
  clearMap() {
    this.isLushu = false
    this.drawMap.clearAllOverlay()
  }
  // 重置地图层级
  setMapZoom() {
    this.drawMap.markerZoomAdapter(this.dataArr)
  }
  // marker打点
  addMarkers() {
    this.clearMap()
    this.setMapZoom()
    this.drawMap.addMarkers(this.dataArr)
  }
  //绘制多边形 网格
  drawPolygon() {
    this.clearMap()
    const arr = [
      [
        { lng: 104.05148863688133, lat: 30.65042259716188 },
        { lng: 104.05357936842636, lat: 30.65042259716188 },
        { lng: 104.05357936842636, lat: 30.65222124037372 },
        { lng: 104.05148863688133, lat: 30.65222124037372 },
        { lng: 104.05148863688133, lat: 30.6504225971618 }
      ],

      [
        { lng: 104.05148863688133, lat: 30.65222124037372 },
        { lng: 104.05357936842636, lat: 30.65222124037372 },
        { lng: 104.05357936842636, lat: 30.654019883585562 },
        { lng: 104.05148863688133, lat: 30.654019883585562 },
        { lng: 104.05148863688133, lat: 30.65222124037372 }
      ],

      [
        { lng: 104.05148863688133, lat: 30.654019883585562 },
        { lng: 104.05357936842636, lat: 30.654019883585562 },
        { lng: 104.05357936842636, lat: 30.6558185267974 },
        { lng: 104.05148863688133, lat: 30.6558185267974 },
        { lng: 104.05148863688133, lat: 30.654019883585562 }
      ],

      [
        { lng: 104.05357936842636, lat: 30.65042259716188 },
        { lng: 104.0556700999699, lat: 30.65042259716188 },
        { lng: 104.0556700999699, lat: 30.65222124037372 },
        { lng: 104.05357936842636, lat: 30.65222124037372 },
        { lng: 104.05357936842636, lat: 30.65042259716188 }
      ],

      [
        { lng: 104.05357936842636, lat: 30.65222124037372 },
        { lng: 104.0556700999699, lat: 30.65222124037372 },
        { lng: 104.0556700999699, lat: 30.654019883585562 },
        { lng: 104.05357936842636, lat: 30.654019883585562 },
        { lng: 104.05357936842636, lat: 30.65222124037372 }
      ],

      [
        { lng: 104.05357936842636, lat: 30.654019883585562 },
        { lng: 104.0556700999699, lat: 30.654019883585562 },
        { lng: 104.0556700999699, lat: 30.6558185267974 },
        { lng: 104.05357936842636, lat: 30.6558185267974 },
        { lng: 104.05357936842636, lat: 30.654019883585562 }
      ],

      [
        { lng: 104.0556700999699, lat: 30.65042259716188 },
        { lng: 104.05776083151056, lat: 30.65042259716188 },
        { lng: 104.05776083151056, lat: 30.65222124037372 },
        { lng: 104.0556700999699, lat: 30.65222124037372 },
        { lng: 104.0556700999699, lat: 30.65042259716188 }
      ],

      [
        { lng: 104.0556700999699, lat: 30.65222124037372 },
        { lng: 104.05776083151056, lat: 30.65222124037372 },
        { lng: 104.05776083151056, lat: 30.654019883585562 },
        { lng: 104.0556700999699, lat: 30.654019883585562 },
        { lng: 104.0556700999699, lat: 30.65222124037372 }
      ],
      [
        { lng: 104.0556700999699, lat: 30.654019883585562 },
        { lng: 104.05776083151056, lat: 30.654019883585562 },
        { lng: 104.05776083151056, lat: 30.6558185267974 },
        { lng: 104.0556700999699, lat: 30.6558185267974 },
        { lng: 104.0556700999699, lat: 30.654019883585562 }
      ]
    ]

    this.drawMap.markerZoomAdapter(_.flattenDeep(arr))
    arr.forEach(item => {
      this.drawMap.drawPolygon(item)
    })
  }
  // 划线
  drawPolyline() {
    this.clearMap()
    this.setMapZoom()
    this.drawMap.drawPolyline(this.dataArr)
  }
  // 画区域
  drawOverlay() {
    this.clearMap()
    this.setMapZoom()
    this.drawMap.drawOverlay(this.dataArr)
  }
  // 画圆
  drawCircle() {
    this.clearMap()
    this.setMapZoom()
    this.drawMap.drawCircle({ lng: '104.080989', lat: '30.657689', radius: 500 })
  }
  // 热力地图
  drawHeatMap() {
    this.clearMap()
    const data = [
      { lng: 116.418261, lat: 39.921984, count: 50 },
      { lng: 116.423332, lat: 39.916532, count: 51 },
      { lng: 116.419787, lat: 39.930658, count: 15 },
      { lng: 116.418455, lat: 39.920921, count: 40 },
      { lng: 116.418843, lat: 39.915516, count: 100 },
      { lng: 116.42546, lat: 39.918503, count: 6 },
      { lng: 116.423289, lat: 39.919989, count: 18 },
      { lng: 116.418162, lat: 39.915051, count: 80 },
      { lng: 116.422039, lat: 39.91782, count: 11 },
      { lng: 116.41387, lat: 39.917253, count: 7 },
      { lng: 116.41773, lat: 39.919426, count: 42 },
      { lng: 116.421107, lat: 39.916445, count: 4 },
      { lng: 116.417521, lat: 39.917943, count: 27 },
      { lng: 116.419812, lat: 39.920836, count: 23 },
      { lng: 116.420682, lat: 39.91463, count: 60 },
      { lng: 116.415424, lat: 39.924675, count: 8 },
      { lng: 116.419242, lat: 39.914509, count: 15 },
      { lng: 116.422766, lat: 39.921408, count: 25 },
      { lng: 116.421674, lat: 39.924396, count: 21 },
      { lng: 116.427268, lat: 39.92267, count: 1 },
      { lng: 116.417721, lat: 39.920034, count: 51 },
      { lng: 116.412456, lat: 39.92667, count: 7 },
      { lng: 116.420432, lat: 39.919114, count: 11 },
      { lng: 116.425013, lat: 39.921611, count: 35 },
      { lng: 116.418733, lat: 39.931037, count: 22 },
      { lng: 116.419336, lat: 39.931134, count: 4 },
      { lng: 116.413557, lat: 39.923254, count: 5 },
      { lng: 116.418367, lat: 39.92943, count: 3 },
      { lng: 116.424312, lat: 39.919621, count: 100 },
      { lng: 116.423874, lat: 39.919447, count: 87 },
      { lng: 116.424225, lat: 39.923091, count: 32 },
      { lng: 116.417801, lat: 39.921854, count: 44 },
      { lng: 116.417129, lat: 39.928227, count: 21 },
      { lng: 116.426426, lat: 39.922286, count: 80 },
      { lng: 116.421597, lat: 39.91948, count: 32 },
      { lng: 116.423895, lat: 39.920787, count: 26 },
      { lng: 116.423563, lat: 39.921197, count: 17 },
      { lng: 116.417982, lat: 39.922547, count: 17 },
      { lng: 116.426126, lat: 39.921938, count: 25 },
      { lng: 116.42326, lat: 39.915782, count: 100 },
      { lng: 116.419239, lat: 39.916759, count: 39 },
      { lng: 116.417185, lat: 39.929123, count: 11 },
      { lng: 116.417237, lat: 39.927518, count: 9 },
      { lng: 116.417784, lat: 39.915754, count: 47 },
      { lng: 116.420193, lat: 39.917061, count: 52 },
      { lng: 116.422735, lat: 39.915619, count: 100 },
      { lng: 116.418495, lat: 39.915958, count: 46 },
      { lng: 116.416292, lat: 39.931166, count: 9 },
      { lng: 116.419916, lat: 39.924055, count: 8 },
      { lng: 116.42189, lat: 39.921308, count: 11 },
      { lng: 116.413765, lat: 39.929376, count: 3 },
      { lng: 116.418232, lat: 39.920348, count: 50 },
      { lng: 116.417554, lat: 39.930511, count: 15 },
      { lng: 116.418568, lat: 39.918161, count: 23 },
      { lng: 116.413461, lat: 39.926306, count: 3 },
      { lng: 116.42232, lat: 39.92161, count: 13 },
      { lng: 116.4174, lat: 39.928616, count: 6 },
      { lng: 116.424679, lat: 39.915499, count: 21 },
      { lng: 116.42171, lat: 39.915738, count: 29 },
      { lng: 116.417836, lat: 39.916998, count: 99 },
      { lng: 116.420755, lat: 39.928001, count: 10 },
      { lng: 116.414077, lat: 39.930655, count: 14 },
      { lng: 116.426092, lat: 39.922995, count: 16 },
      { lng: 116.41535, lat: 39.931054, count: 15 },
      { lng: 116.413022, lat: 39.921895, count: 13 },
      { lng: 116.415551, lat: 39.913373, count: 17 },
      { lng: 116.421191, lat: 39.926572, count: 1 },
      { lng: 116.419612, lat: 39.917119, count: 9 },
      { lng: 116.418237, lat: 39.921337, count: 54 },
      { lng: 116.423776, lat: 39.921919, count: 26 },
      { lng: 116.417694, lat: 39.92536, count: 17 },
      { lng: 116.415377, lat: 39.914137, count: 19 },
      { lng: 116.417434, lat: 39.914394, count: 43 },
      { lng: 116.42588, lat: 39.922622, count: 27 },
      { lng: 116.418345, lat: 39.919467, count: 8 },
      { lng: 116.426883, lat: 39.917171, count: 3 },
      { lng: 116.423877, lat: 39.916659, count: 34 },
      { lng: 116.415712, lat: 39.915613, count: 14 },
      { lng: 116.419869, lat: 39.931416, count: 12 },
      { lng: 116.416956, lat: 39.925377, count: 11 },
      { lng: 116.42066, lat: 39.925017, count: 38 },
      { lng: 116.416244, lat: 39.920215, count: 91 },
      { lng: 116.41929, lat: 39.915908, count: 54 },
      { lng: 116.422116, lat: 39.919658, count: 21 },
      { lng: 116.4183, lat: 39.925015, count: 15 },
      { lng: 116.421969, lat: 39.913527, count: 3 },
      { lng: 116.422936, lat: 39.921854, count: 24 },
      { lng: 116.41905, lat: 39.929217, count: 12 },
      { lng: 116.424579, lat: 39.914987, count: 57 },
      { lng: 116.42076, lat: 39.915251, count: 70 },
      { lng: 116.425867, lat: 39.918989, count: 8 }
    ]
    this.drawMap.markerZoomAdapter(data)
    this.drawMap.drawHeatMap({ data: data, heatMax: 100 })
  }
  // 绘制轨迹
  drawTrajectory() {
    this.clearMap()
    this.setMapZoom()
    this.drawMap.drawTrajectory(this.dataArr)
  }
  // 海量点
  drawPointCollection() {
    this.clearMap()
    const opt = {
      size: BMAP_POINT_SIZE_SMALL,
      shape: BMAP_POINT_SHAPE_CIRCLE,
      color: '#1002e3'
    }
    this.drawMap.drawPointCollection(this.dataArr, opt)
  }
  // mapv
  drawBaiduMapLayer() {
    this.clearMap()
    const options = {
      fillStyle: 'rgba(55, 50, 250, 0.8)',
      shadowColor: 'rgba(255, 250, 50, 1)',
      shadowBlur: 20,
      size: 40,
      globalAlpha: 0.5,
      label: {
        show: true,
        fillStyle: 'white'
      },
      gradient: {
        0.15: 'rgb(0,0,255)',
        0.35: 'rgb(0,255,0)',
        0.55: 'rgb(255,49,0)',
        0.85: 'yellow',
        1.0: 'rgb(255,0,0)'
      },
      draw: 'grid',
      methods: {
        click: function(item) {
          console.log(item)
        }
      }
    }
    this.drawMap.drawBaiduMapLayer(this.mapvData, options)
  }
  // mapv
  drawBaiduMapLayer2() {
    this.clearMap()
    const options = {
      fillStyle: 'rgba(255, 50, 50, 0.6)',
      shadowColor: 'rgba(255, 50, 50, 1)',
      shadowBlur: 30,
      globalCompositeOperation: 'lighter',
      methods: {
        click: function(item) {
          console.log(item)
        }
      },
      size: 5,
      draw: 'simple'
    }
    this.drawMap.drawBaiduMapLayer(this.mapvData, options)
  }
  // mapv
  drawBaiduMapLayer3() {
    this.clearMap()
    const options = {
      size: 13,
      gradient: { 0.25: 'rgb(0,0,255)', 0.55: 'rgb(0,255,0)', 0.85: 'yellow', 1.0: 'rgb(255,0,0)' },
      max: 100,
      draw: 'heatmap'
    }
    this.drawMap.drawBaiduMapLayer(this.mapvData, options)
  }
  // 启动回放功能
  drawLushu() {
    const option = {
      pos: {
        right: '10px',
        top: '10px'
      },
      btns: [
        { label: '实时', click: this.lushuReal },
        { label: '回放', click: this.lushuStart },
        { label: '停止', click: this.lushuStop },
        { label: '暂停', click: this.lushuPause }
      ]
    }
    this.isLushu = true
    this.drawMap.drawPlayBackBtn(option)
    this.drawMap.drawLushu(this.dataArr)
  }
  // 实时
  lushuReal() {
    this.drawMap.lushuReal()
    this.lushuStatus = 'real'
  }
  // 回放
  lushuStart() {
    this.drawMap.lushuStart()
    this.lushuStatus = 'run'
  }
  // 暂停
  lushuPause() {
    this.drawMap.lushuPause()
    this.lushuStatus = 'pause'
  }
  // 停止
  lushuStop() {
    this.drawMap.lushuStop()
    this.lushuStatus = 'stop'
  }
}
</script>
```

:::
</demo-block>

## `打点-addMarkers()`

- 类型: `Function{}(data: [])`

地图打点

`addMarkers`参数字段使用说明

lng-经度

- 类型: `string`

lat-纬度

- 类型: `string`

dataObj-展示 tooltip 信息

- 类型: `object`

例子：

```ts
this.drawMap.addMarkers([
  { lng: '104.080989', lat: '30.657689', dataObj: { name: '张三', local: '成都XXX区' } }
])
```

## `绘制多边形-drawPolygon()`

- 类型: `Function{}(data: [])`

绘制多边形

`drawPolygon`参数字段使用说明

lng-经度

- 类型: `string`

lat-纬度

- 类型: `string`

例子：

```ts
this.drawMap.drawPolygon([
  [
    { lng: 104.0556700999699, lat: 30.65222124037372 },
    { lng: 104.05776083151056, lat: 30.65222124037372 },
    { lng: 104.05776083151056, lat: 30.654019883585562 },
    { lng: 104.0556700999699, lat: 30.654019883585562 },
    { lng: 104.0556700999699, lat: 30.65222124037372 }
  ],
  [
    { lng: 104.0556700999699, lat: 30.654019883585562 },
    { lng: 104.05776083151056, lat: 30.654019883585562 },
    { lng: 104.05776083151056, lat: 30.6558185267974 },
    { lng: 104.0556700999699, lat: 30.6558185267974 },
    { lng: 104.0556700999699, lat: 30.654019883585562 }
  ]
])
```

## `绘制线段-drawPolyline()`

- 类型: `Function{}(data: [])`

绘制线段

`drawPolyline`参数字段使用说明

lng-经度

- 类型: `string`

lat-纬度

- 类型: `string`

例子：

```ts
this.drawMap.drawPolyline([
  { lng: '104.080989', lat: '30.657689' },
  { lng: '104.055731', lat: '30.667648' }
])
```

## `绘制区域-drawOverlay()`

- 类型: `Function{}(data: [])`

绘制区域

`drawOverlay`参数字段使用说明

lng-经度

- 类型: `string`

lat-纬度

- 类型: `string`

例子：

```ts
this.drawMap.drawOverlay([
  { lng: '104.080989', lat: '30.657689' },
  { lng: '104.055731', lat: '30.667648' }
])
```

## `绘制圆-drawCircle()`

- 类型: `Function{}(obj: {})`

绘制区域

`drawCircle`参数字段使用说明

lng-经度

- 类型: `string`

lat-纬度

- 类型: `string`

radius-半径

- 类型: `number`
-

例子：

```ts
this.drawMap.drawCircle({ lng: '104.080989', lat: '30.657689', radius: 500 })
```

## `热力图-drawHeatMap()`

- 类型: `Function{}(obj: {})`

绘制区域

`drawHeatMap`参数字段使用说明

data-热力点数据

- 类型: `string`

heatMax-热力点最大值

- 类型: `number`
-

例子：

```ts
this.drawMap.drawHeatMap({
  data: [
    { lng: 116.418261, lat: 39.921984, count: 50 },
    { lng: 116.423332, lat: 39.916532, count: 51 }
  ],
  heatMax: 100
})
```

## `绘制轨迹-drawTrajectory()`

- 类型: `Function{}(data: [])`

绘制区域

`drawTrajectory`参数字段使用说明

lng-经度

- 类型: `string`

lat-纬度

- 类型: `string`

dataObj-展示 tooltip 信息

- 类型: `object`

例子：

```ts
this.drawMap.drawTrajectory([
  { lng: '104.080989', lat: '30.657689', dataObj: { name: '张三', local: '成都XXX区' } }
])
```

## `海量点-drawPointCollection()`

- 类型: `Function{}(data: [])`

绘制区域

`drawPointCollection`参数字段使用说明

lng-经度

- 类型: `string`

lat-纬度

- 类型: `string`

dataObj-展示 tooltip 信息

- 类型: `object`

例子：

```ts
this.drawMap.drawPointCollection([
  { lng: '104.080989', lat: '30.657689', dataObj: { name: '张三', local: '成都XXX区' } }
])
```

## `大数据可视化库MAPV-drawBaiduMapLayer()`

- 类型: `Function{}(data: [],opt:{})`

`drawBaiduMapLayer`参数字段使用说明

data-数据

- 类型: `Array`

opt-参数配置

- 类型: `string`

绘制网格例子：

```ts
const options = {
  fillStyle: 'rgba(55, 50, 250, 0.8)',
  shadowColor: 'rgba(255, 250, 50, 1)',
  shadowBlur: 20,
  size: 40,
  globalAlpha: 0.5,
  label: {
    show: true,
    fillStyle: 'white'
  },
  gradient: {
    0.15: 'rgb(0,0,255)',
    0.35: 'rgb(0,255,0)',
    0.55: 'rgb(255,49,0)',
    0.85: 'yellow',
    1.0: 'rgb(255,0,0)'
  },
  draw: 'grid',
  methods: {
    click: function(item) {
      console.log(item)
    }
  }
}
const data = [
  { name: '北京', value: 23 },
  { name: '天津', value: 43 }
]
this.drawMap.drawBaiduMapLayer(data, options)
```

绘制点状例子：

```ts
const options = {
  fillStyle: 'rgba(255, 50, 50, 0.6)',
  shadowColor: 'rgba(255, 50, 50, 1)',
  shadowBlur: 30,
  globalCompositeOperation: 'lighter',
  methods: {
    click: function(item) {
      console.log(item)
    }
  },
  size: 5,
  // updateImmediate: true,
  draw: 'simple'
}
const data = [
  { name: '北京', value: 23 },
  { name: '天津', value: 43 }
]
this.drawMap.drawBaiduMapLayer(data, options)
```

绘制热力图例子：

```ts
const options = {
  size: 13,
  gradient: { 0.25: 'rgb(0,0,255)', 0.55: 'rgb(0,255,0)', 0.85: 'yellow', 1.0: 'rgb(255,0,0)' },
  max: 100,
  draw: 'heatmap'
}
const data = [
  { name: '北京', value: 23 },
  { name: '天津', value: 43 }
]
this.drawMap.drawBaiduMapLayer(data, options)
```

## `开启回放`

### `绘制回放按钮-drawPlayBackBtn()`

- 类型: `Function{}(obj: {})`

绘制回放按钮

`drawPlayBackBtn`参数字段使用说明

pos-按钮位置

- 类型: `object`

btns-按钮选项

- 类型: `Array`

例子：

```ts
const option = {
  pos: {
    right: '10px',
    top: '10px'
  },
  btns: [
    { label: '实时', click: this.lushuReal },
    { label: '回放', click: this.lushuStart },
    { label: '停止', click: this.lushuStop },
    { label: '暂停', click: this.lushuPause }
  ]
}
this.drawMap.drawPlayBackBtn(option)
```

### `创建路书-drawLushu()`

- 类型: `Function{}(data: [])`

绘制回放按钮

`drawLushu`参数字段使用说明

lng-经度

- 类型: `string`

lat-纬度

- 类型: `string`

例子：

```ts
this.drawMap.drawLushu([
  { lng: 116.418261, lat: 39.921984 },
  { lng: 116.423332, lat: 39.916532 }
])
```

### `回放实时状态-lushuReal()`

- 类型: `Function{}()`

回放实时状态

例子：

```ts
this.drawMap.lushuReal()
```

### `回放播放状态-lushuStart()`

- 类型: `Function{}()`

回放实时状态

例子：

```ts
this.drawMap.lushuStart()
```

### `回放停止状态-lushuStop()`

- 类型: `Function{}()`

回放停止状态

例子：

```ts
this.drawMap.lushuStop()
```

### `回放暂停状态-lushuPause()`

- 类型: `Function{}()`

回放暂停状态

例子：

```ts
this.drawMap.lushuPause()
```