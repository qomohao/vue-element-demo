<template>
    <div class='chat'>
        <vue-drag-resize class="main" :parentLimitation='true' :minw='700' :minh='450' :w='700' :h='450' :x='50' :y='50'
            :isActive='false' :sticks="['tl', 'tm', 'tr', 'mr', 'br', 'bm', 'bl', 'ml']">
            <div class="flex justify-between">
                <div class="user-info  flex justify-between column">
                    <div class="flex column align-center">
                        <el-image class="avatar" fit="cover"
                            :src="'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1173334872,3706634465&fm=26&gp=0.jpg'"
                            :preview-src-list="['https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1173334872,3706634465&fm=26&gp=0.jpg']">
                        </el-image>
                        <i class="el-icon-star-off"></i>
                        <i class="el-icon-eleme"></i>
                        <i class="el-icon-user"></i>
                    </div>
                    <div class="flex column  align-center">
                        <i class="el-icon-star-off"></i>
                        <i class="el-icon-eleme"></i>
                        <i class="el-icon-user"></i>
                    </div>
                </div>
                <div class="message-list">
                    <ul class="infinite-list" style="overflow:auto">
                        <li v-for="i in 45" class="infinite-list-item flex justify-between align-center" :key="i">
                            <el-image class="avatar" fit="cover"
                                :src="'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1173334872,3706634465&fm=26&gp=0.jpg'"
                                :preview-src-list="['https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1173334872,3706634465&fm=26&gp=0.jpg']">
                            </el-image>
                            <div class="info flex justify-between column">
                                <div class="nickname ellipsis-row-1">会飞会飞的鱼的鱼</div>
                                <div class="msg ellipsis-row-1">拼多多多读多拼多多多读多多多多拼多多多读多多多多多多多</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="content-box">content-boxcontent-box</div>
            </div>
        </vue-drag-resize>
    </div>
</template>

<script>
    export default {
        name: 'chat',
        data() {
            return {

            };
        },

        components: {},

        computed: {},

        mounted() {},

        methods: {

        }
    }
</script>
<style lang="less" scoped>
    .chat {
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
            .user-info {
                width: 60px;
                background: rgb(43, 43, 44);
                color: #fff;
                padding: 10px 0;
                .avatar {
                    border: 1px solid #f7f7f7;
                    width: 50px;
                    height: 50px;
                    border-radius: 5px;
                    overflow: hidden;
                }

                i {
                    font-size: 24px;
                    margin-top: 10px;
                    color: rgb(114, 114, 114);
                }
            }
            .message-list {
                width: 250px;
                overflow-y: scroll;
                background: rgb(238, 235, 234);
                .infinite-list {
                    .infinite-list-item {
                        background: #fff;
                        padding: 10px;
                        .avatar {
                            border: 1px solid #f7f7f7;
                            width: 50px;
                            height: 50px;
                            border-radius: 5px;
                            overflow: hidden;
                        }
                        .info {
                            height: 50px;
                            width: calc(100% - 50px);
                            padding: 5px;
                            .nickname {
                                font-size: 14px;
                            }
                            .msg {
                                font-size: 12px;
                                color: #777;
                            }
                        }
                    }
                }
            }
            .content-box {
                width: calc(100% - 310px);
                padding: 10px;
            }
        }
        .vdr.active:before {
            outline: none
        }
    }
</style>