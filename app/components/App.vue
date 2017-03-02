<template>
    <div>
        <el-card class="box-card" v-show="show">
            <div slot="header" class="clearfix">
                <span style="line-height: 36px;">{{page.title}}</span>
            </div>
            <div class="text item">
                {{page.content}}
            </div>
        </el-card>
        <el-card class="box-card">
            <el-tag>页面数量：{{pagesCount}}</el-tag>
            <el-button type="primary" :disabled="show == 'home'?true:false" @click="handleHomeClick">home页面</el-button>
            <el-button type="primary" :disabled="show == 'rank'?true:false" @click="handleRankClick">rank页面</el-button>
        </el-card>
    </div>
</template>

<script>
    import Common from './../js/common';
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        computed: {
            page: {
                get () {
                    return this.$store.state.page;
                },
                set (val) {
                    this.$store.dispatch('showPage', val)
                }
            },
            pagesCount(){
                return Common.countObj(this.$store.state.pages);
            },
            show(){
                return this.$store.state.show;
            }
        },
        methods: {
            handleHomeClick(event){
                this.page = "home";
            },
            handleRankClick(event){
                this.page = "rank";
            }
        }
    }
</script>
