

<script>
export default {};
</script>

<template>
  <section id="quoter-list">
    <article class="quote-person">
      <div class="author-city">
        <h6>Chantal Shelburne</h6>
        <p>Memphis, TN, US</p>
      </div>
      <i class="bx bx-user-plus"></i>
    </article>
    <p class="view-all">View All</p>
  </section>
</template>

<style lang = "scss" scoped>
#quoter-list {
  .quote-person {
    border: 1px solid red;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

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
  .view-all {
    font-size: 12px;
    font-weight: bold;
    margin: 16px 0;
    color: #4d77ff;
  }
}
</style>