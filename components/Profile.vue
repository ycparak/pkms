<template>
  <div class="profile">
    <Container>
      <h1>Hello, I'm Yusuf. Welcome.</h1>
      <p>I’m a software developer and designer working at Thinkst Applied Research. There I work on Canary, one of the most loved security products around. In my spare time  I signal a higher status than I am.</p>
      <p>There are some kinds of work that you can't do well without thinking differently from your peers. To be a successful scientist, for example, it's not enough just to be correct. Your ideas have to be both correct and novel. You can't publish papers saying things other people already know. You need to say things no one else has realized yet.</p>
      <p>If you’re one of the rare individuals that likes and is into the stuff I post, the only place to keep up with it is on my Twitter.</p>
      <p>You see this pattern with startup founders too. You don't want to start a startup to do something that everyone agrees is a good idea, or there will already be other companies doing it. You have to do something that sounds to most other people like a bad idea, but that you know isn't — like writing software for a tiny computer used by a few thousand hobbyists, or starting a site to let people rent airbeds on strangers' floors.</p>
    </Container>
  </div>
</template>

<script>
export default {
  name: 'Profile',
}
</script>

<style lang="scss">
.profile {
  padding: 24px 0;
  border-right: 1px solid var(--line);
  transition: border .3s ease-in-out;
  min-height: calc(100vh - 68px - 57px);
  @media (max-width: 768px) {
    border-right: none;
    min-height: auto;
    border-bottom: 1px solid var(--line);
  }
  h1 {
    font-size: 28px;
    font-weight: 900;
    margin-bottom: 16px;
    color: var(--text);
    transition: all .3s ease-in-out;
  }
  p {
    color: var(--text);
    transition: all .3s ease-in-out;
  }
}
</style>
