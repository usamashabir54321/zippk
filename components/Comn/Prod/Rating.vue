<template>
	<div class="rating">
		<img v-if="point == 0" v-for="num in 5" src="/empty_star.png">
		<div v-if="point == 0.5"><img v-for="num in 1" src="/half_star.png"><img v-for="num in 4" src="/empty_star.png"></div>
		<div v-if="point == 1"><img v-for="num in 1" src="/fill_star.png"><img v-for="num in 4" src="/empty_star.png"></div>
		<div v-if="point == 1.5">
			<img v-for="num in 1" src="/fill_star.png">
			<img v-for="num in 1" src="/half_star.png">
			<img v-for="num in 3" src="/empty_star.png">
		</div>
		<div v-if="point == 2"><img v-for="num in 2" src="/fill_star.png"><img v-for="num in 3" src="/empty_star.png"></div>
		<div v-if="point == 2.5">
			<img v-for="num in 2" src="/fill_star.png">
			<img v-for="num in 1" src="/half_star.png">
			<img v-for="num in 2" src="/empty_star.png">
		</div>
		<div v-if="point == 3"><img v-for="num in 3" src="/fill_star.png"><img v-for="num in 2" src="/empty_star.png"></div>
		<div v-if="point == 3.5">
			<img v-for="num in 3" src="/fill_star.png">
			<img v-for="num in 1" src="/half_star.png">
			<img v-for="num in 1" src="/empty_star.png">
		</div>
		<div v-if="point == 4"><img v-for="num in 4" src="/fill_star.png"><img v-for="num in 1" src="/empty_star.png"></div>
		<div v-if="point == 4.5">
			<img v-for="num in 4" src="/fill_star.png">
			<img v-for="num in 1" src="/half_star.png">
		</div>
		<img v-if="point == 5" v-for="num in 5" src="/fill_star.png">
	</div>
</template>

<script>
	export default {
		props: ['point'],
	}
</script>