<template>
  <md-card>
    <md-card-header>
      <md-card-header-text>
        <div class="md-title">{{ title }}</div>
      </md-card-header-text>
    </md-card-header>
  </md-card>
</template>

<script>
export default {
  name: 'request-card',
  props: ['title'],
};
</script>
