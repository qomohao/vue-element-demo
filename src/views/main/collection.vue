<template>
    <div class='collection'>
        <div class="main">
            <div class="search">
                <el-input placeholder="请输入内容" v-model="searchVal" class="input-with-select">
                    <el-select v-model="selectVal" slot="prepend" placeholder="请选择">
                        <el-option :label="v.name" :value="v.value" v-for="(v,i) in typeList" :key="i"></el-option>
                    </el-select>
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </div>
            <div class="list-box">
                <div class="item" v-for="(v,i) in 22" :key="i">
                    <div class="title ellipsis-row-1">这这个是标题这个是标题这个是标题这个是标题这个是标题这个是标题个是标题</div>
                    <div class="content ellipsis-row-2">
                        这这个是标题这个是标题这个是标题这个是标题这个是标题这个是标题个是标题这这个是标题这个是标题这个是标题这个是标题这个是标题这个是标题个是标题这这个是标题这个是标题这个是标题这个是标题这个是标题这个是标题个是标题
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'collection',
        data() {
            return {
                searchVal: '',
                selectVal: 1,
                typeList: [{
                        name: '相识',
                        value: 1
                    },
                    {
                        name: '相知',
                        value: 2
                    },
                    {
                        name: '相遇',
                        value: 3
                    },
                    {
                        name: '相爱',
                        value: 4
                    }
                ]
            };
        },

        components: {},

        computed: {},

        mounted() {},

        methods: {}
    }
</script>
<style lang="less" scoped>
    .collection {
        height: 100%;
        padding: 20px;
        /deep/ .el-select .el-input {
            width: 130px;
        }
        /deep/ .input-with-select .el-input-group__prepend {
            background-color: #fff;
        }
        .main {
            height: 100%;
            .search {
                height: 50px;
            }
            .list-box {
                height: calc(100% - 50px);
                overflow-y: scroll;
                .item {
                    padding: 20px;
                     .title {
                        font-size: 18px;
                    }
                    .content {
                        margin-top: 5px;
                        font-size: 12px;
                    }
                      
                }
                .item:nth-child(even){
                     background: #f7f7f7;
                   
                }
            }
        }
    }
</style>