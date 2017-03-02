<template>
    <el-tabs type="card">
            <h2 v-text="title"></h2>
            <el-table
                    :data="list"
                    stripe>
                <el-table-column
                        prop="rank_sort"
                        label="排名"
                        width="80">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="公司"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="rank_reason"
                        label="上榜理由">
                </el-table-column>
                <el-table-column
                        prop="description"
                        label="描述">
                </el-table-column>
            </el-table>
    </el-tabs>
</template>

<script type="text/ecmascript-6">
    import  Config from 'config';
    export  default{
        data(){
            return {
                title:'公司部门排行榜',
                list:[]
            };
        },
        mounted(){
            var that=this;
            that.$http.get(Config.apiUrl+Config.urlsEnum.rank).then(response=> {
                var jsonData=response.data;
                that.$data.list=jsonData.data.list?jsonData.data.list:{};
            });
        }
    }

</script>