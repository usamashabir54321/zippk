<template>
	<div>
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
					<div class="custom-col-">
						<div class="movie-item movie-item-two">
							<div class="movie-poster">
								<img src="/web/img/poster/s_ucm_poster01.jpg" alt="">
							</div>
							<div class="movie-content">
								<div class="rating"><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span></div>
								<h5 class="title"><a href="movie-details.html">Message in a Bottle</a></h5>
							</div>
						</div>
					</div>
					<div class="custom-col-">
						<div class="movie-item movie-item-two">
							<div class="movie-poster">
								<img src="/web/img/poster/s_ucm_poster02.jpg" alt="">
							</div>
							<div class="movie-content">
								<div class="rating"><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span></div>
								<h5 class="title"><a href="movie-details.html">The Parkar Legend</a></h5>
							</div>
						</div>
					</div>
					<div class="custom-col-">
						<div class="movie-item movie-item-two">
							<div class="movie-poster">
								<img src="/web/img/poster/s_ucm_poster03.jpg" alt="">
							</div>
							<div class="movie-content">
								<div class="rating"><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span></div>
								<h5 class="title"><a href="movie-details.html">The Ackle Bottle</a></h5>
							</div>
						</div>
					</div>
					<div class="custom-col-">
						<div class="movie-item movie-item-two">
							<div class="movie-poster">
								<img src="/web/img/poster/s_ucm_poster04.jpg" alt="">
							</div>
							<div class="movie-content">
								<div class="rating"><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span></div>
								<h5 class="title"><a href="movie-details.html">The Speed 2</a></h5>
							</div>
						</div>
					</div>
					<div class="custom-col-">
						<div class="movie-item movie-item-two">
							<div class="movie-poster">
								<img src="/web/img/poster/s_ucm_poster05.jpg" alt="">
							</div>
							<div class="movie-content">
								<div class="rating"><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span></div>
								<h5 class="title"><a href="movie-details.html">The Legend Emo</a></h5>
							</div>
						</div>
					</div>
					<div class="custom-col-">
						<div class="movie-item movie-item-two">
							<div class="movie-poster">
								<img src="/web/img/poster/s_ucm_poster06.jpg" alt="">
							</div>
							<div class="movie-content">
								<div class="rating"><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span></div>
								<h5 class="title"><a href="movie-details.html">Envato Bottle 88</a></h5>
							</div>
						</div>
					</div>
					<div class="custom-col-">
						<div class="movie-item movie-item-two">
							<div class="movie-poster">
								<img src="/web/img/poster/s_ucm_poster07.jpg" alt="">
							</div>
							<div class="movie-content">
								<div class="rating"><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span></div>
								<h5 class="title"><a href="movie-details.html">Message Bottle II</a></h5>
							</div>
						</div>
					</div>
					<div class="custom-col-">
						<div class="movie-item movie-item-two">
							<div class="movie-poster">
								<img src="/web/img/poster/s_ucm_poster08.jpg" alt="">
							</div>
							<div class="movie-content">
								<div class="rating"><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span></div>
								<h5 class="title"><a href="movie-details.html">The Message B.</a></h5>
							</div>
						</div>
					</div>
					<div class="custom-col-">
						<div class="movie-item movie-item-two">
							<div class="movie-poster">
								<img src="/web/img/poster/s_ucm_poster09.jpg" alt="">
							</div>
							<div class="movie-content">
								<div class="rating"><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span></div>
								<h5 class="title"><a href="movie-details.html">Tiger World Q.</a></h5>
							</div>
						</div>
					</div>
					<div class="custom-col-">
						<div class="movie-item movie-item-two">
							<div class="movie-poster">
								<img src="/web/img/poster/s_ucm_poster10.jpg" alt="">
							</div>
							<div class="movie-content">
								<div class="rating"><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span></div>
								<h5 class="title"><a href="movie-details.html">Avenger World IV</a></h5>
							</div>
						</div>
					</div>
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
	export default {
		name: 'IndexPage',
		head () {
			return {
				title: 'ZIP PK HOME',
			}
		},
		data () {
			return {
				active_tab : 'movies',
			}
		},
	}
</script>