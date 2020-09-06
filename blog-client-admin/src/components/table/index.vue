<template>
    <table class="app-table">
        <thead>
            <tr class="app-thead-tr">
                <th v-for="(column, index) in columns"
                    :key="index"
                    :style="{'text-align': column.titleAlign}">{{column.title}} {{column.titleAlign}}
                </th>
            </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in gridData" :key="index">
            <td v-for="column in columnFields"
                :key="column"
                :style="{'text-align': column.columnAlign}">
                {{item[column.field]}}
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
    /**
     * @description 表格組件
     */
    import {computed, WritableComputedRef} from 'vue';
    import {IColumns} from './index'

    export default {
        props: {
            gridData: {
                type: Array,
                default () {
                    return []
                }
            },
            columns: {
                type: Array,
                default () {
                    return [];
                }
            }
        },

        // TODO 临时Any
        setup(props: any) {
            console.log(`props, is`, props)
            const columnFields: WritableComputedRef<any[]> = computed({
                get: () => {
                    return props.columns.map((item: IColumns) => {
                        return {
                            field: item.field,
                            columnAlign: item.columnAlign
                        }
                    })
                },
                set: () => {
                    return console.error('无法设置')
                }
            })

            return {
                columnFields
            }
        }

    }
</script>

<style scoped lang="scss">
    .app-table{
        border: 1px solid #ddd;
        width: 100%;
        th, td{
            border: 1px solid #ddd;
        }
    }
    .app-thead-tr{
        height: 38px;
        line-height: 38px;
    }
</style>