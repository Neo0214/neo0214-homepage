<template>
    <div class="container">
        <div class="editor-container">
            <editor api-key="3e8acxyesaw37iuio7ar2pc416irnjan9cpkyum6khf32wbg" :init="editorConfig" v-model="content" />
        </div>
    </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
import tinymce from 'tinymce';
import axios from 'axios';
export default ({
    components: {
        Editor
    },
    data() {
        return {
            content: "",
            editorConfig: {
                readonly: true,
                plugins: 'lists link image table code help wordcount',
                branding: false,
                statusbar: false,
                toolbar: false,
                menubar: false,
                disabled: true,
            }
        }
    },
    mounted() {
        const data={
            blog_id: parseInt(this.$route.query.blog_id)
        }
        const seri=this.$qs.stringify(data);
        axios.post('/blogs/getBlog', seri)
            .then((response) => {
                this.content = response.data.content;
            }).catch((error) => {
                console.log(error);
            })
    }
})
</script>

<style scoped>
.container {
    width: 80%;
    height: 100%;
    overflow-y: auto;
    margin-top: 30px;
    padding: 30px 12%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-image: none;
    background-color: rgba(91, 255, 255, 0.181);
}

.editor {
    width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    background-color: rgba(255, 255, 255, 0.9);
}

.editor-container {
    width: 100%;
    height: 100%;
}


::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background-color: #f5f5f5;
  border-radius: 8px;
}

::-webkit-scrollbar-thumb {
  background-color: #dcdcdc;
  border-radius: 8px;
  border: 2px solid #f5f5f5
}
</style>
