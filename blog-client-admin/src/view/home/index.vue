<template>
    <section class="home-body">
        <div ref="el"></div>
    </section>
</template>

<script lang="ts">
    import {ref, onMounted, Ref} from 'vue';
    import initGrid from "@/components/table";
    import router from "@/router/index.ts";
    import { getList } from '@/api/blogs/index.ts';
    export default {
        setup(){
            const el: Ref<HTMLElement> = ref(document.createElement('div'));
            const fetchList = async () => {
                let res = await getList();
                
                if (res) {
                    initGrid(el.value, {
                        toolbar: {
                            buttons: [
                                {
                                    type: 'new',
                                    text: '新建',
                                    handleClick () {
                                        router.push({
                                            path: '/blog/new'
                                        })
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
                        gridData: res
                    })
                }
            }
            onMounted(() => {
                fetchList();
            });

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