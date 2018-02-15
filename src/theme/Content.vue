<template>

 <div class="columns">
   <!-- Search A Restuarant -->
      <div class="column is-half" >
     <div class="field has-addons">
    <input class="input" type="text" placeholder="Search by Name or Address or Zipcode" v-model="searchKey">
</div>
            </div>

<!--Select the resturants by name-->
 <div class="column is-one-quarter" >
<div class="control">
  <div class="select">
    <select class="is-hovered" v-model="selectedLetter">
      <option :value="undefined">Sort by Name</option>
      <option v-for="a in alphabet" :value="a">{{a}}</option>
    </select>
  </div>
</div>
</div>
<!--Select By Rating -->
 <div class="column is-one-quarter" >
<div class="control">
  <div class="select">
    <select class="is-hovered" v-model="selectedRating">
      <option :value="undefined">Select by Rating</option>
      <option v-for="rating in hotelRating" :value="rating">{{rating}}</option>
    </select>
  </div>
</div>
</div>

    <div class="column is-half" v-for="name in filteredRest" v-bind:key="name.business_id">
              <div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="http://icons.iconarchive.com/icons/graphicloads/colorful-long-shadow/128/Restaurant-icon.png" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{{ name.name }}</strong> <small>{{ name.neighborhood}}</small> <small></small>
          <br>
          {{ name.address}}, {{name.city}}, {{name.state}}, {{name.postal_code}} <hr/>
          Rating: {{name.stars}}<br>

        </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">

        </div>
      </nav>
    </div>
  </article>
</div>
            </div>
           <p v-if="!filteredRest.length"><strong>Sorry, We could not find any</strong></p>
          </div>

</template>
<script>

import appService from '../app.service.js'
import hotelData from '../data/business-28262-table.json'
import rating from '../data/rating.json'
function genCharArray(charA, charZ) {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
     a.push(String.fromCharCode(i));
    }
    return a;
}

export default {

data() {
return {
alphabet:[],
hotelRating: rating,
restaurants : hotelData,
restaurantsUpdated:undefined,
selectedRating:undefined,
previousRating:undefined,
selectedRatingFlag:false,
selectedLetterFlag:false,
selectedLetter: undefined,
previousLetter:undefined,
searchKey:undefined,
previousSearchKey:undefined
}

},
watch:{
selectedLetter: function(){
  if(this.selectedLetter == this.previousLetter){
    this.selectedLetter = undefined
  }
},
selectedRating: function(){
  if(this.selectedRating == this.previousRating){
    this.selectedRating = undefined
    this.restaurantsUpdated = this.restaurants
  }
}
},
created () {
  	this.alphabet = genCharArray('a','z')
  },
computed:{
  // filter data by name
  filteredRest(){
//check if the list is updated
if(!this.selectedLetter && !this.selectedRating){
  this.restaurantsUpdated = this.restaurants
}
  if(this.selectedLetter){
    if(this.selectedLetter != this.previousLetter){

 this.restaurantsUpdated = this.restaurants

      //console.log('Testing: '+JSON.stringify(this.restaurantsUpdated))
      this.previousLetter = this.selectedLetter
    }
   this.restaurantsUpdated = this.restaurantsUpdated.filter((restaurant) => {
     let firstLetter = restaurant.name.charAt(0).toLowerCase()
     return firstLetter === this.selectedLetter
   })
  }
  if(this.selectedRating){
    if(this.selectedRating != this.previousRating){

 this.restaurantsUpdated = this.restaurantsUpdated
console.log('Testing-Rat: '+JSON.stringify(this.restaurantsUpdated))

      this.previousRating = this.selectedRating
    }
    this.restaurantsUpdated = this.restaurantsUpdated.filter((restaurant) => {
         let rating = restaurant.stars
         return rating === this.selectedRating
       })
  }
   if(this.searchKey){
     console.log('SEARCH Key:'+this.searchKey)
     return this.restaurantsUpdated.filter(restaurant => {
       return (restaurant.name.toLowerCase().includes(this.searchKey.toLowerCase()) || restaurant.address.toLowerCase().includes(this.searchKey.toLowerCase()))
       console.log(JSON.stringify(this.restaurantsUpdated))
     })
  }


console.log('RETURN-------:'+JSON.stringify(this.restaurantsUpdated))
    return this.restaurantsUpdated
  }
}
}

</script>
<style scoped>
.box{
    padding-bottom: 40px;
    height:100%;
  }
  footer{
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
  }
  .is-7{
    margin-right: 3px;
  }
  .columns{
    min-height:500px;
}
.box{
  max-height:200px;
}
.input{
  width: 660px;
}
</style>


