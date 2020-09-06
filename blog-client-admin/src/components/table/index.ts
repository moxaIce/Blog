/**
 * @description 表格組件
 */

import {createApp} from 'vue';
import Table  from './index.vue';
import {ComponentOptionsWithObjectProps} from '@vue/runtime-core'

export interface IDefaultColumnsConfig {
    titleAlign?: string,
    columnAlign?: string
}

export interface IColumns extends IDefaultColumnsConfig{
    field: string,
    title: string
}

export interface IConfig  {
    gridData: any[],
    columns: IColumns[],
    [key: string]:  any[] | IColumns[];
}

const defaultColumnConfig: IDefaultColumnsConfig = {
    titleAlign: 'center',
    columnAlign: 'center'
}

const initGrid = (elements: HTMLElement, config:IConfig) => {
    // const resultColumns =  config.columns.map(item => {
    //     return Object.assign(defaultColumnConfig, item)
    // })
    //
    // const props: IConfig = Object.assign(config, {columns: resultColumns})

    return createApp(Table, config).mount(elements);
}


export default initGrid;
