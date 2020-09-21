<template>
  <section>
    <div class="app-table__toolbar">
      <div class="app-toolbar__btn" v-for="(item, index) in buttons" :key="index">
        <app-button @click="item.handleClick" type="primary">{{item.text}}</app-button>
      </div>
    </div>

    <table class="app-table">
      <thead>
        <tr class="app-thead-tr">
          <th
            v-for="(column, index) in columns"
            :key="index"
            :style="{'text-align': column.titleAlign || defaultColumnsConfig.titleAlign}"
          >{{column.title}} {{column.titleAlign}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in gridData" :key="index" class="app-tbody-tr">
          <td
            v-for="column in columnFields"
            :key="column"
            :style="{'text-align': column.columnAlign || defaultColumnsConfig.columnAlign}"
          >{{item[column.field]}}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
/**
 * @description 表格組件
 */
import { computed, WritableComputedRef, reactive, Ref, ref } from "vue";
import { IDefaultColumnsConfig } from "./index";
import AppButton from "@/components/button/index.vue";
import { IColumns } from "./index";

const defaultColumnConfig: IDefaultColumnsConfig = {
  titleAlign: "center",
  columnAlign: "center",
};

export default {
  components: {
    AppButton,
  },
  props: {
    gridData: {
      type: Array,
      default() {
        return [];
      },
    },
    columns: {
      type: Array,
      default() {
        return [];
      },
    },
    toolbar: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  // TODO 临时Any
  setup(props: any) {
    const defaultColumnsConfig = reactive(defaultColumnConfig);
    const buttons: Ref<any[]> = ref([]);
    const initValue = () => {
      buttons.value = props.toolbar.buttons || [];
    };

    initValue();

    const columnFields: WritableComputedRef<any[]> = computed({
      get: () => {
        return props.columns.map((item: IColumns) => {
          return {
            field: item.field,
            columnAlign: item.columnAlign,
          };
        });
      },
      set: () => {
        return console.error("无法设置");
      },
    });

    return {
      columnFields,
      defaultColumnsConfig,
      buttons,
    };
  },
};
</script>

<style scoped lang="scss">
.app-table {
  width: 100%;
}

.app-table__toolbar {
  padding-bottom: 20px;
  .app-toolbar__btn {
    display: inline-block;
  }
}
.app-thead-tr {
  th {
    padding: 7px 10px 6px;
    color: #404040;
    background-color: #fafafa;
    border-bottom: 1px solid #f0f0f0;
  }
}
.app-row {
  td {
    padding: 7px 10px 6px;
    border-bottom: 1px solid #f0f0f0;
  }
}
.app-tbody-tr {
  height: 34px;
  line-height: 34px;
  border-bottom: 1px solid #f0f0f0;
}
</style>