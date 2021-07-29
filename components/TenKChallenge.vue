<template>
  <div class="challenge">
    <h1>The $10,000 MRR Challenge.</h1>
    <h4>Tldr.</h4>
    <p>
      I’m attempting to get to $10k MRR in 912 days / 2.5 years. I’m sharing the whole journey transparently in weekly updates below.
      You can also get the updates in your inbox by subscribing or following me on <a target="_blank" href="https://twitter.com/ycparak">Twitter</a>.
    </p>
    <Newsletter />
    <h4 class="post-newsletter">Backstory.</h4>
    <p>For a few years now I’ve been itching to start my own bootstrapped startup. In fact I’ve tried to on many occasions. Predictably though, after a few weeks of enthusiastic coding I’d lose interest. Either something would come up at home/work or I’d be onto some new idea. About a year ago I realised that If I actually wanted to do it, I’d have to make it a priority.</p>
    <p>And so I saved up 2.5 years of runway, reduced any outside responsibilities and I’m now giving this thing a proper shot. The goal is by January 31st 2024, to have $10,000 in monthly recurring revenue from one (or a combination of) project(s).</p>
    <p>Depending on how much time you spend on HN that timeline might seem conservative to you. In general I agree and optimistically I think I can get there quicker. But I’d rather plan for this to be a marathon and be happy if it turns out to be a sprint.</p>
    <p>I’m going to do this thing while being as transparent as possible. I’ll be posting weekly updates here where I try to show all the inner workings (revenue, mockups, challenges, all of it). It’s all the rage to 'build in public' now, but I’ve been burned by working in stealth before and I’d like to avoid that this time. I tend to use stealth mode as an excuse to never show my work to anyone. It’s stupid and mostly comes from a fear of failure.</p>
    <h4>Quick FAQ.</h4>
    <p>
      <ul>
        <li>I don’t have a co-founder.</li>
        <li>I don’t plan on hiring anyone.</li>
        <li>
          I do know how to code and design products:
          <ul>
            <li>My frontend skills are very good</li>
            <li>My backend/infrastructure skills aren’t good</li>
            <li>My design skills are pretty good</li>
          </ul>
        </li>
        <li>I don’t have an audience, <a target="_blank" href="https://twitter.com/ycparak">134 Twitter followers</a> at the time of writing this and no email subscribers.</li>
        <li>I don’t have a network in tech. I know one or two people who do but for the most part I’m out of the loop.</li>
        <li>
          I have 36 months of savings, living just above the <strike>poverty</strike> ramen profitability line:
          <ul>
            <li>30 months for getting to $10k MRR</li>
            <li>4 months umbrella savings in case shit hits the fan</li>
            <li>2 months for finding a job if it comes to it</li>
          </ul>
        </li>
        <li>I don’t have any dependants.</li>
        <li>I don’t have an idea yet. I have a bunch of semi-formed ideas that I need to validate before picking one (my first weekly update will be about this).</li>
      </ul>
    </p>
    <h4>Participate in the challenge.</h4>
    <p>If you’d like to take on the challenge too, I’m spinning up a Slack for us. Your timeframe for getting to $10k doesn’t matter as long as you’re somewhere on that journey. I’ll cap it at 50 people so it stays nice and intimate. You can apply to join <a target="_blank" href="https://l5p77i9dm17.typeform.com/to/KdTTRXJE">here</a>.</p>
    <h4>Long FAQ.</h4>
    <p><strong>Why $10,000?</strong> At $10k I can live very comfortably. I can take care of family, I can travel and I can easily pay for everything I need and want. $10,000 also happens to go a long way when living in South Africa. And I know if I can get to $10k MRR, I can get to $100k MRR  and who doesn’t want a $100k MRR :)</p>
    <p><strong>Why do this in public?</strong> Because I want people to see me succeed. I want to build an audience. I want to meet people who also like building cool shit. I want lot’s of Twitter followers. I dunno, I want to be a cool kid.</p>
    <p><strong>When is the first update?</strong> 1st of August 2021, will be the week 0 update. It will probably be about me picking / validating an idea.</p>
    <p><strong>What if you fail?</strong> I doubt a fail will be an outright fail. Through this I will have 1) improved my skills, 2) made more friends / improved my network, and 3) it’s very likely I would have gotten to at least some bit of revenue.</p>
    <p><strong>Anything else?</strong> While this is definitely about the revenue, I genuinely enjoy building software projects. So for me to now finally be able to focus on this full time is pretty exciting. If you have the same passion or have any other questions, please email me at <code>first_name @ ycparak.com</code>, I’d love to hear from you.</p>
  </div>
</template>

<script>
export default {
  name: 'Challenge',
}
</script>

<style lang="scss" scoped>
.challenge {
  padding: 0 var(--margin);
  border-radius: 8px;
  margin-bottom: 32px;
}
p {
  margin-bottom: 12px;
}
strong {
  line-height: 1;
  font-size: 16px;
  color: var(--subtle-text);
  font-weight: 400;
  margin-top: 8px;
  padding: 0;
  font-style: italic;
}
.post-newsletter {
  margin-top: 34px;
}
</style>
