<template>
  <div>
    <div class="auth-container">
      <div class="left-side-auth">
        
      </div>
      <div class="tw-px-16 tw-py-4">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppAuthLayout",
};
</script>

<style>
.auth-container {
  display: grid;
  display: -ms-grid;
  display: -moz-grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  background: var(--white);
}

.left-side-auth {
  background: url('../assets/img/samzuga-gpt-bg.jpg');
  background-size: cover;
}
</style>
