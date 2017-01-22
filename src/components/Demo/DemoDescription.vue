<template>
  <section>
    <div class="padding--standard">
      <p>
        This demo is a POC showing the flow of information from a front end
        application to a back end microservice on AWS.
      </p>
      <h3 class="md-headline">Steps</h3>
      <ol>
        <li>'Make Request' button is pressed.</li>
        <li>GET request is sent to an endpoint on Amazon API Gateway.</li>
        <li>The API Gateway routes the request to a Lambda expression.</li>
        <li>The Lambda expression inserts a record into DynamoDB.</li>
        <li>The insertion stream is read from DynamoDB and the result is displayed in the cards to the right.</li>
      </ol>
    </div>
    <md-button v-on:click="makeRequest" class="md-raised md-primary">Make Request</md-button>
  </section>
</template>

<script>
export default {
  name: 'demo-description',
  methods: {
    makeRequest: function makeRequest() {
    },
  },
};
</script>
