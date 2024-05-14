<template>
    <div class="container">
        <audio :src="audioUrl" autoplay loop style="display: none;"></audio>
        <div class="main-content">
            <div v-for="(line, index) in lines" :key="index" class="line">
                {{ line }}
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "BattleField",
    data() {
        return {
            audioUrl: "",
            lines: [
                "我们麻木不仁，我们天真无邪",
                "我们是可敬的英雄，也是十恶不赦的罪犯",
                "我们注定成为传奇，也终将在历史中消逝",
                "我们是天空中的骑士",
                "沙漠中的鬼魂",
                "战壕中的鼠辈",
                "Battlefield™ 1 全新实验室即将上线"
            ]
        };
    },
    mounted() {
        axios.get("/labs/getAudio", {
            responseType: 'blob'
        }).then((response) => {
            const url = URL.createObjectURL(response.data);
            this.audioUrl = url;
        }).catch((error) => {
            console.log(error);
        })
    }
};

</script>

<style scoped>
.container {
    width: 80%;
    height: 100%;
    overflow-y: auto;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-image: none;
}
.main-content{
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.35);
    backdrop-filter: blur(17px);
    -webkit-backdrop-filter: blur(17px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.line{
    font-size: 24px;
    display: flex;
    justify-content: center;
    margin:10px;
    transition: opacity 1s;
}
</style>