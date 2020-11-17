<template>
  <div>
        <a-row type="flex">
            <a-col flex="1 1 200px" style="margin-right: 16px">
                <div class="midpanel " :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
                  <TableDocs :cols="cols"/>
                </div>
            </a-col>
            <a-col flex="0 1 300px">
                <div class="sidepanel" :style="{ paddingTop: '24px', background: '#fff', minHeight: '360px' }">
                  <a-page-header
                            style="border-bottom: 1px solid rgb(235, 237, 240);"
                            title="Создать документ"
                        />
                  <div class="docinputs">
                    <a-input placeholder="Название документа" />
                    <a-input placeholder="Тип документа" />
                    <a-date-picker :default-value="moment('2015/01/01', dateFormat)" :format="dateFormat" />
                  </div>
                  <div class="underbutton">
                    <a-button
                      type="primary"
                      icon="file"
                    >
                      Добавить документ
                    </a-button>
                  </div>
                </div>
            </a-col>
        </a-row>
  </div>
</template>

<script>
import { remote } from 'electron'
import moment from 'moment';

export default {
  data:() => ({
    dateFormat: 'YYYY/MM/DD',
    monthFormat: 'YYYY/MM',
    dateFormatList: ['DD/MM/YYYY', 'DD/MM/YY'],
    externalContent: '',
    collapsed: false,
    cols: [
        {
            title: 'Тип документа',
            dataIndex: 'name',
            width: '25%',
            scopedSlots: { customRender: 'name' },
        },
        {
            title: 'Название',
            dataIndex: 'age',
            width: '35%',
            scopedSlots: { customRender: 'age' },
        },
        {
            title: 'Дата',
            dataIndex: 'address',
            width: '20%',
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
    moment,
  }
}
</script>

<style scoped lang="scss">
  .midpanel{
   height: 100%;
   overflow-y:auto;
}

  .sidepanel{
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      .element::-webkit-scrollbar { width: 0; };
      .element { overflow: -moz-scrollbars-none; }

      .docinputs{
        display: flex;
        flex-direction: column;
        height: 80%;
        padding: 16px;

        .ant-input{
          margin-bottom: 16px;
        }

        .ant-calendar-picker{
          width: 100%;
        }
      }

      .underbutton{
        display: flex;
        padding: 16px;
        justify-content: center;
        color: #fff;
      }
  }

  .ant-page-header {
    padding: 16px 16px 6px 16px;
    text-align: center;
    
  }
</style>
