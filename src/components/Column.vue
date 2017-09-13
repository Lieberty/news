<template>
    <div>
      <mt-search
        v-model="value"
        cancel-text="取消"
        placeholder="搜索">
      </mt-search>
    </div>
    
</template>

<script>
import { Search } from 'mint-ui';

export default {
    components:{
        mtSearch:Search
    },
    methods:{
    }
}

    
</script>

<style>
.mint-searchbar {
    margin-top: 50px; 
}
    
</style>