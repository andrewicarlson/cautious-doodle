<template>
  <div id="app">
    <index></index>
  </div>
</template>

<script>
import Index from './components/Index';

export default {
  name: 'app',
  components: {
    Index,
  },
};
</script>

<style>
.container {
  max-width: 1280px;
  margin: 0 auto;
  width: 90%;
}

.padding--standard {

  padding: 8px;
}
</style>
