<script setup>
    import { RouterView } from 'vue-router'
</script>


<template>
    <div id="myHome">
        <img src="" class="Image">
        <div class="message">
            <router-link to="/myHome"  class="setInner">个人信息</router-link>
            <router-link to="/sign" class="setInner">签到记录</router-link>
        </div>
        <img src="../assets/版权标识.png" class="logo">
    </div>

</template>

<style scoped>

#myHome{
    display: flex;
    flex-direction: column;
    text-align: center;
}


.Image{
    margin: 24px auto 48px;
    width:200px;
    height: 200px;
    background-color: rgb(231, 231, 231);
}

.logo{
    margin: 0 auto;
    width: 400px;
}

.message{
    
    display: flex;
    margin: 0 auto;
    width: 400px;

    flex-direction: column;
}

.setInner{
    color: #FFF;
    font-size: large;
    height: 70px;
    line-height: 70px;
    border-radius: 50px;
    margin: 0 0 48px;
    text-decoration: none;
    padding: 0;
    background-color: rgb(157, 041, 050);
}

</style>