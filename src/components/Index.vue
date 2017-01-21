<template>
  <div>
    <my-header></my-header>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';

export default {
  name: 'index',
  components: {
    MyHeader,
    MyFooter,
  },
};
</script>

<style scoped>

</style>
