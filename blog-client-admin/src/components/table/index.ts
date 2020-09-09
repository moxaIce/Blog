/**
 * @description 表格組件
 */

import {createApp} from 'vue';
import Table  from './index.vue';

export interface IDefaultColumnsConfig {
    titleAlign?: string,
    columnAlign?: string
}

export interface IColumns extends IDefaultColumnsConfig{
    field: string,
    title: string
}

export interface IToolbar {
    buttons: any[]
}

export interface IConfig  {
    gridData: any[],
    columns: IColumns[],
    toolbar: IToolbar,
    [key: string]:  any[] | IColumns[] | IToolbar;
}



const initGrid = (elements: HTMLElement, config:IConfig) => {
    return createApp(Table, config).mount(elements);
}


export default initGrid;
