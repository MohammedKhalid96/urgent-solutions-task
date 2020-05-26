<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.big-transparent-text {
  color: #1b9e9850;
  font-size: 17em;
  padding: 0 0 0 5rem;
  opacity: 0.1;
}

@media (min-width: 768px) and (max-width: 991px) {
  .big-transparent-text {
    font-size: 20em;
    opacity: 0.3;
    padding: 1rem 0 0 5rem;
  }
}

@media (min-width: 320px) and (max-width: 767px) {
  .big-transparent-text {
    font-size: 10em;
    opacity: 0.3;
    padding: 1rem 0 0 5rem;
  }
}
</style>