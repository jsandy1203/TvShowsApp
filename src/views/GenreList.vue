<template>
	<div>
		<div class="row mt-5">
			<div class="col-lg-3 col-lg-offset-1 col-md-4 col-sm-5 col-sx-12">
				<h4 class="genre">Select the genre:</h4>
			</div>
			<div class="col-lg-offset-1 col-lg-7 col-md-8 col-sm-7 col-sx-12">
			<form class="form-inline justify-content-center text-center">
				<input type="radio" name="demo" value="0" id="radio-one" class="form-radio" v-model="index" />
				<label for="radio-one">
					<b>Romance</b>
				</label>
				&nbsp;&nbsp;&nbsp;
				<input
					type="radio" name="demo" value="1" id="radio-two" class="form-radio" v-model="index"
				/>
				<label for="radio-one">
					<b>Action</b>
				</label>
				<input type="radio" name="demo" value="2" id="radio-two" class="form-radio" v-model="index" />
				<label for="radio-one">
					<b>Comedy</b>
				</label>
				<input type="radio" name="demo" value="3" id="radio-two" class="form-radio" v-model="index" />
				<label for="radio-one">
					<b>Science-Fiction</b>
				</label>
				<input type="radio" name="demo" value="4" id="radio-two" class="form-radio" v-model="index" />
				<label for="radio-one">
					<b>Horror</b>
				</label>
				<input type="radio" name="demo" value="5" id="radio-two" class="form-radio" v-model="index" />
				<label for="radio-one">
					<b>Drama</b>
				</label>
			</form>
			</div>
		</div>
		<br>
		<div>
		<div class="row mt-2"  v-if="!loading">
                <div class="col-md-3 col-sm-6 mb-4" v-for="show in showsByGenres[index]" :key="show.id">
                    <CardItem :img_src="show.image.medium" :id="show.id"/>
                </div>
        </div>
		
		
		<div v-else>
			<Spinner/>
		</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";
import CardItem from "../components/CardItem";
import Spinner from '../components/Spinner';
export default {
	data() {
		return {
			index: "0"
		};
	},
	components: {
		CardItem,
		Spinner
	},
	computed: mapGetters(["showsByGenres",'loading'])
};
</script>

<style scoped>

</style>
