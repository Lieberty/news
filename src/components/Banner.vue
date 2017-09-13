<template>
	<div class="banner">
    <!-- <ul class="clearfix">
        <li><img src="../assets/images/img_1.jpg" alt=""/>
          <div class="text-box">
              <h2>还可以降低首付款健身房11111</h2>
                <p>刘德华11 / 文</p>
            </div>
        </li>
        <li><img src="../assets/images/img_2.jpg" alt=""/>
          <div class="text-box">
              <h2>还可以降低首付款健身房2222</h2>
                <p>刘德华22 / 文</p>
            </div>
        </li>
        <li><img src="../assets/images/img_3.jpg" alt=""/>
          <div class="text-box">
              <h2>还可以降低首付款健身房333</h2>
                <p>刘德华33 / 文</p>
            </div>
        </li>
    </ul>
    <ol>
        <li class="active"></li>
        <li></li>
        <li></li>
    </ol> -->
   <mt-swipe :auto="4000" style="width:100%; height:4rem;">
     <mt-swipe-item><img src="../assets/images/1.png" alt=""/></mt-swipe-item>
     <mt-swipe-item><img src="../assets/images/2.png" alt=""/></mt-swipe-item>
     <mt-swipe-item><img src="../assets/images/3.png" alt=""/></mt-swipe-item>
   </mt-swipe>
  </div>
</template>
<script>
  import { Swipe, SwipeItem } from 'mint-ui';

	export default{
    components:{
      mtSwipe:Swipe,
      mtSwipeItem:SwipeItem
    },
		/*mounted(){
    	this.slider();  
  	},
		methods:{
  		slider:function(){
    		$(function (){
       		var mySwipe=Swipe($('.banner')[0],{
		        auto:2000,
		        continuous:true,
		        stopPropation:true,
        		callback:function (index,element){
	            $('.banner ol li').removeClass('active');
	            $('.banner ol li').eq(index).addClass('active');
		        }
       		});
      	});
  		}
		}*/
	}
</script>
<style>
  img {
    width: 100%;
    height: 100%;
  }
  .mint-swipe {
    margin-top: 16px;
  }
</style>