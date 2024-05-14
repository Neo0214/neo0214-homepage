<template>
    <div class="container">
        <div class="main-content">
            <LabCard propTitle="Battlefield™ 1" :propPicUrl="1" />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import LabCard from '@/components/sub-components/LabCard.vue';
export default {
    name: "Labs",
    components: {
        LabCard
    },
    data() {
        return {
            audioUrl: "",
        };
    },
    mounted() {

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
    background-image: none;
}

.main-content {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.35);
    backdrop-filter: blur(17px);
    -webkit-backdrop-filter: blur(17px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>