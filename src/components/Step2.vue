<template>
    <div>
        <div class="input-box">
                        <label for="email">E-mail Address</label>
                        <input type="email" name="email" placeholder="johndoe@gmail.com" class="box" id="email" />
                    </div>
                    
                    <div class="input-box">
                        <label for="password">Password</label>
                        <Password v-model="password" toggleMask ></Password>
                    </div>
                    <div class="input-box">
                        <label for="password">Confirm Password</label>
                        <Password v-model="password" toggleMask ></Password>
                    </div>
                    <div class="submit-button ">
                        <button class="box" @click.prevent = 'done'>Done</button>
                    </div>
    </div>
</template>
<script>
import Password from 'primevue/password';
export default {
    name: 'Step2',
    data(){
        return {
            password: ''
        }
        
    },
    methods: {
        done(){
            this.$emit('doneBtn')
        }
    },
    components: {
        Password
    }
}
</script>
