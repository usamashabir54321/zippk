<template>
	<div>
		<div v-if="$fetchState.pending" id="web_preloader"><img src="/cd_preload.gif"></div>
		<section class="top-rated-movie tr-movie-bg2" style="background-image: url(/web/img/bg/ucm_bg02.jpg);">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-8">
							<!-- SECTION TITLES -->
						<div class="section-title title-style-three text-center mb-40">
							<h2 class="title">Top Online Shows Download</h2>
						</div>
							<!-- WEB TAB LISTS -->
						<div class="tr-movie-menu-active text-center">
							<button @click="active_tab = 'movies'" :class="active_tab == 'movies' ? 'active' : ''">Movies</button>
							<button @click="active_tab = 'seasons'"  :class="active_tab == 'seasons' ? 'active' : ''">Seasons</button>
							<button @click="active_tab = 'animations'"  :class="active_tab == 'animations' ? 'active' : ''">Animations</button>
						</div>
					</div>
				</div>
				<div class="row movie-item-row">
						<!-- ACTIVE TAB CARDS -->
					<div v-show="active_tab == 'movies'" v-for="obj in topMovie" class="custom-col-"><ComnProdCard1 :obj="obj" /></div>
					<div v-show="active_tab == 'seasons'" v-for="obj in topSeason" class="custom-col-"><ComnProdCard1 :obj="obj" /></div>
					<div v-show="active_tab == 'animations'" v-for="obj in topAnime" class="custom-col-"><ComnProdCard1 :obj="obj" /></div>
				</div>
					<!-- SEE ALL LINKS -->
				<div class="tr-movie-btn text-center mt-25">
					<nuxt-link v-if="active_tab == 'movies'" to="/movies" class="btn">BROWSE ALL MOVIES</nuxt-link>
					<nuxt-link v-if="active_tab == 'seasons'" to="/seasons" class="btn">BROWSE ALL SEASONS</nuxt-link>
					<nuxt-link v-if="active_tab == 'animations'" to="/animations" class="btn">BROWSE ALL ANIMATIONS</nuxt-link>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		name: 'IndexPage',
		head () {
			return {
				title: 'ZIP PK HOME',
			}
		},
		data () {
			return {
				topMovie: [],
				topSeason: [],
				topAnime: [],
				active_tab : 'movies',
			}
		},
		async fetch() {
			await this.getData();
		},
		fetchDelay: 1000,
		methods: {
			async getData() {
				const data = axios.get(`${this.baseURL}api/webOnlyGet/home`);
				const result = await data;
				result.data.topMovie.forEach((obj) => {
					this.topMovie.push(obj)
				})
				result.data.topSeason.forEach((obj) => {
					this.topSeason.push(obj)
				})
				result.data.topAnime.forEach((obj) => {
					this.topAnime.push(obj)
				})
			},
		},
	}
</script>