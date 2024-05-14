<template>
    <div class="main-container">
        <div>
            <mapContainer></MapContainer>
        </div>
    </div>
</template>

<script>
import MapContainer from '@/components/sub-components/MapContainer.vue'
export default{
    name: 'Map',
    components: {
        MapContainer
    },
    data(){
        return{

        }
    }
}
</script>


<style scoped>
.main-container{
    width: 80%;
    height: 100%;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-image: none;
}
</style>