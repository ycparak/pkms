<template>
  <div class="profile">
    <Container>
      <h1>Hello, I'm Yusuf. Welcome.</h1>
      <p>I’m a South African designer, software tinkerer, and as of recently — a founder. I'm currently buildng <a class="link" href="https://moonshotters.com">Moonshotters.com</a>.</p>
      <p>I saved up 3 years of runway, quit my job and now plan to make a living by building cool shit on the internet. I’m at $0 MRR with 36 months of runway left. This site is in part a journal for me to work with the garage door open and document the process of trying to get to $10K MRR as a solo founder.</p>
      <p>Chances are that if you like the stuff I've written here, you'll love my other project — <a href="https://bootstrappernews.com">Bootstrappernews.com</a>. Previously I also built Indiehackerlytics.</p>
      <p>Previously, I cut my teeth as a designer and front-end engineer at Thinkst Applied Research. There I worked on Canary — one of the most loved security products around.</p>
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
  padding: 28px 0;
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
    line-height: 1;
  }
  p {
    color: var(--text);
    transition: all .3s ease-in-out;
  }
  a {
    text-decoration: underline;
    color: inherit;
    &:hover, &:active, &:focus {
      text-decoration: underline;
    }
  }
}
</style>
