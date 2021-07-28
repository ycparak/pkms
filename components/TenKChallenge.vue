<template>
  <div class="challenge">
    <h1>The $10k MRR Challenge.</h1>
    <p>
      <Strong>Tldr.</Strong> I’m attempting to get to $10k MRR in 920 days (2.5 years). I’m sharing the whole journey in chronological weekly updates below.
    </p>
    <p>
      <Strong>Tldr for participants.</Strong> Since there’s been interest, if you’d like to take on the challenge too, I’m spinning up a Slack for us (join here). The timeline doesn’t matter as long as you’re on a journey to $10k MRR. I’ll cap it at some intimate number (50ish?) so it doesn’t get unruly.
    </p>
    <p>
      <Strong>Tldr for lurkers.</Strong> I’ll be posting all my weekly updates here, but you can get them in your inbox by subscribing below. Alternatively, follow me on Twitter.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Challenge',
}
</script>

<style lang="scss" scoped>
.challenge {
  // border: 1px solid var(--line);
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
