<template>
    <el-row :gutter="20">
        <el-dialog v-model="visible" title="贺词">
            <div class="wufu">{{msg}}</div>
        </el-dialog>
        <el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">
                <router-link to="/">{{linker}}</router-link>
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title">祝福</template>
                <el-menu-item index="2-1">{{say}}</el-menu-item>
            </el-submenu>
        </el-menu>
        <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 3">
                <h3>{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
    </el-row>

</template>

<script type="text/ecmascript-6">
    module.exports = {
        data: function () {
            return {
                msg: "五福临门",
                linker: "福到了",
                say: "新年大吉",
                visible: false
            };
        },
        // 在 `methods` 对象中定义方法
        methods: {
            handleSelect(key, keyPath) {
                if (key == "2-1") {
                    this.visible = true;
                }
            }
        }
    };


</script>

<style scoped lang='sass' rel="stylesheet/scss" type="text/css">
    .wufu {
        width: 100px;
        margin: 40px auto 0 auto;
        font-family: "Microsoft YaHei";
        text-align: center;
        font-size: 66px;
        color: red;
        border: solid 10px red;
    }

    .wufu > a {
        color: red;
        text-decoration: none;
    }

    .wufu > a:visited {
        color: red;
    }

    .wufu:active {
        color: #FFD700;
        border-color: #FFD700;
        background-color: red;
    }

    .wufu:active > a {
        color: #FFD700;
    }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
        text-align: center;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>