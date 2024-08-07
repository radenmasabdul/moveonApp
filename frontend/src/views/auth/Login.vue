<script setup>
import Logo from "../../assets/logo.jpg";
import People from "../../assets/people.jpg";

import { ref, reactive } from "vue";

const user = reactive({
  email: "",
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
          <img class="mx-auto h-20 w-auto rounded-full" :src="Logo" alt="logo" />
          <p
            class="py-2 font-DancingSans text-center text-4xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white"
          >
            MoveON
          </p>
        </div>
        <h2
          class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 font-JakartaSans dark:text-white"
        >
          Sign in to your account
        </h2>
      </template>

      <template #content class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-3">
          <div class="flex flex-col gap-2">
            <label for="email" class="font-JakartaSans">Email</label>
            <InputText id="email" autocomplete="on" v-model="user.email" />
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
            <Button label="Sign In" severity="success" class="w-full" />
          </div>

          <div>
            <RouterLink to="#">
              <p
                class="text-sm font-medium font-JakartaSans leading-6 text-indigo-600 hover:text-indigo-500 dark:text-white"
              >
                Forgot your password?
              </p>
            </RouterLink>
          </div>
        </form>
      </template>

      <template #footer>
        <Divider type="solid" />
        <RouterLink to="#">
          <Button label="Register" severity="info" class="w-full" />
        </RouterLink>
      </template>
    </Card>
  </main>
</template>

<style scoped></style>
