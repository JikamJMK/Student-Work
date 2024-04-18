<script setup>
    import { RouterView } from 'vue-router'
    import {ref} from 'vue'
    const items = ref([
        {date:'2023-07-09'},
        {date:'2023-07-09'},
        {date:'2023-07-09'},
        {date:'2023-07-09'},
        {date:'2023-07-09'}
    ])

</script>


<template>

    <div class="record">
        我的签到记录
    </div>

    <li v-for="(item,index) in items" class="container">        
            <div >
                第{{index+1}}次打卡
            </div>
            <div class="date">
                日期:{{ item.date }}
            </div>
    </li>


</template>

<style scoped>
.record{
    height: 32px;
    line-height: 30px;
    color: #a8a4a4;
}
.container{
    display:flex;
    line-height: 64px;
    list-style: none;
    height: 80px;
    border-top:1px solid rgb(206, 206, 206);
}

.date{
    margin-left: auto;
    color: #a8a4a4;
}


</style>