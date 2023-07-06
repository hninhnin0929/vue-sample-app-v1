<template>
    <div class="bootcamp-register container">       
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
                        phone_number is required*
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

    import { required, email } from 'vuelidate/lib/validators'
    export default {

        name: "BootcampRegister", 
        components: {
            
        },      
        data(){
            return{
                bootcamp: {
                    name: '',
                    email: '',
                    location: '',
                    phone_number: ''
                },
                feedback: '',
            }
        },
        validations: {
            // validations go here
            bootcamp: {
                name: {
                    required
                },
                email: {
                    required,
                    email
                },
                location: {
                    required
                },
                phone_number: {
                    required
                },
            }
        },
        methods: {
           registerBootcamp() {
                this.$v.$touch();
                if(!this.$v.$invalid) {
                    console.log('Form got successfully submitted....');
                    console.log(this.bootcamp);
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