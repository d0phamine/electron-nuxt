<template>
  <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
    <TableEdit/>
  </div>
</template>

<script>
import { remote } from 'electron'

export default {
  data:() => ({
    externalContent: '',
    collapsed: false,
  }),
  methods: {
    openURL (url) {
      remote.shell.openExternal(url)
    }
  }
}
</script>

<style scoped>

</style>
