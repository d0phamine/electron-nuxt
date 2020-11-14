<template>
    <div>
        <a-row type="flex">
            <a-col flex="1 1 200px" style="margin-right: 16px">
                <div class="midpanel " :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
                    <a-tabs default-active-key="1" @change="callback">
                    <a-tab-pane key="1" tab="Комиссия по категорированию">
                        <a-button type="primary" icon="edit"  class="addkomisiya">
                            Добавить комиссию
                        </a-button>
                        <TablePlus  :cols="cols"/>
                    </a-tab-pane>
                    <a-tab-pane key="2" tab="Сотрудники комисиии" force-render>
                        Content of Tab Pane 2
                    </a-tab-pane>
                </a-tabs>
                </div>
            </a-col>
            <a-col flex="0 1 300px">
                <div class="sidepanel" :style="{ paddingTop: '24px', background: '#fff', minHeight: '360px' }">
                        <a-page-header
                            style="border-bottom: 1px solid rgb(235, 237, 240);"
                            title="Руководители"
                        />
                        <a-card v-for="item in items" :key="item" hoverable :bordered="false" >
                                <a-card-meta title="Иванов А.А." description="01.02.2012 - 01.02.2016">  
                                <a-avatar
                                    slot="avatar"
                                    src="`~/assets/avatar.png`"
                                />
                                
                                </a-card-meta>
                                <div class="innertext">
                                    <p>• Начальник по органу расследования</p>
                                    <p>• Полковник полиции</p>
                                    <p>• Период нахождения в должности</p>
                                </div>
                        </a-card>
                </div>
                <div class="addrukovod">
                    <a-button type="primary" icon="edit">
                            Добавить руководителя
                    </a-button>
                </div>
            </a-col>
        </a-row>
    </div>
</template>

<script>
export default {
  data: () => ( {
      externalContent: '',
      collapsed: false,
      items: [
          1,2,3,4
      ],
      cols: [
        {
            title: 'имя',
            dataIndex: 'name',
            width: '25%',
            scopedSlots: { customRender: 'name' },
        },
        {
            title: 'возраст',
            dataIndex: 'age',
            width: '15%',
            scopedSlots: { customRender: 'age' },
        },
        {
            title: 'адрес',
            dataIndex: 'address',
            width: '40%',
            scopedSlots: { customRender: 'address' },
        },
        {
            title: 'операция',
            dataIndex: 'operation',
            scopedSlots: { customRender: 'operation' },
        },
    ],
  }),
  methods: {
    openURL (url) {
      remote.shell.openExternal(url)
    },
    callback(key) {
      console.log(key);
    },
  }
}
</script>

<style scoped lang="scss">

// ::-webkit-scrollbar {
//   width: 10px;
// }

.midpanel{
   height: 900px;
   overflow-y:auto;
}

.sidepanel{
    max-height: 800px;
    overflow-y: auto;
    overflow-x: hidden;
    .element::-webkit-scrollbar { width: 0; };
    .element { overflow: -moz-scrollbars-none; }
}

.addrukovod{
    height: 100px;
    padding: 30px 50px 30px 50px;
    background-color: #fff;

    button{
        color: #fff;
    }
}

.ant-card{
    
    margin-bottom: 2px;
    .innertext{
        margin-top: 15px;
    }
}

ant-card:hover{
    background-color: red;
    transition: 1s;
}


.ant-page-header {
    padding: 6px 16px 6px 16px;
}

.ant-tabs-content {
    .ant-btn {
        color:  #fff ;
        margin-bottom: 16px;
    }
}


#components-layout-demo-side .logo {
  height: 32px;
  margin: 14px;
}
</style>