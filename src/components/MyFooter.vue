<template>
  <footer>
    A <a href="https://bubinga.co">Bubinga</a> branch by <a href="https://twitter.com/ivan_carlson">Andrew Carlson</a>
  </footer>
</template>

<script>
export default {
  name: 'my-footer',
};
</script>

<style scoped>
footer {

  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 10px 0;
  margin-top: 100px;
  text-align: center;
  z-index: 100;
  background-color: #fff;
}
</style>
