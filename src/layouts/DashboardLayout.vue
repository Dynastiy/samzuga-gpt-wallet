<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  components: {},
  name: "DashboardLayout",
  computed: {},
};
</script>

<style scoped>
#main {
  margin-left: 250px;
}
.main-content {
  padding: var(--spacer);
}
</style>
