
<script>
export default {
  props: ["user"],
};
</script>

<template>
  <section id="user-container">
    <div class="user-border"></div>
    <p class="user-name">{{ user.username }}</p>
  </section>
</template>


<style lang="scss" scoped>
#user-container {
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;

  .user-border {
    border: 2px solid transparent;
    border-image: linear-gradient(45deg, rgb(221, 7, 7), rgb(250, 224, 66)) 1;
    width: 52px;
    height: 52px;
    border-radius: 100px;
    background: linear-gradient(45deg, rgb(214, 6, 41), rgb(250, 224, 66))
      border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);
    mask-composite: exclude;
  }

  .user-name {
    font-size: 12px;
    font-weight: bold;
    text-transform: capitalize;
    margin-top: 10.11px;
  }
}

@media (min-width: 1440px) {
  #user-container {
    .user-border {
      width: 68px;
      height: 68px;
    }

    .user-name {
      font-size: 14px;
    }
  }
}
</style>