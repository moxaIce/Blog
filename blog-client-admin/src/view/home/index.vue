<template>
    <section class="home-body">
        <div ref="el"></div>
    </section>
</template>

<script lang="ts">
    import {ref, onMounted, Ref} from 'vue';
    import initGrid from "@/components/table";
    export default {
        components: {
        },
        setup(){
            const el: Ref<HTMLElement> = ref(document.createElement('div'));

            onMounted(() => {

                initGrid(el.value,{
                    toolbar: {
                        buttons: [
                            {
                                type: 'new',
                                text: '新建',
                                handleClick () {

                                }
                            }
                        ]
                    },
                    columns: [
                        {title: '标题', field: 'title'},
                        {title: '内容', field: 'content'},
                        {title: '创建时间', field: 'createTime'},
                        {title: '更新时间', field: 'updateTime'}
                    ],
                    gridData: [
                        {
                            title: '我是一只小小·鸟',
                            content: '怎么飞也飞不高',
                            createTime: '2020-09-06',
                            updateTime: '2020-11-04'
                        },
                        {
                            title: '我是一只小小·鸟',
                            content: '怎么飞也飞不高',
                            createTime: '2020-09-06',
                            updateTime: '2020-11-04'
                        }
                    ]
                })
            })

            return {
                el
            }
        }
    }
</script>

<style scoped lang="scss">
.home-body{
    padding: 30px;
    background-color: #fff;
}
</style>