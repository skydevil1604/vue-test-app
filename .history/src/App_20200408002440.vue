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

@font-face {
  font-family: "Montserrat"; 
  src: url("assets/fonts/montserrat/Montserrat-Bold.ttf") format("truetype"); 
  font-style: normal; 
  font-weight: normal; 
} 

@font-face {
  font-family: "Roboto"; 
  src: url("assets/fonts/roboto/Roboto-Regular.ttf") format("truetype"); 
  font-style: normal; 
  font-weight: normal; 
} 

#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  height: 100vh;
}

#app * {
  box-sizing: border-box;
}
</style>
