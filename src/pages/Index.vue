<template>
  <Layout>
    <Container>
      <div class="grid">
        <div class="grid__column grid__column-1">
          <div class="site__hero">
            <h1 class="site__hero--title title">Hello, I’m Yusuf Parak.</h1>
            <p class="site__hero--paragraph body-text">I go by @ycparak on the internets. In the real world, I live in beautiful Cape Town, where I do design &amp; development at Thinkst Applied Research. There, I mostly work on Canary, one of the most loved security products around.</p>
          </div>
        </div>
        <div class="grid__column grid__column-2">
          <section class="thoughts"></section>
        </div>
      </div>
    </Container>
  </Layout>
</template>

<script>
export default {
}
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: 1fr 680px;
  gap: 200px 160px;
  justify-content: stretch;
  /* background: palevioletred; */
  min-height: 100px;
}
/* .grid__column-1 {
  background: blue;
}
.grid__column-2 {
  background: green;
} */
</style>
