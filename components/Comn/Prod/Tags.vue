<template>
	<div class="banner-meta">
		<ul>
			<li v-if="tagStr" class="quality">
				<span v-for="obj in this.tagStr.split(',')">{{ obj }}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: ['tagStr'],
	}
</script>