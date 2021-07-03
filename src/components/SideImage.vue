<template>
    <div :class='class'>
        <img :src='image' alt='image'/>
    </div>
</template>
<script>
export default {
    name: 'SideImage',
    data(){
        return {

        }
    },
    props: ['class','image']
}
</script>