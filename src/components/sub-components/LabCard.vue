<template>
        <div class="lab-card" @click="jump">
            <div class="lab-title">
                {{ propTitle }}
            </div>
            <div class="lab-pic">
                <img :src="picUrl" alt="pic" class="pic">
            </div>
        </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "LabCard",
    props: ["propTitle", "propPicUrl"],
    data() {
        return {
            picUrl: ""
        }
    },
    mounted() {
        axios.get('/labs/getPost', {
            params: {
                id: this.propPicUrl
            },
            responseType: 'blob'
        }).then((response) => {
            const url = URL.createObjectURL(response.data);
            this.picUrl = url
        }).catch((error) => {
            console.log(error);
        })
    },
    methods: {
        jump() {
            this.$router.push({
                path: '/battleField',
            });
        }
    }
}
</script>

<style scoped>
.lab-card {
    width: 280px;
    height: 280px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    display: flex;
    flex-direction: column;
    margin:50px;
    background-image:none;
}

.lab-title {
    width: 100%;
    height: 30px;
    text-align: center;
    font-size: 20px;
    color: black;
    display: flex;
    justify-content: center;
    margin: 10px;
}

.lab-pic {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
}

.pic {
    width: 200px;
    height: 200px;
    border-radius: 10px;
    margin: 10px;
}
</style>