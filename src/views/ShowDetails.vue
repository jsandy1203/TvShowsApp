<template>
    <div>
        <div v-if="!loading">
            <div class="row ">
                <div class="col-md-4 col-sm-6 col-lg-3 col-xs-12 mt-8 justify-content">
                    <br>
                    <img class="p-2 img-fluid" :src="showDetails.image.medium" alt="image">
                </div>
                <div class="col-md-8 col-lg-9 col-sm-6 mt-4 col-xs-12 justify-content">
                    <h3 style="color:#ff6ec4">Summary</h3>
                    <p class="showdetails" v-html="showDetails.summary"></p>
                    <p class="showdetails"><b>Rating:</b> {{showDetails.rating.average}}</p>
                    <p class="showdetails"><b>Genres:</b> {{showDetails.genres.join()}}</p>
                    <p class="showdetails"><b>Premiered on:</b> {{showDetails.premiered}}</p>
                </div>
            </div>
            <br>
            <div class="row mt-4">
					<div class="col-md-12 col-sm-12">
					<h3 style="color:#ff6ec4">The Cast Details of "{{showDetails.name}}"</h3>
				</div>
				</div>
            <div class="row mt-2">
                <div class="col-md-3 col-sm-6 mb-4" v-for="cast in showCast" :key="cast.id">
                    <CardItem :img_src="cast.person.image.medium"
                    :castName="cast.person.name"
                    :castCharacter="cast.character.name" alt="image"/>
                </div>
            </div>
            <br>
            <div class="row mt-4">
					<div class="col-md-12 col-sm-12">
					<h3 style="color:#ff6ec4">Some of the Images from "{{showDetails.name}}"</h3>
				</div>
				</div>
            <div class="row mt-2" >
                <div class="col-md-3 col-sm-6 mb-4" v-for="image in showImages" :key="image.id">
                    <CardItem :img_src="image.resolutions.original.url" alt="image"/>
                </div>
            </div>
            <br>
            <div class="row mt-4">
					<div class="col-md-12 col-sm-12">
					<h3 style="color:#ff6ec4">The Crew Details of "{{showDetails.name}}"</h3>
				</div>
				</div>
            <div class="row mt-2" >
                <div class="col-md-3 col-sm-6 mb-4" v-for="crew in showCrew" :key="crew.id">
                    <CardItem :name="crew.person.name"
                               v-if="crew  && crew.person && crew.type && crew.person.image && crew.person.image.original"
                                :img_src="crew.person.image.original"
                                :crewName="crew.person.name"
                                :type="crew.type" />
                </div>
            </div>
        </div>
        <div v-else>
            <Spinner/>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Spinner from '@/components/Spinner.vue';
import CardItem from '@/components/CardItem.vue';
    export default {
        props: ['id'],
        components: {
            Spinner,
            CardItem
        },
        methods: {
            ...mapActions(['showInfo'])
        },
        computed: mapGetters(['showDetails', 'loading', 'showImages', 'showCast','showCrew']),
        created() {
            this.showInfo(this.id);
        }
    }
</script>

<style scoped>
/* .showdetails{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 5px 0;
    line-height: 20px;
    padding: 5px 0;
    padding-right: 10px;
    text-align: justify;
    font-weight: 500;
    color:#fff;

} */

</style>