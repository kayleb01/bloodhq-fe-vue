<template>
    <div class="arrow">
                        <img :src='src' alt="arrow" />
                </div>
</template>
<script>
import arrow from '../assets/arrow.svg'
export default {
    name: 'PrevBtn',
    data(){
        return {
            src: arrow
        }
    },
    
}
</script>