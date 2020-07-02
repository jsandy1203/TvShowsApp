<template>
	<div>
		<Search />
		<div>
			<div v-if="!loading">
				<div class="row mt-4">
					<div class="col-md-12 col-sm-12">
					<h3 style="color:#ff6ec4">Shows in order of Rating</h3>
				</div>
				</div>
				<div class="row mt-2">
				<div
					class="col-md-3 col-sm-6 mb-4"
					v-for="show in showsByRating"
					:key="show.id">
					<CardItem
						v-if="((show || {}).image || {}).medium"
						:name="show.name"
						:img_src="show.image.medium"
						:id="show.id"/>
				</div>
				</div>
			</div>
			<div v-else>
				<Spinner />
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';
	import Spinner from '@/components/Spinner.vue';
	import CardItem from '@/components/CardItem.vue';
	import Search from '@/components/Search.vue';
	export default {
		data() {
			return {
				totalShows: [],
			};
		},
		methods: {
			...mapActions(['fetchShows']),
		},
		computed: {
			...mapGetters(['loading', 'showsByRating']),
		},
		created() {
			this.fetchShows();

		},
		components: {
			CardItem,
			Search,
			Spinner,
		},
	};
</script>

<style >
	
</style>
