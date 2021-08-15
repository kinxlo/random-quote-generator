

<script>
export default {
  props: ["user"],

  setup() {
    // console.log(props.user);
  },
};
</script>

<template>
  <section id="quoter-list">
    <article class="quote-person">
      <div class="author-city">
        <h6>{{ user.name }}</h6>
        <p>{{ user.address.city }}</p>
      </div>
      <i class="bx bx-user-plus"></i>
    </article>
  </section>
</template>

<style lang = "scss" scoped>
#quoter-list {
  .quote-person {
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 2rem 0;

    .author-city {
      display: flex;
      flex-direction: column;
      text-align: left;

      h6 {
        font-size: 14px;
        font-weight: bold;
      }
      p {
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.03em;
        color: #a5a3a9;
      }
    }
    i {
      font-size: 24px;
      color: #4d77ff;
    }
  }
}

@media (min-width: 1440px) {
  #quoter-list {
    .quote-person {
      /* border: 1px solid red; */
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      margin: 1rem 0;

      i {
        font-size: 24px;
        color: #4d77ff;
        margin-right: 4rem;
      }
    }
  }
}
</style>