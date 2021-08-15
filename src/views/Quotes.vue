
<script>
export default {};
</script>


  <template>
  <div id="quotes-page">
    <router-link to="/quoters">
      <p class="previous-page">back to previous page</p>
    </router-link>
    <h1>Quote of the day</h1>
    <section class="quote-preview">
      <article class="author-menu">
        <div class="quote-author">
          <h5>Dianne Russell</h5>
          <p>@amandadasilva</p>
        </div>
        <i class="fas fa-ellipsis-h"></i>
      </article>
      <div class="quotes-message">
        <p>
          While Corfu give us the ability to shoot by the sea with amazing blue
          background full of light of the sky, Florina give us its gentle side.
          The humble atmosphere and Light of Florina which comes.
        </p>
        <div class="likes">
          <i class="far fa-heart"></i>
          <span>1.6k</span>
        </div>
      </div>
    </section>
    <button class="next-btn">
      <i class="lni lni-plus"></i>View another Quote
    </button>
  </div>
</template>


<style lang="scss" scoped>
#quotes-page {
  .previous-page {
    text-align: right;
    text-transform: capitalize;
    font-weight: bold;
    font-size: 12px;
    color: #4d77ff;
    margin-bottom: 51px;
    letter-spacing: 0.04em;
  }

  h1 {
    margin: 0;
    text-align: left;
    text-transform: capitalize;
    font-size: 24px;
    font-weight: 800;
  }

  .quote-preview {
    border: 1px solid #e8e8ea;
    border-radius: 16px;
    height: 388px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 16px;
    margin: 24px 0;

    .author-menu {
      width: 80%;
      margin-left: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .quote-author {
        h5 {
          font-size: 14px;
          font-weight: bold;
          letter-spacing: 0.02em;
        }
        p {
          font-size: 12px;
          color: #a5a3a9;
          text-align: left;
        }
      }

      .fa-ellipsis-h {
        font-size: 12px;
        color: #1d1929;
      }
    }

    .quotes-message {
      display: flex;
      flex-direction: column;
      text-align: left;
      font-size: 14px;
      color: #4a4754;

      .likes {
        display: flex;
        align-items: center;
        font-size: 18px;
        color: #77757f;
        span {
          margin-left: 0.5rem;
          font-size: 12px;
        }
      }

      p {
        margin-bottom: 1rem;
      }
    }
  }
  // duplicate button code (bad practice could have made the button a component)
  .next-btn {
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