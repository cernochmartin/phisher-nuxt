<template>
  <div :class="$colorMode.value">
    <slot />
  </div>
</template>
<style scoped>
.dark {
  background-image: url('../assets/background/bg_dark.png');
  height: 100vh;
  background-color: #292524;
}

.light {
  background-image: url('../assets/background/bg_light.png');
  height: 100vh;
}
</style>