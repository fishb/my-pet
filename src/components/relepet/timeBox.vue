<template>
    <group :title="$t('')">
      <datetime v-model="value1" @on-change="change" :title="$t('时间')" @on-cancel="log('cancel')" @on-confirm="onConfirm" @on-hide="log('hide', $event)"></datetime>
    </group>
</template>
<i18n>
'Default format: YYYY-MM-DD':
  zh-CN: 默认格式：YYYY-MM-DD
Format:
  zh-CN: 格式
Start time:
  zh-CN: 开始时间
Placeholder:
  zh-CN: 提示文字
Please select:
  zh-CN: 请选择
Set min-year and max-year:
  zh-CN: 设置开始和结束年份
Years after 2000:
  zh-CN: 2000年以后的时间
Specified template text in Chinese:
  zh-CN: 自定义中文显示模板
Show center button and clear the value:
  zh-CN: 显示中间的清除按钮
Show center button to set date to today:
  zh-CN: 显示中间的设置日期为今天的按钮
Birthday:
  zh-CN: 生日
Chinese:
  zh-CN: 中文
Click me:
  zh-CN: 点我
Custom trigger slot:
  zh-CN: 自定义触发内容
Define range of hours:
  zh-CN: 限定小时范围
'Working hours: 09-18':
  zh-CN: 工作时间为 09-18
Set start-date and end-date:
  zh-CN: 设置开始时间和结束日期
'Click to change value to: 2017-11-11':
  zh-CN: 设置时间为 2017-11-11
Format display value:
  zh-CN: 格式化显示
Toggle format:
  zh-CN: 改变格式
'Custom minute list: every 15 minutes':
  zh-CN: 自定义分钟列表（每15分钟）
Custom hour list:
  zh-CN: 定义小时列表
'Use prop: show.sync (vue^2.3) to control visibility':
  zh-CN: '使用 prop: show.sync 控制显示(vue^2.3)'
Used as a plugin:
  zh-CN: 插件形式调用
Set default-selected-value to 2017-11-11:
  zh-CN: 设置默认选中值为 2017-11-11
'Prop: compute-hours-function':
  zh-CN: 自定义小时列表生成逻辑
'Prop: compute-days-function':
  zh-CN: 自定义日期列表生成逻辑
Toggle readonly:
  zh-CN: 切换 readonly 属性
'Set value: 2017-11-11':
  zh-CN: 设置时间为2017-11-11
Set end-date only:
  zh-CN: 只设置结束时间
</i18n>

<script>
import { Datetime, Group, XButton } from 'vux'
export default {
  components: {
    Datetime,
    Group,
    XButton
  },
  name:'timeBox',
  props:["time"],
  data () {
    return {
      noonValue: '2018-04-13 PM',
      readonly: true,
      minuteListValue: '2017-06-12 09:00',
      hourListValue: '2017-06-12 09:00',
      format: 'YYYY-MM-DD HH:mm',
      value1: '',
      valueReadonly: '',
      value2: '',
      value3: '',
      value3_1: '',
      value4: '',
      value5: '',
      value6: '2016-08-18',
      value7: '',
      value8: '',
      limitHourValue: '',
      startDate: '2015-11-11',
      endDate: '2017-10-11',
      formatValue: '2017-10-11',
      formatValueFunction (val) {
        return val.replace(/-/g, '$')
      },
      value9: '',
      visibility: false,
      computeHoursValue: '',
      computeDaysValue: '',
      computeHoursFunction (date, isToday, generateRange) {
        if (isToday) {
          return generateRange(new Date().getHours(), 23)
        } else {
          return generateRange(0, 23)
        }
      },
      computeDaysFunction (options, generateRange) {
        return [options.month] // if current month is n, days are [n]
      },
      onlySetEndDate: '2017-10-11',
      onlySetEndDateValue: ''
    }
  },
  methods: {
    log (str1, str2 = '') {
      //console.log(str1, str2)
    },
    onConfirm (val) {
      //console.log('on-confirm arg',val)
      //console.log('current value', this.value1)
    },
    showPlugin () {
      this.$vux.datetime.show({
        cancelText: '取消',
        confirmText: '确定',
        format: 'YYYY-MM-DD HH',
        value: '2017-05-20 18',
        onConfirm (val) {
          console.log('plugin confirm', val)
        },
        onShow () {
          console.log('plugin show')
        },
        onHide () {
          console.log('plugin hide')
        }
      })
    },
    toggleFormat () {
      if (this.format === 'YYYY-MM-DD') {
        this.format = 'YYYY-MM-DD HH:mm'
      } else if (this.format === 'YYYY-MM-DD HH:mm') {
        this.format = 'YYYY-MM-DD'
      }
    },
    change (value) {
      console.log(value)
      // childByValue是在父组件on监听的方法
      // 第二个参数this.childValue是需要传的值
      this.$emit('timeValue',value)
    },
    clearValue (value) {
      this.value6 = ''
    },
    clearValue8 (value) {
      this.value8 = ''
    },
    setToday (value) {
      let now = new Date()
      let cmonth = now.getMonth() + 1
      let day = now.getDate()
      if (cmonth < 10) cmonth = '0' + cmonth
      if (day < 10) day = '0' + day
      this.value7 = now.getFullYear() + '-' + cmonth + '-' + day
      console.log('set today ok')
    }
  },
  created(){
    this.value1 = this.time
  },
  mounted(){  
    console.log(this.valueReadonly)
  }
}
</script>

<style scoped lang="less">
.center {
  padding-top: 10px;
  padding-left: 15px;
  color:#fe4f53;
}
.weui-cells:after{
  border-bottom:0;
}
.weui-cell_access .weui-cell__ft:after{
  width:0.25rem !important;
  height:0.25rem !important;
}
.weui-cell_access .weui-cell__ft:after{
  height: 3px !important;
  width: 3px !important;
  border-width: 2px 2px 0 0 !important;
}
</style>