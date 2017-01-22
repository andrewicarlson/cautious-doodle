<template>
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
</template>

<script>
import DemoDescription from './DemoDescription';
import DemoContents from './DemoContents';

export default {
  name: 'index',
  components: {
    DemoDescription,
    DemoContents,
  },
};
</script>
