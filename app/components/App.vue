<template>
    <div class="fu">
        <router-link to="/home">{{msg}}</router-link>
    </div>
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
       -webkit-border-radius:50%;
       -moz-border-radius:50%;
       transform: rotateX(180deg) rotateY(180deg);
       -webkit-transform: rotateX(180deg) rotateY(180deg);
       -moz-transform: rotateX(180deg) rotateY(180deg);
    }
     .fu >a{
        color:red;
        text-decoration: none;
     }

     .fu >a:visited{
        color:red;
     }
     .fu:hover{
        border-color:#FFD700;
     }
     .fu:hover >a{
        color:#FFD700;
     }



</style>