<template>
  <div>
    <div v-if="id">
        <div class="card card-block">
    <router-link :to="{name:'showdetails', params:{id:id}}" > 
        <img :src="img_src">
     </router-link>
      </div>
  </div>
  <div v-else-if="img_src || castName || crewName">
      <div class="card card-block">
        <img :src="img_src">
        <h5 class="text-center" style="color:#ff6ec4">{{castName}}</h5>
        <h6 v-if="castCharacter" class="text-center" style="color:#fff">({{castCharacter}})</h6>
        <h5 class="text-center" style="color:#ff6ec4">{{crewName}}</h5>
        <h6 v-if="type" class="text-center" style="color:#fff">({{type}})</h6>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        props:['img_src','name','id','castName','castCharacter','crewName','type']
    }
</script>

<style scoped>
    img{
  height:320px;
  width:100%;
}

div [class^="col-"]{
  padding-left:5px;
  padding-right:5px;
}
.card{
  transition:0.5s;
  cursor:pointer;
  background: #000;
  padding: 5px;


}
.card-title{  
  font-size:15px;
  transition:1s;
  cursor:pointer;
}
.card-title i{  
  font-size:15px;
  transition:1s;
  cursor:pointer;
  color:#ffa710
}
.card-title i:hover{
  transform: scale(1.25) rotate(100deg); 
  color:#18d4ca;
  
}
.card:hover{
  transform: scale(1.05);
  box-shadow: 10px 10px 15px rgba(0,0,0,0.3);
}
.card-text{
  height:80px;  
}

.card::before, .card::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: scale3d(0, 0, 1);
  transition: transform .3s ease-out 0s;
  background: rgba(255, 255, 255, 0.1);
  content: '';
  pointer-events: none;
}
.card::before {
  transform-origin: left top;
}
.card::after {
  transform-origin: right bottom;
}
.card:hover::before, .card:hover::after, .card:focus::before, .card:focus::after {
  transform: scale3d(1, 1, 1);
}
</style>