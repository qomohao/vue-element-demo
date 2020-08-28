<template>
    <div class='position'>
        <div id="map-box"></div>
    </div>
</template>

<script>
    import AMap from 'AMap';
    export default {
        name: 'position',
        data() {
            return {
            };
        },

        components: {},

        computed: {},

        mounted() {
            this.initMap()
        },

        methods: {
            initMap() {
                 new AMap.Map('map-box', {
                    resizeEnable: true, //是否监控地图容器尺寸变化
                    mapStyle: "amap://styles/6e42cce62ce626bc3ff17ce5d235f05c"
                });
            },
        }
    }
</script>
<style lang="less" scoped>
    .position {
        #map-box {
            width: 100%;
            height:100%;
        }
    }
</style>