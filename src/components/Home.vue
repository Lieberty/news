<template>
	<div>
		<div class="content">
         	<BannerView></BannerView>  
            <div class="newsList">
                <ul>
                    <li v-for="(value,index) in arrList">
                        <router-link :to="'/article/'+value.id">
                            <h2>{{index+1}} . {{value.title}}</h2>
                            <p>{{value.detail}}</p>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>		
	</div>
</template>
<script> 
    import BannerView from './Banner.vue'

    export default{
        data(){
            return {
                arrList:[]        
            }
        },
        components:{
            BannerView,
        },
        mounted(){
            //获取数据
            this.fetchDate();
        },
        methods:{
            fetchDate(){
                var This=this;
                this.$http.get('src/data/index.data').then(function(res){
                    This.arrList=res.data;
                }).catch(function(err){
                    console.log('Home',err);
                });
            },   
        }
    }
</script>