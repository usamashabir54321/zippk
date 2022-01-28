<template>
	<div>
		<div v-if="$fetchState.pending" id="web_preloader"><img src="/cd_preload.gif"></div>
		<section class="top-rated-movie tr-movie-bg2" style="background-image: url(/web/img/bg/ucm_bg02.jpg);">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-8">
							<!-- SECTION TITLES -->
						<div class="section-title title-style-three text-center mb-40">
							<h2 class="title">OUR ALL ANIMATIONS</h2>
						</div>
					</div>
				</div>
				<div class="row movie-item-row">
					<div v-for="obj in alldata" class="custom-col-"><ComnProdCard1 :obj="obj" /></div>
				</div>
					<!-- LOAD MORE -->
				<div class="tr-movie-btn text-center mt-25">
					<button v-if="is_loadMor" @click="loadMore" class="btn">Load More</button>
					<button v-else class="btn">All Data Loaded</button>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		name: 'AnimePage',
		head () {
			return {
				title: 'ZIP PK ANIMATIONS PAGE',
			}
		},
		data () {
			return {
				alldata: [],
				is_loadMor: true,
			}
		},
		async fetch() {
			await this.getData();
		},
		fetchDelay: 1000,
		methods: {
			async getData() {
				const data = axios.get(`${this.baseURL}api/webOnlyGet/animes`);
				const result = await data;
				result.data.forEach((obj) => {
					this.alldata.push(obj)
				})
			},
			async loadMore() {
				var lasCardId = this.alldata[this.alldata.length-1].id;
				const data = axios.get(`${this.baseURL}api/webGetById/loadAnimes/${lasCardId}`);
				const result = await data;
				if (result.data.length > 0) {
					result.data.forEach((obj) => {
						this.alldata.push(obj)
					})
				} else this.is_loadMor = false;
			},
		},
	}
</script>