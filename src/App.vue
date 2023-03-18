<template>
  <nav class="border-b-2">
    <div class="flex justify-between container py-6 mx-auto">
      <router-link to="/" class="underline text-500-red">Home</router-link>
      <router-link to="/myrepos" class="underline">Check out my repos</router-link>
      <router-link to="/error" class="underline">Error</router-link>
    
    </div>
  </nav>
  <router-view />
</template>

<script>
// import GitHubProfile from "./components/GithubProfile.vue";

export default {
  name: 'App'
  // components: {
  //   GitHubProfile,
  // },
};
</script>

<!-- <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
