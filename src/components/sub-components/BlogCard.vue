<template>
    <div class="card" v-on:click="jumpToTarget">
        <div class="card-image">
            <img :src="picUrl" alt="blog image" class="blog-img">
        </div>
        <div class="card-content">
            <div class="card-title">
                <h2>{{ title }}</h2>
            </div>
            <div class="card-author">
                <p class="author-text">Author: {{ propAuthor }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default ({
    name: "BlogCard",
    props: ["propPicUrl", "propTitle", "propAuthor"],
    data() {
        return {
            picUrl: "",
            title: "",
        }
    },
    mounted() {
        //this.picUrl = require(`@/${this.propPicUrl}`);
        axios.get("/blogs/getPic", {
            params: {
                blog_id: this.propPicUrl
            },
            responseType: 'blob'
        }).then((response) => {
            // 创建一个临时的 URL 来引用获取到的图片 Blob 对象
            const url = URL.createObjectURL(response.data);
            this.picUrl = url;
        }).catch((error) => {
            this.picUrl = require("@/head.jpg");
        })
        if (this.propTitle.length > 20) {
            this.title = this.propTitle + '...';
        }
        else {
            this.title = this.propTitle;
        }

    },
    methods: {
        jumpToTarget() {
            console.log("jump to blog detail");
            this.$router.push({
                path: '/blogDetail',
                query: { blog_id: this.propPicUrl }
            });
        }

    }
})
</script>

<style scoped>
.card {
    width: 100%;
    height: 170px;
    margin: 20px 0;
    display: flex;
    flex-direction: row;
    border-radius: 16px;
    /* 圆角 */
    background-color: rgba(255, 255, 255, 0.9);
    background: rgba(255, 255, 255, 0.35);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(17px);
    -webkit-backdrop-filter: blur(17px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
}

.card-image {
    width: 150px;
    height: 150px;
    margin: 10px 20px;

}

.blog-img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 8px;
    /* 圆角 */
    box-shadow: 1px 1px 3px rgba(200, 60, 255, 0.3), 2px 2px 6px rgba(0, 0, 0, 1);
    transition: transform 0.3s ease;
    /* 添加过渡效果 */
}

.card-content {
    height: 100%;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.card-author {
    width: 100%;
    height: 50px;

}

.card-title {
    width: 100%;
    height: 50px;
}

.author-text {
    color: black;
}
</style>