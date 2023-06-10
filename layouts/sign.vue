<template>
  <div v-if="$colorMode.value == 'dark'" class="login_dark">
    <slot />
  </div>
  <div v-else class="login_light">
    <slot />
  </div>
</template>
<style scoped>
.login_dark {
  background-image: url('../assets/background/bg_dark.png');
  height: 100vh;
  background-color: #292524;
}

.login_light {
  background-image: url('../assets/background/bg_light.png');
  height: 100vh;
}
</style>