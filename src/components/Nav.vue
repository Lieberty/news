<template>
	<div class="nav">
      	<!-- <ul>
      		        <router-link to="/home" tag="li" active-class="active">
      		    		<a href="javascript:;">首页</a>
      		    	</router-link>
      		    	<router-link to="/follow" tag="li" active-class="active">
      		    		<a href="javascript:;">关注</a>
      		    	</router-link>
      		    	<router-link to="/column" tag="li" active-class="active">
      		    		<a href="javascript:;">栏目</a>
      		    	</router-link>
      	        </ul> -->
      	<mt-navbar>
		 	<mt-tab-item id="1">
		  		<router-link to="/home">
	    			<a href="javascript:;">&nbsp&nbsp&nbsp&nbsp首页&nbsp&nbsp&nbsp&nbsp</a>
	    		</router-link>
	   		</mt-tab-item>
		  	<mt-tab-item id="2">
		  		<router-link to="/follow">
	    			<a href="javascript:;">&nbsp&nbsp&nbsp&nbsp关注&nbsp&nbsp&nbsp&nbsp</a>
	    		</router-link>
	    	</mt-tab-item>
		  	<mt-tab-item id="3">
		  		<router-link to="/column">
	    			<a href="javascript:;">&nbsp&nbsp&nbsp&nbsp栏目&nbsp&nbsp&nbsp&nbsp</a>
	    		</router-link>
	    	</mt-tab-item>
		</mt-navbar>
    </div>
</template>
<script>
import { Navbar, TabItem } from 'mint-ui';

export default {
	components:{
		mtNavbar:Navbar,
		mtTabItem:TabItem
	}
}
	
</script>
<style>
	.mint-tab-item .router-link-active {	
		padding-bottom: 10px;
		border-bottom: 5px solid #46A3FF;
		color: #46A3FF;
		font-size: 16px;
	}
</style>