<template>
  <div class="container mx-auto">
  <h1 class="text-4xl py-8">My GitHub Repositories</h1>
  <div v-if="isLoading">Loading...</div>
    <div v-else class="flex items-center">
      <GithubRepo :repo="repos" />
    </div>
  </div>
    <!-- <div>
      <img class="h-12 w-12 rounded-full" :src="profile.avatar_url" />
      <p>{{ profile.login }}</p>
      <p>Hellow world</p>
    </div> -->
    <div class="grid gap-2 grid-cols-2 place-items-center">
    <div v-for="(repo, index) in repos" :key="index" class="border-solid border-2 border-black-100 w-10/12 h-40 p-7">
      <div class="flex justify-between">
        <p class="self-center text-lg font-semibold">{{ repo.name }}</p>
        <p class="border-solid border-2 border-black-800 rounded-md p-2 w-20 h-10 flex items-center justify-center">{{repo.visibility}}</p>
      </div>
      <p class="w-80">{{ repo.description }}</p>
    </div>
  </div>
</template>

<script>
import GithubRepo from './GithubRepo.vue';

export default {
  data() {
    return {
      isLoading: true,
      profile: null,
      repos: null,
    };
  },
  components: {
    GithubRepo
  },
  mounted() {
    fetch("https://api.github.com/users/dalu46")
      .then((response) => response.json())
      .then((data) => {
        this.profile = data;
        fetch(data.repos_url)
          .then((response) => response.json())
          .then((repo) => {
            this.repos = repo;
            this.store.updateRepo(repo);
            console.log(repo);
          });
        this.isLoading = false;
      })
      .catch((error) => {
        console.error("Error fetching GitHub profile:", error);
        this.isLoading = false;
      });
  },

};
</script>
