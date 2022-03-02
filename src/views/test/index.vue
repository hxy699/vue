<template>
  <div class="test-wrapper">
    <list-layout>
      <template slot="header">
        <conditions />
      </template>
      <template slot="content">
        <lb-table :column="formData.column" :data="formData.list" :pagination="true" />
      </template>
    </list-layout>
  </div>
</template>

<script>
import { getTestList } from '@/api/test'
import ListLayout from '@/components/ListLayout/index.vue'
import LbTable from '@/components/lb-element-table/src/components/lb-table/lb-table.vue'
import Conditions from './components/conditions/index.vue'
export default {
  components: {
    ListLayout,
    LbTable,
    Conditions
  },
  data() {
    return {
      formData: {
        column: [
          {
            prop: 'nike',
            label: '昵称'
          },
          {
            prop: 'phone',
            label: '手机号'
          },
          {
            prop: 'name',
            label: '真实姓名'
          },
          {
            prop: 'subject',
            label: '所属学科'
          }, {
            prop: 'job',
            label: '职位'
          }, {
            prop: 'year',
            label: '工作年限'
          },
          {
            prop: 'updateTime',
            label: '录入时间'
          },
          {
            prop: 'actions',
            label: '操作',
            render(_, scope) {
              return (<div>
                <el-link type='primary'>查看</el-link>|
                <el-link type='primary'>编辑</el-link>|
                <el-link type='primary'>删除</el-link>
              </div>

              )
            }
          }
        ],
        list: []
      }
    }
  },
  created() {
    getTestList().then((res) => {
      const { code, data } = res
      if (Number(code) === 20000) {
        const { items } = data
        this.formData.list = items
      }
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
