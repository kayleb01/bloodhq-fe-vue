<template>
    <div>
                <form action="#">
                    <div class="input-box">
                        <label for="fullname">FullName</label>
                        <input type="text" name="fullname" placeholder="james eric" class="box" id="fullname" />
                    </div>
                    <div class=" grid grid-cols-2">
                        <div class="input-box"><label for="state">State</label>
                        <Dropdown v-model="selectedCity1" :options="cities" optionLabel="name" optionValue="code" placeholder="Select a State" />
                        </div>
                        <div class="input-box">
                            <label for="city">City</label>
                        <Dropdown v-model="selectedCity1" :options="cities" optionLabel="name" optionValue="code" placeholder="Select a City" />
                        </div>
                        
                    </div>
                    <div class="input-box">
                        <label for="Phone">Phone Number</label>
                        <input type="number" placeholder="02833993" name="Phone" class="box" id="Phone" />
                    </div>
                    
                    <div class="submit-button ">
                        <button class="box" @click.prevent='next'>Continue</button>
                    </div>
                </form>
    </div>
</template>
<script>
import Dropdown from 'primevue/dropdown';
export default {
    name: 'Step1',
    components: {
        Dropdown
    },
    methods: {
        next(){
          this.$emit('nextBtn')
        }
    },
}
</script>

