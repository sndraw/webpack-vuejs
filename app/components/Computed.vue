<template>
    <el-row :gutter="20">
        <input v-model="oldNum"/>
        <p>
            {{oldNum}}
        </p>
    </el-row>
</template>

<script type="text/ecmascript-6">
    module.exports = {
        data: function () {
            return {
                oldNum:0
            };
        },
        beforeUpdate:function () {
            var newValue =this.oldNum;
            this.oldNum=newValue.replace(/[^\d]/g,'');
        }
    };


</script>