## webstorm怎么设置支持.vue文件的代码自动格式化？
>#### 步骤一:
>##### 添加File Type
>为.vue文件添加为HTML type。这样就能将.vue文件识别为html类型，并进行格式化。

>详情：<http://blog.csdn.net/dcatfly/article/details/53123318>

>#### 步骤二:
>#### script代码块写明type

    <script type="text/ecmascript-6">
      export default {
        props: []
      }
    </script>
>#### style 代码块写明rel
>##### less格式化
>如果你在.vue中使用了less语法，设置style代码块的属性rel

    <style scoped lang="less" rel="stylesheet/less" type="text/css">
     .class:{
         color:red;
     }
    </style>
    
>##### sass格式化
>如果你在.vue中使用了sass语法，设置style代码块的属性rel

    <style scoped lang='sass' rel="stylesheet/scss" type="text/css">
     .class:{
         color:red;
     }
    </style>