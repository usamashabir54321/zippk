<template>
	<div>
		<section class="top-rated-movie tr-movie-bg2" style="background-image: url(/web/img/bg/ucm_bg02.jpg);">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-8">

							<!-- SECTION TITLES -->
						<div class="section-title title-style-three text-center mb-40">
							<h2 class="title">YOUTBE CECKING PAGE</h2>
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
			</div>
		</section>
	</div>
</template>

< src=""></script>

<script>
	export default {
		head () {
			return {
				link: [
					{ rel:"stylesheet" , href:"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" },
				],
				script: [
					{ src:"https://apis.google.com/js/api.js" },
					{ src:"/youtube.js" },
				],
			}
		},
	}
</script>