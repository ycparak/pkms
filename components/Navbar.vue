<template>
  <Grid>
    <div class="navbar">
      <nav class="nav">
        <div class="links-nav">
          <NavbarLink text="home" path="/" />
          <NavbarLink text="10k mrr" />
          <NavbarLink text="projects" :is-live="false" />
          <NavbarLink text="essays" />
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
  // border-bottom: 1px solid var(--line);
  // border-right: 1px solid var(--line);
  // border-left: 1px solid var(--line);
  // border-bottom-right-radius: 16px;
  // border-bottom-left-radius: 16px;
  grid-column: 2 / 5;
  padding: 0 var(--margin);
  color: var(--text);
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
