<template>
  <div>
    <my-header></my-header>
    <div class="container">
      <md-layout :md-gutter="30">
        <md-layout>
          <demo-description></demo-description>
        </md-layout>
        <md-layout>
          <demo-contents></demo-contents>
        </md-layout>
      </md-layout>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import DemoDescription from './DemoDescription';
import DemoContents from './DemoContents';

export default {
  name: 'index',
  components: {
    MyHeader,
    MyFooter,
    DemoDescription,
    DemoContents,
  },
};
</script>

<style scoped>

</style>
