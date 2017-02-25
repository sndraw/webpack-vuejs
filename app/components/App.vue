<template>
    <el-row :gutter="20">
        <el-dialog v-model="visible" title="贺词">
            <div class="fu">{{msg}}</div>
        </el-dialog>
        <el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">
                <router-link to="/home">{{linker}}</router-link>
            </el-menu-item>
            <el-submenu index="2">
                <template slot="title">祝福</template>
                <el-menu-item index="2-1">{{say}}</el-menu-item>
            </el-submenu>
        </el-menu>
    </el-row>
</template>

<script type="text/ecmascript-6">
    module.exports = {
        data: function () {
            return {
                msg: "福",
                linker: "五福临门",
                say: "恭喜发财",
                visible: false
            };
        },
        // 在 `methods` 对象中定义方法
        methods: {
            handleSelect(key, keyPath) {
                this.$http.post('data/menus.json').then(function (response) {
                    console.log(response);
                });
                if (key == "2-1") {
                    this.visible = true;
                }
            }
        }
    };


</script>

<style scoped lang='sass' rel="stylesheet/scss" type="text/css">
    .fu {
        width: 200px;
        height: 200px;
        margin: 40px auto 0 auto;
        font-family: "Microsoft YaHei";
        text-align: center;
        font-size: 180px;
        line-height: 200px;
        color: red;
        border: solid 10px red;
        border-radius: 50%;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        transition: transform 0.5s;
        -moz-transition: -moz-transform 0.5s; /* Firefox 4 */
        -webkit-transition: -webkit-transform 0.5s; /* Safari 和 Chrome */
        -o-transition: -o-transform 0.5s; /* Opera */
    }

    .fu > a {
        color: red;
        text-decoration: none;
    }

    .fu > a:visited {
        color: red;
    }

    .fu:active {
        color: #FFD700;
        border-color: #FFD700;
        transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
        -moz-transform: rotate(180deg);
        -o-transform: rotate(180deg);
    }

    .fu:active > a {
        color: #FFD700;
    }

</style>