<template>
	<div>
		<section class="top-rated-movie tr-movie-bg2" style="background-image: url(/web/img/bg/ucm_bg02.jpg);">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-8">
							<!-- SECTION TITLES -->
						<div class="section-title title-style-three text-center mb-40">
							<h2 class="title">Search Result For "Sing 2"</h2>
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
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		name: 'SearchPage',
		head () {
			return {
				title: 'ZIP PK SEARCH PAGE',
			}
		},
	}
</script>