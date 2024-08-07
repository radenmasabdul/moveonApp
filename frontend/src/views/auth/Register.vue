<script setup>
import Logo from "../../assets/logo.jpg";
import People from "../../assets/people.jpg";

import { ref, reactive } from "vue";

const user = reactive({
  email: "",
  username: "",
  password: "",
});

let isHidePassword = ref(true);

const togglePasswordVisibility = () => {
  isHidePassword.value = !isHidePassword.value;
};
</script>

<template>
  <main
    class="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8"
    :style="{ backgroundImage: `url(${People})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
  >
    <Card class="sm:mx-auto sm:w-full sm:max-w-md">
      <template #title>
        <div>
          <RouterLink to="/">
            <img class="mx-auto h-20 w-auto rounded-full" :src="Logo" alt="logo" />
            <p
              class="py-2 font-DancingSans text-center text-4xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white"
            >
              MoveON
            </p>
          </RouterLink>
        </div>
        <h2
          class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 font-JakartaSans dark:text-white"
        >
          Register your account
        </h2>
      </template>

      <template #content class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-3">
          <div class="flex flex-col gap-2">
            <label for="email" class="font-JakartaSans">Email</label>
            <InputText id="email" autocomplete="on" v-model="user.email" />
          </div>

          <div class="flex flex-col gap-2">
            <label for="username" class="font-JakartaSans">Username</label>
            <InputText id="username" autocomplete="on" v-model="user.username" />
          </div>

          <div class="flex flex-col gap-2">
            <label for="password" class="font-JakartaSans">Password</label>
            <div class="relative">
              <InputText
                id="password"
                :type="isHidePassword ? 'password' : 'text'"
                class="w-full"
                v-model="user.password"
              />
              <div
                @click="togglePasswordVisibility"
                class="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
              >
                <span>
                  <i class="pi pi-eye-slash" style="color: green" v-if="isHidePassword"></i>
                  <i class="pi pi-eye" style="color: green" v-else></i>
                </span>
              </div>
            </div>
          </div>

          <div>
            <Button label="Register" severity="success" class="w-full" />
          </div>
        </form>
      </template>
    </Card>
  </main>
</template>

<style scoped></style>
