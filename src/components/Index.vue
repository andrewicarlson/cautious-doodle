<template>
  <div>
    <my-header></my-header>
    <demo></demo>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import Demo from './Demo/Demo';

export default {
  name: 'index',
  components: {
    MyHeader,
    MyFooter,
    Demo,
  },
};
</script>
