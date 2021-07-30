<template>
  <Grid>
    <div class="navbar">
      <nav class="nav">
        <div class="links-nav">
          <NavbarLink text="home" path="/" />
          <NavbarLink text="10k mrr" />
          <NavbarLink text="projects" :is-live="false" />
          <NavbarLink text="essays" :is-live="false" />
          <NavbarLink text="notes" />
        </div>
        <NavbarControls />
      </nav>
    </div>
  </Grid>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style lang="scss" scoped>
.navbar {
  transition: all .1s ease-in-out;
  color: var(--text);
  @media (max-width: 912px) {
    padding: 0;
  }
}
.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 54px;
}
.links-nav {
  display: flex;
  flex-direction: row;
  justify-self: start;
  align-items: center;
}
</style>
