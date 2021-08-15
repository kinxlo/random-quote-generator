
<script>
import User from "./User.vue";

export default {
  components: {
    User,
  },

  props: ["users"],

  setup() {},
};
</script>


<template>
  <div id="users-component">
    <router-link to="/quoters">
      <p class="all-quoters">View all quoters</p>
    </router-link>
    <section class="users-container">
      <div v-for="user in users" :key="user.id">
        <User :user="user" />
      </div>
    </section>
  </div>
</template>


<style lang="scss" scoped>
#users-component {
  .all-quoters {
    text-align: right;
    text-transform: capitalize;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.03em;
    color: #4d77ff;
    margin: 0 1rem 22px;
  }
  .users-container {
    //   border: 1px solid blue;
    width: 100%;
    display: flex;
  }
}
</style>