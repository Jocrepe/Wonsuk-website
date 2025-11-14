<script setup>
import { RouterLink } from 'vue-router';

const login = () => {
    localStorage.setItem('LoggedIn', true)
}
</script>

<template>
    
        <div class="hero bg-base-200 min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left ml-15">
                    <h1 class="text-7xl font-bold">Login now!</h1>
                    <p class="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div class="card bg-base-100 w-full h-100 max-w-sm shrink-0 shadow-2xl">
                    <div class="card-body">
                        <fieldset class="fieldset">
                            <label class="label text-xl">Email</label>
                            <input type="email" class="input text-xl" placeholder="Email" />
                            <label class="label text-xl">Password</label>
                            <input type="password" class="input text-xl" placeholder="Password" />
                            <RouterLink to="/" class="w-full mt-10"><button @click="login" class="w-full btn btn-neutral mt-4 text-xl">Login</button></RouterLink>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    
</template>