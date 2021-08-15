
<script>
import getQuotes from "../composables/getQuotes";
import { ref, onMounted } from "vue";
export default {
  setup() {
    const { quotes, getData } = getQuotes();
    const randomNextQuote = ref("");
    const newQuote = ref(false);
    const loading = ref(true);

    getData();

    const getQouteOfTheDay = () => {
      setTimeout(() => {
        let intQuoteCount = 1643; // The number of quotes in your library
        let dtNow = new Date();
        let intTZOffset = dtNow.getTimezoneOffset() * 60000; // automatically adjust for user timezone
        let intNow = dtNow.getTime() - intTZOffset;
        let intDay = Math.floor(intNow / 86400000); // The number of 'local' days since Jan 1, 1970
        let indexOfQuote = intDay % intQuoteCount;

        console.log(indexOfQuote);

        randomNextQuote.value = quotes.value[indexOfQuote];
        loading.value = false;
      }, 2000);
    };

    const getNextQuote = () => {
      const randomNumber = 1 + Math.floor(Math.random() * quotes.value.length);
      randomNextQuote.value = quotes.value[randomNumber];
      newQuote.value = true;
      // console.log(randomNextQuote);
    };

    onMounted(() => {
      getQouteOfTheDay();
    });

    return { quotes, getNextQuote, randomNextQuote, newQuote, loading };
  },
};
</script>


  <template>
  <div id="quotes-page">
    <router-link to="/">
      <p class="previous-page">back to previous page</p>
    </router-link>
    <div v-if="newQuote">
      <h1>Quote</h1>
    </div>
    <div v-else>
      <h1>Quote of the day</h1>
    </div>
    <section v-if="!loading" class="quote-preview">
      <!-- <div v-if="newQuote"> -->
      <article class="author-menu">
        <div class="quote-author">
          <h5>{{ randomNextQuote.author }}</h5>
          <p>@{{ randomNextQuote.author }}</p>
        </div>
        <i class="fas fa-ellipsis-h"></i>
      </article>
      <div class="quotes-message">
        <p>
          {{ randomNextQuote.text }}
        </p>
        <div class="likes">
          <i class="far fa-heart"></i>
          <span>1.6k</span>
        </div>
      </div>
      <!-- </div> -->
    </section>
    <div v-else>Loading...</div>
    <button @click="getNextQuote" class="next-btn">
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
    background-color: #fff;

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

@media (min-width: 1440px) {
  #quotes-page {
    .previous-page {
      margin: 0 2rem 51px 0;
    }

    h1 {
      margin-left: 2rem;
    }

    .quote-preview {
      width: 624px;
      margin-left: auto;
      margin-right: auto;

      .author-menu {
        width: 90%;
      }
    }
  }
}
</style>