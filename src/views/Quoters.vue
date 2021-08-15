
<script>
import QuotersList from "../components/QuotersList.vue";
import getUsers from "../composables/getUsers";
import { computed, ref } from "vue";
export default {
  components: {
    QuotersList,
  },

  setup() {
    const { users, getData } = getUsers();
    const search = ref("");

    getData();

    const getNames = computed(() => {
      return users.value.filter((person) => {
        return person.name.includes(search.value);
      });
    });

    return { users, search, getNames };
  },
};
</script>


  <template>
  <div id="quoters-page">
    <form action="">
      <div class="input-div">
        <i class="bx bx-search"></i>
        <input type="text" placeholder="Search..." v-model="search" />
        <i class="lni lni-mic"></i>
      </div>
    </form>
    <h1>All Quoters</h1>
    <section class="quoters-section">
      <div v-for="user in getNames" :key="user.id">
        <QuotersList :user="user" />
      </div>
    </section>
    <p class="view-all">View All</p>
  </div>
</template>


<style lang = "scss" scoped>
#quoters-page {
  h1 {
    font-size: 18px;
    text-transform: capitalize;
    text-align: left;
    margin: 44px 0 24px;
  }
  form {
    width: 100%;
    height: fit-content;

    .input-div {
      border: 1px solid lightgray;
      border-radius: 18px;
      padding: 8px 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 328px;
      height: 56px;
      margin: 0 auto;
      background-color: #fff !important;

      i {
        font-size: 18px;

        &:nth-child(1) {
          color: #000;
        }
      }

      .lni-mic {
        color: lightgray;
      }

      input {
        border: none;
        /* padding: 0 1rem; */
        width: 234px;
        height: 100%;

        &::placeholder {
          font-size: 14px;
          color: #a5a3a9;
        }
      }
    }
  }
  .view-all {
    font-size: 12px;
    font-weight: bold;
    margin: 16px 0;
    color: #4d77ff;
  }
}

@media (min-width: 1440px) {
  #quoters-page {
    form {
      width: 100%;
      height: fit-content;

    
    }
    .quoters-section {
      /* border: 1px solid red; */
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;

      div {
        /* border: 1px solid green; */
        width: 80%;
        margin-left: auto;
      }
    }
  }
}
</style>