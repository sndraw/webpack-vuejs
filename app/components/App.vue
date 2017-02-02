<template>
    <div class="fu">{{msg}}</div>
</template>

<script>
module.exports={
     data:function(){
       return  { msg:"福"};
     }
};

</script>

<style>
    html{
       background-color:#CC9966;
    }
    .fu{
       width:200px;
       height:200px;
       margin:40px auto 0 auto;
       font-family:"Microsoft YaHei";
       text-align:center;
       font-size:180px;
       line-height:200px;
       color:red;
       border:solid 10px red;
       border-radius:50%;
    }




</style>