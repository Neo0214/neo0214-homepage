<template>
  <div>
    <Editor
      api-key="3e8acxyesaw37iuio7ar2pc416irnjan9cpkyum6khf32wbg"
      :init="{
        plugins: 'lists link image table code help wordcount'
      }"
    />
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue';

export default {
  name: 'BEditor',
  data() {
    return {
      content: ''
    };
  },
  
};
</script>

<style scoped>
.quill-editor {
  height: 300px;
}
</style>