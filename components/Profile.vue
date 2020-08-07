<template>
  <div class="profile">
    <h1 class="title">
      Yo, I’m Yusuf. Welcome.
    </h1>
    <p>
      I'm a software developer and designer working at Thinkst Applied Research. There, I work on <a href="https://canary.tools" class="link">Canary</a> &mdash; one of the most loved security products around.
    </p>
    <p>
      If Stripe's goal is to increase the GDP of the internet — I'm interested in finding and researching the areas where GDP growth is arbitrageable by small indie teams. My other area of focus is in deeply trying to understand and craft great software.
    </p>
    <p>
      If the intersection of that venn diagram (internet opportunity && software craftsmanship) weirdly turns you on — be sure to subscribe to my email list. Alas, I'm not on Facebook, Instagram or LinkedIn but you can also catch me on Twitter.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Profile'
}
</script>

<style lang="scss" scoped>
.profile {
  padding: 28px 36px;
  @media (max-width: 767px) {
    padding: 20px 28px;
  }
}
</style>
