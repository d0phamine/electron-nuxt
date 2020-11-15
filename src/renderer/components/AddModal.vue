<template>
  <div>
    <div v-if="komissya">
      <a-button
        type="primary"
        icon="edit"
        @click="showModal"
        class="buttonontable"
      >
        Добавить комиссию
      </a-button>
      <a-modal
        title="Добавить комиссию"
        :visible="visible"
        on-ok="handleOk"
      >
        <template slot="footer">
            <a-button key="back" @click="handleCancel">
                Отмена
            </a-button>
            <a-button key="submit" type="primary" :loading="loading" @click="handleOk" icon="save">
                Сохранить
            </a-button>
        </template>
        <div class="modalrow1">
          <a-input placeholder="Название" class="modalinput" />
          <a-input placeholder="Номер" />
        </div>
        <div class="modalrow1">
          <a-date-picker
            :default-value="moment('2015/01/01', dateFormat)"
            :format="dateFormat"
            class="modaldate"
          />
        </div>
        <h3>Список участников</h3>
        <a-select
          mode="tags"
          style="width: 100%"
          placeholder="Tags Mode"
          @change="handleChange"
        >
          <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
            {{ (i + 9).toString(36) + i }}
          </a-select-option>
        </a-select>
      </a-modal>
    </div>
    <div v-if="sotrudnik">
      <a-button
        type="primary"
        icon="edit"
        @click="showModal"
        class="buttonontable"
      >
        Добавить сотрудника
      </a-button>
      <a-modal
        title="Добавить сотрудника"
        :visible="visible"
        on-ok="handleOk"
      >
        <template slot="footer">
            <a-button key="back" @click="handleCancel">
            Отмена
            </a-button>
            <a-button key="submit" type="primary" :loading="loading" @click="handleOk" icon="save">
            Сохранить
            </a-button>
        </template>
        <div class="modalrow1">
            <div class="modalrow1__grow">
                <a-input placeholder="Фамилия" class="modalinput" />
                <a-input placeholder="Имя" />
            </div>
            <div class="modalrow1__grow">
                <a-input placeholder="Отчество"/>
            </div>
        </div>
        
        <div class="modalrow2">
            <div class="modalrow2__grow">
                <a-input placeholder="Должность" class="modalinput" />
            </div>
            <div class="modalrow2__grow">
                <a-input placeholder="Звание"  />
            </div>
        </div>
        <div class="modalrow1">
            <div class="modalrow1__grow">
                <a-select :size="size" default-value="Комиссия" style="width: 460px" @change="handleChange">
                    <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
                        {{ (i + 9).toString(36) + i }}
                    </a-select-option>
                </a-select>
            </div>
        </div>
      </a-modal>
    </div>
    <div v-if="rukovod">
      <a-button
        type="primary"
        icon="edit"
        @click="showModal"
        class="buttonontable"
      >
        Добавить руководителя
      </a-button>
      <a-modal
        title="Добавить руководителя"
        :visible="visible"
        on-ok="handleOk"
      >
        <template slot="footer">
            <a-button key="back" @click="handleCancel">
            Отмена
            </a-button>
            <a-button key="submit" type="primary" :loading="loading" @click="handleOk" icon="save">
            Сохранить
            </a-button>
        </template>
        <div class="modalrow1">
            <div class="modalrow1__grow">
                <a-input placeholder="Фамилия" class="modalinput" />
                <a-input placeholder="Отчество" class="modalinput" />
                <a-input placeholder="Должность" />
            </div>
            <div class="modalrow1__grow">
                <a-input placeholder="Имя" class="modalinput"/>
                <a-input placeholder="Овд" class="modalinput" />
                <a-input placeholder="Звание" class="modalinput" />
            </div>
        </div>
      </a-modal>
    </div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  data() {
    return {
      visible: false,
      loading:false,
      dateFormat: "YYYY/MM/DD",
      monthFormat: "YYYY/MM",
      dateFormatList: ["DD/MM/YYYY", "DD/MM/YY"],
    };
  },
  props: {
    komissya: false,
    sotrudnik: false,
    rukovod: false,
  },
  methods: {
    moment,
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      this.loading = true;
      setTimeout(() => {
        this.visible = false;
        this.loading = false;
      }, 2000);
    },
    handleCancel(e) {
      console.log("Clicked cancel button");
      this.visible = false;
    },
  },
};
</script>

<style lang="scss" scoped>

.ant-btn-primary{
    color: #fff;
}
.modalrow1 {
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
  flex-grow: 1;

  .ant-select{
      margin-right: auto;
      margin-left: auto;
  }
  
  &__grow{
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      margin-right: 1em;
  }

  .modalinput {
    margin-right: 1em;
    margin-bottom: 1em;
  }

  .modaldate {
    width: 100%;
  }
}

.modalrow2 {
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
  margin-top: 3em;
  flex-grow: 1;
  
  &__grow{
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      margin-right: 1em;
  }

  .modalinput {
    margin-right: 1em;
    margin-bottom: 1em;
  }

  .modaldate {
    width: 100%;
  }
}


.buttonontable {
  margin-bottom: 1em;
  color: #fff;
}
</style>