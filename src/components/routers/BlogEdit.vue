<template>
    <div class="container">
        <div class="text-area">
            <div class="text-content">Title</div>
        </div>
        <el-input v-model="title" placeholder="请输入标题"></el-input>
        <div class="text-area">
            <div class="text-content">Author</div>
        </div>
        <el-input v-model="author" placeholder="输入你的笔名"></el-input>
        <div class="text-area">
            <div class="text-content">Content</div>
        </div>
        <div class="editor-container">
            <Editor :id="content-editor" v-model="content" :init="editorConfig" api-key="3e8acxyesaw37iuio7ar2pc416irnjan9cpkyum6khf32wbg"/>
        </div>
        <div class="area">
            <el-button type="primary" class="btn" @click="submitAll">Submit</el-button>
        </div>
    </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
import tinymce from 'tinymce';
import axois from 'axios';
export default ({
    name: "BlogEdit",
    components: {
        Editor
    },
    data() {
        return {
            title: "",
            author: "",
            content: "",
            editorConfig:{
                plugins: 'lists link image table code help wordcount',
                branding:false,
                statusbar: true,
                toolbar:'undo redo | bold italic underline strikethrough | alignleft aligncenter alignright | bullist numlist outdent indent | link image | styleselect formatselect fontselect fontsizeselect | forecolor backcolor',
                menubar: 'edit view insert format tools table',
            }
        }
    },
    mounted() {
    },
    methods: {
        submitAll() {
            const edi = tinymce.get('content-editor');
            console.log(edi);
            this.content = edi.getContent();
            if (this.title === "" || this.author === "" || this.content === "") {
                this.$message({
                    message: '有未填写的栏目，请完善',
                    type: 'warning'
                });
            }
            else {
                axois.post('blogs/submit', {
                    title: this.title,
                    author: this.author,
                    content: this.content
                }).then((response) => {
                    if (response.data === "success") {
                        this.$message({
                            message: '提交成功',
                            type: 'success'
                        });
                        this.$router.push('/blogs');
                    }
                    else {
                        this.$message({
                            message: '网络错误，请稍后再试',
                            type: 'error'
                        })
                    }
                }).catch((error) => {
                    console.log(error);;
                    this.$message({
                        message: '网络错误，请稍后再试',
                        type: 'error'
                    })
                })

            }
        }
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

.text-area {
    width: 100%;
    height: auto;
    display: flex;
    margin: 20px 0 16px 0;
}

.area {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    margin: 20px 0 16px 0;
}

.text-content {
    font-size: 40px;
    font-weight: bold;
    font-family: 'Times New Roman', Times, serif;
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

.avatar {
    width: 178px;
    height: 178px;
    display: block;
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

.btn {
    background-color: #d182ff;
}

.btn:hover {
    background-color: #e1acff;
    box-shadow: #8c939d 0 0 5px;
}
</style>
