<template>
  <section class="blog-new">
    <app-form>
      <app-form-item label="作者">
        <app-input placeholder="请输入作都名称"  @update="(value) => {blog.author = value}"/>
      </app-form-item>
      <app-form-item label="标题">
        <app-input placeholder="请输入文章标题"  @update="(value) => {blog.title = value}"/>
      </app-form-item>
      <app-form-item label="内容">
        <app-input placeholder="请输入内容"  @update="(value) => {blog.content = value}"/>
      </app-form-item>
      <app-button type="primary" @click="submit">提交</app-button>
      <app-button type="default">返回</app-button>
    </app-form>
  </section>
</template>

<script lang="ts">
import { reactive } from 'vue';
import AppForm from "@/components/form/index.vue";
import AppInput from "@/components/input/index.vue";
import AppFormItem from "@/components/form-item/index.vue";
// import editormd from 'editor.md';
import router from '@/router/index';
import AppButton from "@/components/button/index.vue";
import { createBlog } from '../../api/blogs/index';

export default {
  components: {
    AppForm,
    AppInput,
    AppFormItem,
    AppButton,
  },

  setup() {
    const blog = reactive({
        author: '',
        content: '',
        title: ''
    })
    const submit = async () => {
        const result = await createBlog(blog);
        
        if (result) {
            router.push({
              path: '/documentation'
            })
        }
    };

    return {
      submit,
      blog
    };
  },
};
</script>

<style lang="scss" scoped>
.blog-new {
  width: 800px;
  justify-content: center;
  background-color: #fff;
  padding: 50px;
}
</style>
