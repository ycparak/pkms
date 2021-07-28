<template>
  <div class="challenge">
    <h1>$10k MRR Challenge.</h1>
    <p>
      <Strong>Tldr.</Strong> I’m attempting to get to $10k MRR in 912 days (2.5 years). I’m sharing the whole journey step-by-step in weekly updates (below).
    </p>
    <p>
      <Strong>Tldr for participants.</Strong> Since there’s been interest, if you’d like to take on the challenge too, I’m spinning up a Slack for us (<a target="_blank" href="https://l5p77i9dm17.typeform.com/to/KdTTRXJE">join here</a>). Your timeline doesn’t matter as long as you’re on a journey to $10k MRR. I’ll cap it at some intimate number (50ish?) so it doesn’t get unruly.
    </p>
    <p>
      <Strong>Tldr for lurkers.</Strong> You can choose to get the updates in your inbox by subscribing below. Alternatively, follow me on <a target="_blank" href="https://twitter.com/ycparak">Twitter</a>.
    </p>
    <Newsletter />
  </div>
</template>

<script>
export default {
  name: 'Challenge',
}
</script>

<style lang="scss" scoped>
.challenge {
  padding: var(--margin);
  border-radius: 8px;
  strong {
    line-height: 1;
    font-size: 16px;
    color: var(--subtle-text);
    font-weight: 400;
    margin-top: 8px;
    padding: 0;
  }
}
</style>
