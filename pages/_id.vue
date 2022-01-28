<template>
	<div>
		<div v-if="$fetchState.pending" id="web_preloader"><img src="/cd_preload.gif"></div>
		<div class="sec_cover"></div>
		<section class="movie-details-area" :style="{'background-image':`url(${baseURL}${thisObj.banner_img})`}">
			<div class="container">
				<div class="row position-relative">
					<div class="col-xl-3 col-lg-4">
						<div class="movie-details-img">
							<img :src="`${baseURL}${ thisObj.postr_img }`" alt="">
							<a :href="thisObj.sku_url" target="_blank" class="popup-video"><img src="/web/img/images/play_icon.png" alt=""></a>
						</div>
					</div>
					<div class="col-xl-6 col-lg-8">
						<div class="movie-details-content">
							<h2>{{ thisObj.title }}</h2>
							<LazyComnProdRating :point="thisObj.rating" />
							<LazyComnProdTags :tagStr="thisObj.tags" />
							<p>{{ thisObj.discription }}</p>
							<div class="movie-details-prime">
								<a :href="thisObj.sku_url" target="_blank" class="btn popup-video"><span class="play">&#x23f5;</span> Find Code</a>
							</div>
						</div>
					</div>
					<div class="movie-details-btn">
						<a href="img/poster/movie_details_img.jpg" class="download-btn" download="">Download <img src="/web/img/fonts/download.svg" alt=""></a>
					</div>
				</div>
			</div>
		</section>
		<section id="prv_sec">
			<h2 class="head2">Take a short preview</h2><br>
			<div class="video_div">
				<video controls preload="none" :poster="`${baseURL}${thisObj.banner_img}`">
					<source :src="`${baseURL}${thisObj.preview_vid}`" type="video/mp4">
					<source :src="`${baseURL}${thisObj.preview_vid}`" type="video/ogg">
					Your browser does not support the video tag.
				</video>
			</div>
		</section>
		<section v-if="relData.length > 0" class="top-rated-movie tr-movie-bg2" style="background-image: url(/web/img/bg/ucm_bg02.jpg);">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-8">
						<div class="section-title title-style-three text-center mb-40">
							<h2 class="title">Related Items</h2>
						</div>
					</div>
				</div>
				<div class="row movie-item-row">
					<div v-for="obj in relData" class="custom-col-"><ComnProdCard1 :obj="obj" /></div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		name: 'SinglePage',
		head () {
			return {
				title: 'ZIP PK SINGLE PAGE',
			}
		},
		data () {
			return {
				thisObj: {},
				relData: [],
			}
		},
		async fetch() {
			await this.getData();
		},
		fetchDelay: 1000,
		mounted () {
			setTimeout(() => {this.getRelat();},2000);
		},
		methods: {
			async getData() {
				const data = axios.get(`${this.baseURL}api/webGetById/thisProd/${this.$route.params.id}`);
				const result = await data;
				this.thisObj = result.data;
			},
			getRelat () {
				axios.get(`${this.baseURL}api/webGetById/ralatTitle/${this.$route.params.id}`).then(res => {
					this.relData = res.data;
				});
			},
		},
	}
</script>

<style>
	#prv_sec {
		padding: 40px 0px;
		text-align: center;
	}
	#prv_sec .video_div {
		display: flex;
		justify-content: center;
	}
	#prv_sec .video_div video {
		width: 40%;
	}
</style>