<template>

  <div class="container">
    <md-layout md-gutter="24">
      <md-layout>
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
      </md-layout>
      <md-layout>
        <div class="card-stretch">
          <transition name="fade">
            <request-card v-if="showInsertion" title="Record inserted into DynamoDB"></request-card>
          </transition>
          <transition name="fade">
            <request-card v-if="showExpression" title="Lambda expression triggered"></request-card>
          </transition>
          <transition name="fade">
            <request-card v-if="showRequest" title="GET request made"></request-card>
          </transition>
        </div>
      </md-layout>
    </md-layout>
  </div>
</template>

<script>

import RequestCard from './RequestCard';

export default {
  name: 'demo',
  components: {
    RequestCard,
  },
  data: function data() {
    return {
      showInsertion: false,
      showExpression: false,
      showRequest: false,
    };
  },
  methods: {
    makeRequest: function makeRequest() {
      this.showRequest = true;
      this.showExpression = true;
      this.showInsertion = true;
    },
  },
};
</script>

<style scoped>
.card-stretch {
  width: 100%;
  display: block;
}
</style>
