<template>
    <div>
        <div v-on:click="onToast">提示</div>
        <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
    </div>
</template>

<script type="text/ecmascript-6">
    import {Toast} from "mint-ui";
    module.exports = {
        data: function () {
            return {
                slots: [
                    {
                        flex: 1,
                        values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
                        className: 'slot1',
                        textAlign: 'right'
                    }, {
                        divider: true,
                        content: '-',
                        className: 'slot2'
                    }, {
                        flex: 1,
                        values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
                        className: 'slot3',
                        textAlign: 'left'
                    }
                ]
            };
        },
        // 在 `methods` 对象中定义方法
        methods: {
            onToast: function () {
                Toast("123");
            },
            onValuesChange: function (picker, values) {
                if (values[0] > values[1]) {
                    picker.setSlotValue(1, values[0]);
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