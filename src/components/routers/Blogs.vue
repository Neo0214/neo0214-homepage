<template>
    <div class="container">
        <BlogCard v-for="(item, index) in blogInfo" :key="index" :propPicUrl="item.blog_id" :propTitle="item.title"
            :propAuthor="item.author" />
        <div>
            <router-link to="/blogEdit">我也要发</router-link>
        </div>
    </div>
</template>

<script>
import BlogCard from "@/components/sub-components/BlogCard.vue";
import axios from 'axios';
export default ({
    components: {
        BlogCard,
    },
    name: "Blogs",
    data() {
        return {
            blogNumber: 0,
            blogInfo: [],
        };
    },
    mounted() {
        axios.post('/blogs/getList')
            .then((response) => {
                this.blogNumber = response.data.length;
                console.log(this.blogNumber);
                for (let i = 0; i < this.blogNumber; i++) {
                    this.blogInfo.push(response.data[i]);
                }
                console.log(this.blogInfo);
            })
            .catch((error) => {
                console.log(error);
            })
    }

})
</script>

<style scoped>
.container {
    width: 80%;
    height: auto;
    overflow-y: auto;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-image: none;
}
</style>
