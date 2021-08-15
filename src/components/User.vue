
<script>
export default {
  props: ["user"],
};
</script>

<template>
  <section id="user-container">
    <div class="user-border"></div>
    <p class="user-name">{{ user.name }}</p>
  </section>
</template>


<style lang="scss" scoped>
#user-container {
  //   border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;

  .user-border {
    border: 3px solid transparent;
    border-image: linear-gradient(45deg, rgb(0, 143, 104), rgb(250, 224, 66)) 1;
    width: 52px;
    height: 52px;
    border-radius: 100px;
    background: linear-gradient(45deg, rgb(0, 143, 104), rgb(250, 224, 66))
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
</style>