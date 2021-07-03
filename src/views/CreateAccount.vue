<template>
    <div id="body">
         <Logo />
        <div id="sign" class="grid grid-flow-col grid-cols-2 gap-10 items-center;">
            <SideImage :class= 'isClass' :image='isImage'/>
            <div class="form-box">
            <div class="container-head">
            <PrevBtn @click="prevBtn"/> 
            <Stepprogress :steps="steps"/>
            </div>
            <div id="Steps">
         <h3>Create an Account</h3>
                <p>By continuing you agree with our terms of service and Privacy Policy </p>
        <Step1 v-if="steps === 1" @nextBtn= 'nextBtn' />
         <Step2 v-else-if="steps === 2" @doneBtn= 'doneBtn' />
        </div>
        </div>
        </div>
    </div>
</template>
<script>
import Step1 from '../components/Step1.vue';
import Step2 from '../components/Step2.vue';
import Logo from '../components/Logo';
import Stepprogress from '../components/Steps-progress.vue'
import SideImage from '../components/SideImage';
import PrevBtn from '../components/PrevBtn';
export default {
    name: 'CreateAccount',
    data() {
        return {
            isImage: './img/ads.svg',
            isClass: 'ads',
            password: '',
            steps: 1
        }
    },
    methods: {
        nextBtn(){
            this.steps += 1
            console.log(this.step)
        },
         prevBtn(){
            this.steps -= 1
        },
        doneBtn(){
            alert('Done')
        }
    },
    components: {
        Step1,
         Step2,
        Logo,
        SideImage,
        PrevBtn,
        Stepprogress

    }
}
</script>
<style lang="scss" >
@import '../assets/styles/sign';
.grid {
    align-items: center;
}
.p-dropdown {
    width: 95%
}
.logo {
    margin: 1.5em 0 !important;
}
.arrow {
    margin: 0 !important;
}
@media (max-width: 995px) {
    #sign {
        display: block;
        .ads {
            display: none
        }
    }
}
</style>