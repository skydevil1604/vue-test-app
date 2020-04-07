<template>
  <div id="app">
    <router-view>
      <AuthenticationForm />
    </router-view>
  </div>
</template>

<script>
import AuthenticationForm from './components/AuthenticationForm';

export default {
  name: 'App',
  components: {
    AuthenticationForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  height: 100vh;
}
</style>
