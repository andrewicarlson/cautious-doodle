<template>
  <section>
    <div class="padding--standard">
      <p>
        This demo is a POC showing the flow of information from a front end
        application to a back end microservice on AWS.
      </p>
    </div>
    <md-button v-on:click="makeRequest" class="md-raised md-primary">Make Request</md-button>
  </section>
</template>

<script>
export default {
  name: 'demo-description',
  methods: {
    makeRequest: function makeRequest() {
      console.log(this);
    },
  },
};
</script>

<style scoped>

</style>
