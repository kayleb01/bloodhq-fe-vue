<template>
    <ul class="steps">
                    <li :class = "steps == 1 ? 'active' : '' " ></li>
                    <li :class = "steps == 2 ? 'active' : '' "></li>
                    
                </ul>
</template>
<script>
export default {
    name: 'step-progress',
    data(){
        return {
            
        }
    },
    props: ['steps']
}
</script>