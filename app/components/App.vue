<template>
    <div>
        <el-dialog v-model="visible" title="恭喜发财">
            <div class="fu">
                <router-link to="/home">{{msg}}</router-link>
            </div>
        </el-dialog>
        <el-button v-on:click="greet">恭喜发财</el-button>
    </div>
</template>

<script type="text/ecmascript-6">
    module.exports = {
        data: function () {
            return {
                msg: "福",
                visible: false
            };
        },
        // 在 `methods` 对象中定义方法
        methods: {
            greet: function (event) {
                this.visible = true;
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