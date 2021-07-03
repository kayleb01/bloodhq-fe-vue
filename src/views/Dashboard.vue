<template>
  <div id="dashboard">
    <Logo />
    <div id="search-container" class="flex flex-col justify-center items-center">
      <Filter />
      <div id="blood-container" class="grid grid-flow-col grid-cols-4 gap-4 items-center;">
          <div v-for = "i in 4" :key= "i" class="sale-box bg-white rounded-lg shadow-lg border">
            <h3>A+</h3>
            <div class="sale-img">
              <img src="/img/pant1.svg" alt="">
            </div>
            <div class="sale-details flex justify-between items-center">
              <p class="price font-medium">NGN 14,000</p>
              <p class="addToCart"><img src="/img/addIcon.svg" alt="add to cart"></p>
            </div>
          </div>
          </div>
      </div>
  </div>
</template>

<script>
import Logo from '../components/Logo';
import Filter from '../components/Filter.vue';
export default {
  name: 'Dashboard',
  components: {
    Filter,
    Logo
  }
}
</script>
<style lang="scss">

#dashboard {
  font-family: 'DM Sans', sans-serif;
  width: 90%;
  margin: 0 auto;
}
.sale-box {
  max-width: 12em;
  
  padding: 1em 1em;
  min-height: 10em;
}
.sale-img {
  margin: 1em 0;
}
.addToCart {
  max-width: 1em;
  img {
    width: 100%;
  }
}
#search-container {
  
}
#blood-container {
  max-width: 70%;
  margin: 0 auto;
}
</style>

