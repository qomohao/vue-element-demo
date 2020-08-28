<template>
    <div class='user-list flex'>
        <div class="message-list">
            <div class="search-box">
                <el-input placeholder="请输入内容" v-model="searchVal" clearable size="mini" prefix-icon="el-icon-search">
                </el-input>
            </div>
            <ul class="infinite-list" style="overflow:auto">
                <li v-for="i in 45" class="infinite-list-item flex justify-between align-center" :key="i">
                    <el-badge is-dot>
                        <el-image class="avatar" fit="cover" :src="imgUrl" :preview-src-list="[imgUrl]">
                        </el-image>
                    </el-badge>
                    <div class="info flex justify-between column">
                        <div class="nickname flex justify-between">
                            <div class="name ellipsis-row-1">会飞会飞的鱼的鱼</div>
                            <div class="date">16:23</div>
                        </div>
                        <div class="msg nickname flex justify-between">
                            <div class="name ellipsis-row-1">错把陈醋当成墨， 写尽半生纸上酸。</div>
                            <div class="date">
                                <i class="el-icon-close-notification"></i>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="content-box">
            <div class="message-box">
                <div class="content-title">会飞的鱼</div>
                <div class="content-list">
                    <div class="list-item flex" v-for="i in 1" :key="i">
                        <el-image class="avatar" fit="cover" :src="imgUrl" :preview-src-list="[imgUrl]">
                        </el-image>
                        <div class="item-content">
                            我们都是成年人，你不用对我撒谎，我并不生气，我只是生气你在浪费我的感情，以及我对爱情的幻想 --来自网易云音乐《故事》
                        </div>
                    </div>
                    <div class="list-item flex justify-end" v-for="i in 1" :key="i+1">
                        <div class="item-content-own">
                            村上春树说过： “如果一直想见谁 肯定迟早会见到。” 但他还说过： “所见之日乃是终止之时。” --村上春树 </div>
                        <el-image class="avatar" fit="cover" :src="imgUrl" :preview-src-list="[imgUrl]">
                        </el-image>
                    </div>
                </div>
            </div>
            <div class="message-input">
                <div class="tools">
                    <i class="el-icon-microphone"></i>
                    <i class="el-icon-folder-checked"></i>
                    <i class="el-icon-picture-outline"></i>
                    <i class="el-icon-scissors"></i>
                    <i class="el-icon-map-location"></i>
                </div>
                <div class="message-submit">
                    <el-input type="textarea" autofocus :max-length='1000' placeholder="请输入内容" v-model="chatVal">
                    </el-input>
                    <div class="message-bottom flex justify-end">
                        <el-button type="default" size="mini" :loading="sendStatus" @click="sendMsg">
                            {{sendStatus?'发送中':'发送'}}</el-button>
                        <el-button type="default" size="mini" class="copy"  @click="$copy($event,chatVal)">复制文本</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'user-list',
        data() {
            return {
                searchVal: 'asdasd',
                sendStatus: false,
                chatVal: '111',
                imgUrl: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1173334872,3706634465&fm=26&gp=0.jpg'
            };
        },

        components: {},

        computed: {},

        mounted() {
            this.sockets.subscribe('connected', function(msg){
                    this.$message.success(`${msg}加入群聊！`)
                });
                this.sockets.subscribe('disconnect', function(msg){
                    this.$message.success(`${msg}退出了群聊！`)
                });
        },

        methods: {
            sendMsg() {
                this.sendStatus = true;
                //发送信息给服务端
                this.$socket.emit('login', {
                    username: this.chatVal,
                    password: 'password111'
                });
                //接收服务端的信息
                this.sockets.subscribe('relogin', (data) => {
                    console.log(data)
                    this.$message.success(data.msg);
                    this.sendStatus = false;
                })
                
            }
        }
    }
</script>
<style lang="less" scoped>
    .user-list {
        .avatar {
            border: 1px solid #f7f7f7;
            width: 50px;
            height: 50px;
            border-radius: 5px;
            overflow: hidden;
        }
        .message-list {
            width: 250px;
            .search-box {
                height: 50px;
                line-height: 50px;
                background: rgb(245, 245, 245);
                padding: 0 10px;
                box-sizing: border-box;
            }
            .infinite-list {
                height: calc(100% - 50px);
                overflow-y: scroll;
                .infinite-list-item {
                    background: #fff;
                    padding: 10px;
                    .info {
                        height: 50px;
                        width: calc(100% - 50px);
                        padding: 5px;
                        .nickname {
                            font-size: 14px;
                            .name {
                                width: calc(100% - 50px);
                            }
                            .date {
                                width: 50px;
                                font-size: 12px;
                                color: #777;
                                text-align: right;
                            }
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
            width: calc(100% - 250px);
            .message-box {
                height: calc(100% - 150px);
                background: rgb(245, 245, 245);
                .content-title {
                    height: 50px;
                    line-height: 50px;
                    padding: 0 20px;
                    border-bottom: 1px solid rgb(231, 231, 231);
                    font-size: 20px;
                }
                .content-list {
                    padding: 20px;
                    overflow-y: scroll;
                    height: calc(100% - 50px);
                    font-size: 14px;
                    .list-item {
                        margin-bottom: 10px;
                        .item-content {
                            background: #fff;
                            border: 1px solid #f7f7f7;
                            border-radius: 5px;
                            word-break: break-all;
                            max-width: calc(100% - 200px);
                            padding: 5px;
                            position: relative;
                            margin-left: 10px;
                        }
                        .item-content-own {
                            background: rgb(158, 234, 106);
                            border: 1px solid rgb(158, 234, 106);
                            border-radius: 5px;
                            word-break: break-all;
                            max-width: calc(100% - 200px);
                            padding: 5px;
                            position: relative;
                            margin-right: 10px;
                        }
                        .item-content::before {
                            content: '';
                            position: absolute;
                            border: 6px solid transparent;
                            border-color: transparent #fff transparent transparent;
                            left: -12px;
                            top: 10px;
                        }
                        .item-content-own::after {
                            content: '';
                            position: absolute;
                            border: 6px solid transparent;
                            border-color: transparent transparent transparent rgb(158, 234, 106);
                            right: -12px;
                            top: 10px;
                        }
                    }
                }
            }
            .message-input {
                height: 150px;
                border-top: 1px solid rgb(231, 231, 231);
                .tools {
                    height: 30px;
                    padding: 5px 10px;
                    i {
                        font-size: 18px;
                        margin-right: 15px;
                        color: rgb(114, 114, 114);
                    }
                }
                .message-submit {
                    padding: 5px 10px;
                    height: calc(100% - 30px);
                    overflow-y: scroll;
                    /deep/ .el-textarea {
                        height: calc(100% - 30px);
                        textarea {
                            height: 100%;
                            border: none;
                            resize: none
                        }
                    }
                    .message-bottom {
                        height: 30px;
                    }
                }
            }
        }
    }
</style>