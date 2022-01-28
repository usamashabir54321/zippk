<template>
	<nuxt-link :to="`/${obj.id}`">
		<div class="movie-item movie-item-two">
			<div class="movie-poster">
				<img :src="`${baseURL}${ obj.postr_img }`" alt="">
			</div>
			<div class="movie-content">
				<LazyComnProdRating :point="obj.rating" />
				<h5 class="title"><a href="movie-details.html">{{ obj.title }}</a></h5>
			</div>
		</div>
	</nuxt-link>
</template>

<script>
	export default {
		props: ['obj'],
	}
</script>