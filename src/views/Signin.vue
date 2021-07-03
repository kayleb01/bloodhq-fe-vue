<template>
    <div id="body" >
        <Logo />
        <div class="grid grid-flow-col grid-cols-2 gap-10 items-center;">
            <SideImage :class= 'isClass' :image='isImage'/>
        <div class="form-box">
            <PrevBtn />
            <h3>Sign In</h3>
                <p>Please Sign In to Continue to BloodHQ </p>
                <form action="#">
                    <div class="input-box">
                        <label for="email">E-mail Address</label>
                        <input type="email" name="email" placeholder="johndoe@gmail.com" class="box" id="email" />
                    </div>
                    
                    <div class="input-box">
                        <label for="password">Password</label>
                        <Password v-model="password" toggleMask ></Password>
                    </div>
                    <a href="#" class="float-right font-medium">Forgot Password ?</a>
                    <div class="submit-button ">
                        <button class="box">Continue</button>
                    </div>
                </form>
        </div>
        </div>
        
    </div>
</template>
<script>
import Password from 'primevue/password';
import Logo from '../components/Logo';
import SideImage from '../components/SideImage';
import PrevBtn from '../components/PrevBtn';
export default {
    name: 'Signin',
    data(){
        return {
            isImage: './img/ads.svg',
            isClass: 'ads',
            password: ''
        }
    },
    components: {
        SideImage,
        PrevBtn,
        Password,
        Logo
    }
}
</script>
<style lang="scss" >
@import '../assets/styles/sign';
#body {
    font-family: 'DM Sans', sans-serif;
    width: 85%;
    margin: 0 auto;
}
.p-password input.p-inputtext {
        height: 3.5em;
        width: 100%
    }
</style>