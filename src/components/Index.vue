<template>
  <div>
    <my-header></my-header>
    <demo-description></demo-description>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import DemoDescription from './DemoDescription';

export default {
  name: 'index',
  components: {
    MyHeader,
    MyFooter,
    DemoDescription,
  },
};
</script>

<style scoped>

</style>
