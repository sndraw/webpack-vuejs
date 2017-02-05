<template>
    <div class="wufu">
        <router-link to="/">{{msg}}</router-link>
    </div>
</template>

<script>
module.exports={
     data:function(){
       return  { msg:"五福临门"};
     }
};


</script>

<style>
    html{
       background-color:#CC9966;
    }
    .wufu{
       width:100px;
       margin:40px auto 0 auto;
       font-family:"Microsoft YaHei";
       text-align:center;
       font-size:66px;
       color:red;
       border:solid 10px red;
    }
     .wufu >a{
        color:red;
        text-decoration: none;
     }

     .wufu >a:visited{
        color:red;
     }
     .wufu:active{
        border-color:#FFD700;
        background-color:red;
     }
     .wufu:active >a{
        color:#FFD700;
     }


</style>