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
              <li>POST request is sent to an endpoint on Amazon API Gateway.</li>
              <li>The API Gateway routes the request to a Lambda expression.</li>
              <li>The Lambda expression inserts a record into DynamoDB.</li>
              <li>DynamoDB is polled for changes to verify that the record was inserted.</li>
            </ol>
          </div>
          <md-button v-on:click="insertRecord" class="md-raised md-primary">Make Request</md-button>
        </section>
      </md-layout>
      <md-layout>
        <section class="card-stretch">
          <div class="padding--standard">
            <p v-for="record in dynamoRecords">
              {{ record }}
            </p>
            <transition name="fade">
              <request-card v-if="showInsertion" title="Record inserted into DynamoDB"></request-card>
            </transition>
            <transition name="fade">
              <request-card v-if="showExpression" title="Lambda expression triggered"></request-card>
            </transition>
            <transition name="fade">
              <request-card v-if="showRequest" title="GET request made"></request-card>
            </transition>
            <div v-if="inProgress" class="loader">Loading...</div>
          </div>
        </section>
      </md-layout>
    </md-layout>
  </div>
</template>

<script>

import axios from 'axios';
import RequestCard from './RequestCard';

const AWS = require('../../../config/aws.js');

export default {
  name: 'demo',
  created: function created() {
    this.getRecords();
  },
  components: {
    RequestCard,
  },
  data: function data() {
    return {
      showInsertion: false,
      showExpression: false,
      showRequest: false,
      inProgress: false,
      dynamoRecords: [],
    };
  },
  methods: {
    processRecords: function processRecords(records) {
      this.inProgress = true;
      const len = records.length;
      const processedRecords = [];
      let i;

      for (i = 0; i < len; i += 1) {
        processedRecords.push({
          created_at: new Date(records[i].created_at),
          id: records[i].id,
        });
      }

      this.dynamoRecords = processedRecords;
      this.inProgress = false;
    },
    getRecords: function getRecords() {
      axios.get(AWS.APIGatewayUrl)
      .then((response) => {
        this.processRecords(response.data.Items);
      })
      .catch((response) => {
        console.log('get error', response);
      });
    },
    insertRecord: function insertRecord() {
      this.resetRequest();
      this.inProgress = true;
      this.showRequest = true;
      axios.post(AWS.APIGatewayUrl, { created_at: Date.now() })
      .then(() => {
        this.completeRequest();
      })
      .catch((response) => {
        console.log('error', response);
      });
    },
    resetRequest: function resetRequest() {
      this.inProgress = false;
      this.showRequest = false;
      this.showExpression = false;
      this.showInsertion = false;
    },
    completeRequest: function completeRequest() {
      this.showExpression = true;
      this.showInsertion = true;
      this.getRecords();
    },
  },
};
</script>

<style scoped>
.md-card {
  margin-bottom: 25px;
}
.card-stretch {
  width: 100%;
  display: block;
}
.loader,
.loader:before,
.loader:after {
  background: #ccc;
  -webkit-animation: load1 1s infinite ease-in-out;
  animation: load1 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
}
.loader {
  color: #ccc;
  text-indent: -9999em;
  margin: 88px auto;
  position: relative;
  font-size: 11px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  position: absolute;
  top: 0;
  content: '';
}
.loader:before {
  left: -1.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.loader:after {
  left: 1.5em;
}
@-webkit-keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
@keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>
