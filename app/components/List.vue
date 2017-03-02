<template>
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
                label="部门"
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
</template>

<script type="text/ecmascript-6">
    export  default{
        props: ["title", "list"]
    }

</script>