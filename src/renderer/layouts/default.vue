<template>
  <div>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <img class="logo" src="~/assets/emblem.svg">
      <a-menu theme="dark"  mode="inline">
        <a-menu-item key="1">
          <nuxt-link to="/">
            <a-icon type="file-word" />
            <span>Документы</span>
          </nuxt-link>
        </a-menu-item>
        <a-menu-item key="2">
          <nuxt-link to="/sotrudniki">
            <a-icon type="team" />
            <span>Сотрудники</span>
          </nuxt-link>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="export" />
          <span>Экспорт</span>
        </a-menu-item>
        <a-menu-item key="4">
          <a-icon type="import" />
          <span>Импорт</span>
        </a-menu-item>
        <a-menu-item key="5">
          <a-icon type="tool" />
          <span>Найстройки</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0" />
        <a-layout-content style="margin: 0 16px">
          <a-breadcrumb style="margin: 16px 0">
            
          </a-breadcrumb>
          <nuxt />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collapsed: true,
    };
  },
}
</script>

<style lang="scss">

  html {
    overflow-y: visible;
  }


  body {
    margin: 0 !important;

    .ant-menu-item span {
      // .nuxt-link-exact-active {
      //   color:  rgba(255,255,255, 0.65) ;
      // }
      // .nuxt-link-active {
      //   color:  rgba(255,255,255, 0.65) ;
      // }
    }

    // .ant-layout-content{
    //   overflow: scroll;
    // }

    #components-layout-demo-side .logo {
      height: 32px;
      margin: 14px;
    }
  }

</style>
