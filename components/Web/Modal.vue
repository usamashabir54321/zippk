<template>
	<div class="modal-backdrop">
		<div class="modal">
			<span @click="$emit('close')" class="remvoer">x</span>
			<div class="modal-body">
				<input type="text" class="form__field" placeholder="Enter Code" v-model="str" @keyup.enter="findProd" required maxlength="10">
				<br>
				<div v-if="is_valid" id="pass" class="message">Valid Code</div>
				<div v-if="is_valid == false" id="fail" class="message">Invalid Code</div>
				<br>
				<div id="find_code">
					<span>Find Code</span>
					<a :href="url" target="_blank">{{url}}</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		props: ['url'],
		data () {
			return {
				str: '',
				is_valid: null,
			}
		},
		methods: {
			findProd () {
				if (this.str.length == 10) {
					axios.get(`${this.baseURL}api/webGetById/findProd/${this.$route.params.id},${this.str}`).then(res => {
						if (res.data == 0) this.is_valid = false;
						else {
							this.str = '';
							this.is_valid = true;
							setTimeout(() => {
								window.open(res.data);
							},500);
						}
					});
				}
			},
		},
	}
</script>

<style scoped>
	.modal-backdrop {
	    position: fixed;
	    width: 100%;
	    height: 100%;
	    z-index: 8;
	    background: #0000008c;
	}
	.modal {
	    position: absolute;
	    top: 45%;
	    left: 50%;
	    width: 22%;
	    padding: 16px;
	    background-color: white;
	    border-radius: 4px;
	    transform: translate(-50%, -50%);
	}
	span.remvoer {
	    position: absolute;
	    right: -12px;
	    top: -11px;
	    background-color: black;
	    color: white;
	    border-radius: 50%;
	    padding: 1px 9px 5px 9px;
	    font-size: 18px;
	    cursor: pointer;
	}
	.form__field {
	    width: 100%;
	    background: white;
	    color: black;
	    font: inherit;
	    font-size: 20px;
	    text-align: center;
	    letter-spacing: 2px;
	    font-weight: 900;
	    font-family: cursive;
	    box-shadow: 0 10px 10px 0 rgb(0 0 0 / 54%);
	    outline: 0;
	    padding: 10px 18px 12px;
	    border: 1px solid rgba(133,133,133,0.54902);
	}
	.message {
	    text-align: center;
	    padding: 15px;
	    font-size: 18px;
	    letter-spacing: 1px;
	    color: white;
	    margin-top: 25px;
	}
	#fail {background-color: #8b0707;}
	#pass {background-color: #055405;}
	@media (max-width: 768px) {.modal {width: 60%;}}@media (max-width: 320px) {.modal {width: 70%;}div#find_code a {font-size: 13px;}}
</style>