
<script>
import QuotersList from "../components/QuotersList.vue";
export default {
  components: {
    QuotersList,
  },
};
</script>


  <template>
  <div id="quoters-page">
    <form action="">
      <div class="input-div">
        <i class="bx bx-search"></i>
        <input type="text" placeholder="Search..." />
        <i class="lni lni-mic"></i>
      </div>
    </form>
    <section class="quoters-section">
      <h1>All Quoters</h1>
      <QuotersList />
    </section>
  </div>
</template>


<style lang = "scss" scoped>
#quoters-page {
  form {
    width: fit-content;
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
  .quoters-section {
    h1 {
      font-size: 18px;
      text-transform: capitalize;
      text-align: left;
      margin: 44px 0 24px;
    }
  }
}
</style>