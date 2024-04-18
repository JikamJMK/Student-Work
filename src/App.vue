<script setup>
    import { RouterView } from 'vue-router'
    import sign from './components/sign.vue'
    import myHome from './components/myHome.vue'
</script>


<template >
    <div class="nav">

        <router-link to="/myHome"  class="setInner">我的</router-link>
        <router-link to="/sign" class="setInner">签到</router-link>
        
    </div>
    <router-view/>
</template>

<style scoped>


.setInner{
    margin: 16px,0;
    padding: 24px;
    font-weight: bold;
    color: #f3ebeb;
    text-decoration: none;
}

.nav{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 48px;
    background-color: rgb(218, 069, 036);
}

</style>