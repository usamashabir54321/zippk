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
							<!-- INDEX.HTML -->
						<div class="container">
							<h1 style="text-align:center;">Youtube Subscribe App</h1>
							<br />
							<div id="block">
								<h2>Let's start by first Authenticating to Youtube</h2>
								<br />
								<button onclick="authenticate().then(loadClient)" class="btn btn-danger btn-block">Sign in To Youtube</button>
							</div>
							<div>
								<div class="form-group">
									<input class="form-control" onchange="channelChanges()" type="text" id="channelId" placeholder="ChannelId"/>
								</div>
								<div class="form-group">
									<button id="subscribe" onclick="subscribe()" class="btn btn-danger btn-block">Subscribe</button>
								</div>
								<div id="result"></div>
							</div>
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
				link: [
					{ rel:"stylesheet" , href:"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" },
				],
				script: [
					{ src:"https://apis.google.com/js/api.js" },
					{ src:"/youtube.js" },
				],
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