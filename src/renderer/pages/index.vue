<template>
  <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
    <TableEdit/>
  </div>
</template>

<script>
import { remote } from 'electron'
import TableEdit from '@/components/TableEdit'



export default {
  components: {
    TableEdit,
  },
  data () {
    return {
      externalContent: '',
      collapsed: false,
    }
  },
  methods: {
    openURL (url) {
      remote.shell.openExternal(url)
    }
  }
}
</script>

<style scoped>

</style>
