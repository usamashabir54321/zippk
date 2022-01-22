<template>
	<div>
		<section class="movie-details-area" data-background="img/bg/movie_details_bg.jpg" style="background-image: url(/web/img/bg/movie_details_bg.jpg);">
			<div class="container">
				<div class="row position-relative">
					<div class="col-xl-3 col-lg-4">
						<div class="movie-details-img">
							<img src="/web/img/poster/movie_details_img.jpg" alt="">
							<a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" target="_blank" class="popup-video"><img src="/web/img/images/play_icon.png" alt=""></a>
						</div>
					</div>
					<div class="col-xl-6 col-lg-8">
						<div class="movie-details-content">
							<h2>The Easy <span>Reach</span></h2>
							<div class="banner-meta"><ul><li class="quality"><span>hd</span><span>Action</span><span>Arcade</span></li></ul></div>
							<p>Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There are many
								variations of passages of lorem
							Ipsum available, but the majority have suffered alteration in some injected humour.</p>
							<div class="movie-details-prime">
								<a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" target="_blank" class="btn popup-video"><span class="play">&#x23f5;</span> Find Code</a>
								<a href="https://www.youtube.com/watch?v=R2gbPxeNk2E" target="_blank" class="btn popup-video"><span class="play">&#x23f5;</span> Play Trailer</a>
							</div>
						</div>
					</div>
					<div class="movie-details-btn">
						<a href="img/poster/movie_details_img.jpg" class="download-btn" download="">Download <img src="/web/img/fonts/download.svg" alt=""></a>
					</div>
				</div>
			</div>
		</section>
		<section class="top-rated-movie tr-movie-bg2" style="background-image: url(/web/img/bg/ucm_bg02.jpg);">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-8">
							<!-- SECTION TITLES -->
						<div class="section-title title-style-three text-center mb-40">
							<h2 class="title">Related Items</h2>
						</div>
					</div>
				</div>
				<div class="row movie-item-row">
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
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		name: 'SinglePage',
		head () {
			return {
				title: 'ZIP PK SINGLE PAGE',
			}
		},
	}
</script>