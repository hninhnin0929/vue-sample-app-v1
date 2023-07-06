<template>
    <div class="bootcamp-register container"> 
        <p v-if="feedback">{{ feedback }}</p>      
        <form class="card-panel green-text" @submit.prevent="registerBootcamp" novalidate>
            <h2 class="center">Register for Bootcamp</h2>
            <div class="field">
                <label for="name">Name</label>
                <input id="name" type="text" v-model="bootcamp.name" placeholder="Enter the name"
                 @blur="$v.bootcamp.name.$touch()">
                 <template v-if="$v.bootcamp.name.$error">
                    <p class="errorMessage" v-if="!$v.bootcamp.name.required">
                        Name is required*
                    </p>
                    <p class="errorMessage" v-if="!$v.bootcamp.name.minLength">
                        Name must be at least 3 characters in length*
                    </p>
                    <p class="errorMessage" v-if="!$v.bootcamp.name.maxLength">
                        Name must be 50 characters in length or less*
                    </p>
                 </template>
            </div>
            <div class="field">
                <label for="email">Email</label>
                <input id="email" type="email" v-model="bootcamp.email" placeholder="Enter the email"
                 @blur="$v.bootcamp.email.$touch()">
                 <template v-if="$v.bootcamp.email.$error">
                    <p class="errorMessage" v-if="!$v.bootcamp.email.required">
                        Email is required*
                    </p>
                    <p class="errorMessage" v-if="!$v.bootcamp.email.email">
                        Email is invalid*
                    </p>
                    <p class="errorMessage" v-if="!$v.bootcamp.email.uniqueEmail">
                        Email is already in use.*
                    </p>
                 </template>
            </div>
            <div class="field">
                <label for="name">Location</label>
                <input id="location" type="text" v-model="bootcamp.location" placeholder="Enter the location"
                 @blur="$v.bootcamp.location.$touch()">
                 <template v-if="$v.bootcamp.location.$error">
                    <p class="errorMessage" v-if="!$v.bootcamp.location.required">
                        Location is required*
                    </p>
                 </template>
            </div>
            <div class="field">
                <label for="phone_number">Contact Number</label>
                <input id="phone_number" type="text" v-model="bootcamp.phone_number" placeholder="Enter the phone number"
                 @blur="$v.bootcamp.phone_number.$touch()">
                 <template v-if="$v.bootcamp.phone_number.$error">
                    <p class="errorMessage" v-if="!$v.bootcamp.phone_number.required">
                        Phone number is required*
                    </p>
                    <p class="errorMessage" v-if="!$v.bootcamp.phone_number.numeric">
                        Only digits are allowed*
                    </p>
                    <p class="errorMessage" v-if="!$v.bootcamp.phone_number.ensureOnly10DigitsLong">
                        Contact Number must be 10 digits long*
                    </p>
                 </template>
            </div>
            <div class="field center">
                <button class="btn green" :disabled="$v.$invalid">Register</button>
            </div>
        </form>
    </div>
</template>

<script>

    import axios from 'axios';
import { required, email, minLength, maxLength, numeric } from 'vuelidate/lib/validators'
    export default {

        name: "BootcampRegister", 
        components: {
            
        },      
        data(){
            return{
                bootcamp: this.createFreshBootcamp(),
                feedback: '',
            }
        },
        validations: {
            // validations go here
            bootcamp: {
                name: {
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(50)
                },
                email: {
                    required,
                    email,
                    async uniqueEmail(value) {
                        if(value === "") return true;
                        const response = await axios.get('http://localhost:3000/registrations');
                        const registrations = response.data;
                        const alreadyDoneRegistration = registrations.find(
                            registration => registration.email === value
                        )
                        if(alreadyDoneRegistration) {
                            return false;
                        }
                        return true;
                    }
                },
                location: {
                    required
                },
                phone_number: {
                    required,
                    numeric,
                    ensureOnly10DigitsLong(value) {
                        return value.trim().length === 10;
                    }
                },
            }
        },
        methods: {
            createFreshBootcamp() {
                return {
                    name: '',
                    email: '',
                    location: '',
                    phone_number: ''
                }
            },
           registerBootcamp() {
                this.$v.$touch();
                if(!this.$v.$invalid) {
                    console.log('Form got successfully submitted....');
                    console.log(this.bootcamp);
                    axios.post("http://localhost:3000/registrations", this.bootcamp)
                    .then(reponse => {
                        console.log(reponse.data);
                        this.feedback =  "Thanks for registering for the bootcamp. We will soon contact you.";
                        this.bootcamp = this.createFreshBootcamp();
                        this.$v.bootcamp.$reset();
                        setTimeout(() => {
                            this.feedback = '';
                        }, 2000);
                    }).catch(console.error);
                }
           }
        },
    }
</script>

<style scoped> 
.bootcamp-register {
    max-width: 600px;
    margin-top: 60px;
}
.bootcamp-register h2 {
    font-size: 2.4em;
}
.bootcamp-register .field {
    margin-bottom: 16px;
}
.errorMessage {
    color: rgb(236, 79, 79);
}
</style>