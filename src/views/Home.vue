
<script>
import Users from "../components/Users.vue";
import getUsers from "../composables/getUsers";

export default {
  components: {
    Users,
  },

  setup() {
    const { users, error, getData } = getUsers();

    getData();

    return { users, error };
  },
};
</script>


<template>
  <div id="home-page">
    <!-- <h4>Quotes Home page</h4> -->
    <div v-if="error">{{ error }}</div>
    <div v-if="users.length">
      <Users :users="users" />
    </div>
    <div v-else>Loading...</div>
    <router-link to="/quotes">
      <button class="random-btn">
        <i class="lni lni-plus"></i>Show New Quote Of the Day
      </button>
    </router-link>
  </div>
</template>


<style lang="scss" scoped>
#home-page {
  .random-btn {
    margin: 5rem 0;
    width: fit-content;
    height: 48px;
    padding: 8px 1rem;
    border: none;
    background: linear-gradient(254.81deg, #1a50ff 8.13%, #d96ff8 92.46%);
    border-radius: 16px;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 0.02em;
    color: #fff;

    .lni-plus {
      margin: 0 10px;
      font-size: 18px;
    }
  }
}
</style>