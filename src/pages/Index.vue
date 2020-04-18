<template>
  <Layout>
    <Container>
      <div class="grid">
        <div class="grid__column grid__column-1">
          <div class="site__hero">
            <h1 class="site__hero--title title">Hello, I’m Yusuf Parak.</h1>
            <p class="site__hero--paragraph body-text">I go by the handle <a href="https://twitter.com/ycparak" class="username-link">@ycparak</a> on the internets. In the real world, I live in beautiful Cape Town, where I'm a software developer/designer at Thinkst Applied Research. There, I mostly work on Canary, one of the most loved security products around.</p>
            <p class="site__hero--paragraph body-text">This site is built using my side-project <a href="https://twitter.com/ycparak">MumblingIO</a> &mdash; which allows you to use Twitter as a CMS for your blog. If you love Twitter and value simplicity, you should check it out.</p>
          </div>
        </div>
        <div class="grid__column grid__column-2">
          <section class="thoughts">
            <h1>
              Hello my name is Yusuf Parak and I require a full width container.
            </h1>
          </section>
        </div>
      </div>
    </Container>
  </Layout>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(404px, 1fr));
  gap: 20px 80px;
  padding-top: 144px;
  // min-height: calc(100vh - 20px);
}
.grid__column-1 {
  background: transparent;
  @media (min-width: 1082px) {
    max-width: 404px;
    // position: fixed;
    // top: 144px;
    // pointer-events: none;
  }
}
.grid__column-2 {
  background: var(--twitter-color);
  // height: 200vh;
  // grid-column-start: 2;
}
</style>
