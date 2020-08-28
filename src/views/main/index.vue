<template>
    <div class='index'>
        <vue-drag-resize class="main" :parentLimitation='true' :minw='700' :minh='450' :w='910' :h='585' :x='450'
            :y='50' :preventActiveBehavior='true' :isActive='false'
            :sticks="['tl', 'tm', 'tr', 'mr', 'br', 'bm', 'bl', 'ml']" >
            <div class="flex justify-between">
                <div class="user-info  flex justify-between column">
                    <div class="flex column align-center">
                        <el-image class="avatar" fit="cover" :src="imgUrl" :preview-src-list="[imgUrl]">
                        </el-image>
                        <i class="el-icon-user" :class="iActive('user-list')?'iActive':''" @click="goToReplace('user-list')"></i>
                        <!-- <i class="el-icon-eleme"  @click="goToReplace('')"></i> -->
                        <i class="el-icon-location-information"  :class="iActive('position')?'iActive':''"  @click="goToReplace('position')"></i>
                        <i class="el-icon-star-off"   :class="iActive('collection')?'iActive':''" @click="goToReplace('collection')"></i>
                    </div>
                    <div class="flex column  align-center">
                        <i class="el-icon-s-operation"  :class="iActive('setting')?'iActive':''"  @click="goToReplace('setting')"></i>
                    </div>
                </div>
                <router-view class="view-box"></router-view>
            </div>
        </vue-drag-resize>
    </div>
</template>

<script>
    export default {
        name: 'index',
        data() {
            return {
                imgUrl: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1173334872,3706634465&fm=26&gp=0.jpg'
            };
        },

        components: {},

        computed: {
            
        },

        mounted() {
            
        },

        methods: {
            iActive(val){
                return location.href.indexOf(val)!==-1
            }
        }
    }
</script>
<style lang="less" scoped>
    .index {
        height: 100vh;
        overflow: hidden;
        .main {
            box-shadow: 0 0 3px #666;
            background: #fff;
            border-radius: 5px;
            &>div {
                width: 100%;
                height: 100%;
            }
            .avatar {
                border: 1px solid #f7f7f7;
                width: 50px;
                height: 50px;
                border-radius: 5px;
                overflow: hidden;
            }
            .user-info {
                width: 60px;
                background: rgb(43, 43, 44);
                color: #fff;
                padding: 10px 0;
                i {
                    font-size: 28px;
                    margin-top: 20px;
                    color: gray;
                }
                .iActive{
                    color: gold;
                }
            }
            .view-box{
                width: calc(100% - 60px);
            }
            
        }
        .vdr.active:before {
            outline: none
        }
    }
</style>