<template>
    <el-row>
        <nv-header></nv-header>
            <div class="main">
            		<div class="main-left">
                	<nv-menu></nv-menu>
                </div>
                <div class="main-right">
                <!-- <transition name="bounce"> -->
                  <keep-alive>
                    <router-view></router-view>
                  </keep-alive>
                <!-- </transition> -->
            	</div>
            </div>
    </el-row>
</template>
<script>
import LeftMeun from '../leftMenu/index.vue';
import Header from '../header/index.vue';
export default {
    components : {
        'nv-menu' : LeftMeun,
        'nv-header': Header
    }
}
</script>
<style lang="scss">
@import "../../../assets/style/mixin.scss";
.main{
		position:relative;
		width:100%;
		min-height:720px;
		@include mixin-center-block;
	}
	.main-left{
		position:absolute;
		left:0;
		width:219px;
		height:100%;
		background-color:#f4f6f8;
	}
	.main-right{
		position:relative;

		margin-left:220px;
		height:100%;
		background-color:#fff;
	}
</style>
