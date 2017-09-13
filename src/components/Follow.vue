<template>
	<div>
		<div class="content">
            <div class="newsList">
                <ul>
                    <li>
                        <li v-for="(value,index) in arrList">
                            <a href="conText.html">
                            <h2>{{index+1}}.{{value.title}}</h2>
                            <p>{{value.detail}}</p>
                        </a>
                    </li>
                    </li>
                </ul>
            </div>
        </div>		
	</div>
</template>
<script>
    export default{
        data(){
            return{
                arrList:[]
            }
        },
        mounted(){
            //获取数据
            this.fetchDate();
        },
        methods:{
            fetchDate(){
                var This=this;
                this.$http.get('src/data/follow.data').then(function(res){
                    This.arrList=res.data;
                }).catch(function(err){
                    console.log('Home',err);
                });
            }
        }
    }
</script>
<style scoped>
    .newsList {
        margin-top: 30px;
    }
</style>
