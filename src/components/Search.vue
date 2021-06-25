<template>
    <div>
        <br><br>
        <form @submit="onSubmit">
            <div class="row"> 
                <div class="form-group col-md-12">
        <input type="text"
                v-model="text"
                placeholder="Search Your Fav Show Here"
                required>
                </div>
                <div class="form-group col-md-12">
        <button type="submit" class="btn btn-secondary btn-block" >Search Here </button>
        </div>
        </div>
        </form>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
    export default {
        data() {
            return {
                text: ''
            }
        },

        methods:{
           ...mapActions(['searchShows']),
           onSubmit(e) {
               e.preventDefault();
               this.searchShows(this.text);
               this.text ='';
           }
        }
        
    }
</script>

<style >
    /* .btn {
 display: inline-block;
    text-decoration: none;
    font-size: 18px;
    color: #fff;
    background: #333;
    padding: 5px 5px;
    border: none;
    cursor: pointer;
    font-weight: bold;
}

.btn-block {
  display: block;
  width: 100%;
}

.btn-dark {
    background: #000;
    color: #fff;
}


input[type='text'] {
    display: block;
  width: 100%;
  padding: 0.4rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  background: #000;
  color:#fff;
}

input:focus{
    color: #fff;
}

::placeholder{
    color: #666;
} */
</style>