<template>
	<div>
		<section class="top-rated-movie tr-movie-bg2" style="background-image: url(/web/img/bg/ucm_bg02.jpg);">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-8">
							<!-- SECTION TITLES -->
						<div class="section-title title-style-three text-center mb-40">
							<div class="main_search"><form @submit.prevent="searchAct"><input type="text" v-model="sStr" required placeholder="FIND FAVORITE MEDIA"><button>🔍</button></form></div>
							<br>
							<h2 v-if="srchdStr" class="title">Search Result For "{{ srchdStr }}"</h2>
						</div>
					</div>
				</div>
				<div v-if="sArr.length > 0" class="row movie-item-row">
					<div v-for="obj in sArr" class="custom-col-"><ComnProdCard1 :obj="obj" /></div>
				</div>
				<div v-else id="else_corp"></div>
			</div>
		</section>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		name: 'SearchPage',
		head () {
			return {
				title: 'ZIP PK SEARCH PAGE',
			}
		},
		data () {
			return {
				sArr: [],
				sStr: '',
				srchdStr: null,
			}
		},
		methods: {
			searchAct () {
				axios.get(`${this.baseURL}api/webGetById/srchTitle/${this.sStr}`).then(res => {
					this.sArr = res.data;
					this.srchdStr = this.sStr;
				});
			},
		},
	}
</script>

<style>
	div#else_corp {height: 27vh;}
</style>