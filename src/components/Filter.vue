<template>
    <div id="Filter">
        <Dropdown v-model="selectedBloodType" :options="bloodType" optionLabel="name" optionValue="name" placeholder="Select a BloodType" />
        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" optionValue="name" placeholder="Select a City" />
    </div>
</template>
<script>
import Dropdown from 'primevue/dropdown';
export default {
    name: 'Filter',
    data() {
	return {
		selectedCity: null,
		bloodType: [
			{name: 'A+'},
            {name: 'A-'},
			{name: 'B+'},
            {name: 'B-'},
			{name: 'O+'},
            {name: 'O-'},
			{name: 'AB+'},
			{name: 'AB-'}
            
            
		],
        selectedBloodType: null,
		cities: [
			{name: 'New York', code: 'NY'},
			{name: 'Rome', code: 'RM'},
			{name: 'London', code: 'LDN'},
			{name: 'Istanbul', code: 'IST'},
			{name: 'Paris', code: 'PRS'}
        ]
}},
    components: {
        Dropdown
    }
}
</script>
<style lang="scss" scoped>
#Filter {
    margin: 1em 0;
}
.p-dropdown {
    margin: 0 .5em;
    min-width: 10em
}
</style>

