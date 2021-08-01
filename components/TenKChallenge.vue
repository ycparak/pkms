<template>
  <div class="challenge">
    <h1>The Challenge: $10k MRR in 2.5 Years</h1>
    <p>For a few years now I’ve been itching to start my own bootstrapped startup. In fact I’ve semi-tried to on many occasions. Predictably though, after a few weeks of enthusiastic coding I’d lose interest. Either something would come up at home/work or I’d get infatuated with some new idea.</p>
    <p>About a year ago I realised that If I actually wanted to do it, I’d have to make it a priority. Some people can manage a job, family, excercise and a bunch of other responsibilities while bootstrapping their own company. I am not one of them. If I’m going to do something it has to have my full focus. And so I’ve saved up 912 days / 2.5 years of runway, reduced most of my responsibilities and plan to now giving this thing a proper shot.</p>
    <p class="goal">
      <strong>The goal is by January 31st 2024 (912 days / 2.5 years) to have $10,000 in monthly recurring revenue from one (or a combination of) project(s).</strong>
    </p>
    <p>Depending on how much time you spend on HN that timeline might seem conservative to you. In general I agree and optimistically I think I can get there quicker. But I’d rather plan for this to be a marathon and be happy if it turns out to be a sprint.</p>
    <p>I’m going to do this while sharing as much of it as possible in weekly updates below. Revenue, mockups, GTM strategy, failures, all of it. I’ve been burned by working in stealth before and I’d like to avoid that now even if that means overcorrecting. If anything, posting it all here serves as a forcing function to think through things in more detail and have something to show every week.</p>
    <p class="pre-newsletter">
      You can get the weekly updates by subscribing below (promise, no spam). Alternatively follow me on <a target="_blank" href="https://twitter.com/ycparak">Twitter</a>.
      <Newsletter />
    </p>
    <h4 class="post-newsletter">Quick FAQ.</h4>
    <ul>
      <li>I don’t have a co-founder.</li>
      <li>I don’t plan on hiring anyone.</li>
      <li>
        I know how to code:
        <ul>
          <li>My frontend/design skills are very good</li>
          <li>My backend/infrastructure skills aren’t good</li>
        </ul>
      </li>
      <li>I don’t have an idea yet. I have a bunch of semi-formed ideas that I need to validate before picking one.</li>
      <li>I don’t have an audience, <a target="_blank" href="https://twitter.com/ycparak">134 Twitter followers</a> at the time of writing this and no email subscribers.</li>
      <li>I don’t have a network in tech. I know one or two people who do but for the most part I’m out of the loop.</li>
      <li>
        I have 36 months of savings, living just above the <strike>poverty</strike> ramen profitability line:
        <ul>
          <li>30 months for getting to $10k MRR</li>
          <li>4 months umbrella savings in the event shit hits the fan</li>
          <li>2 months for finding a job if it comes to it</li>
        </ul>
      </li>
      <li>I don’t have any dependants.</li>
      <li>I do have healtchare coverage. I pay monthly for this and it’s worked into my budget.</li>
    </ul>
    <h4>Participate in the challenge.</h4>
    <p>I’d love to get a Slack group going filled with other people also also somewhere along the journey to $10k MRR. If that sounds like something you’d like to be in on, <a target="_blank" href="https://l5p77i9dm17.typeform.com/to/KdTTRXJE">fill this form in</a> to join. I’ll cap it at 50 people so it stays nice and intimate.</p>
    <h4>Long FAQ.</h4>
    <p><strong>What are you going to build?</strong> Honestly, I have no clue. It could be a B2B saas app or a consumer thing. I do know though that it will be niche and opinionated. There’s something very alluring about a one/two person team that focuses on building really great, really simple, opinionated software. I’d like to do the same. I do have a few other requirements though (mostly crib noted from <a target="_blank" href="https://www.derrickreimer.com/essays/2019/05/28/finding-my-next-bootstrapped-business-idea.html">Derrick Reimer</a>):</p>
    <ul>
      <li>Since I’m bootstrapping, the market must already exist. If it’s a saas, people should be paying for software in the space already. If it’s a consumer product there should be a clear path to revenue.</li>
      <li>The initial version should be shippable in a maximum of 3 months. I don’t want long development cycles.</li>
      <li>The product shouldn’t be mission critical i.e. an outage shouldn’t mean people die.</li>
      <li>No hardware/shipping/logistics.</li>
      <li>No native app support.</li>
      <li>If it’s a B2B product, making a sale shouldn’t require more than 2 decision makers. I don’t want to deal with the enterprise sales process.</li>
      <li>I should be able to build everything myself.</li>
    </ul>
    <p><strong>Why $10,000?</strong> At $10k I can live very comfortably. I can take care of family, I can travel and I can easily pay for everything I need and want. $10,000 also happens to go a long way when living in South Africa. I also know if I can get to $10k MRR, I can get to $100k and who doesn’t want $100k MRR :)</p>
    <p><strong>Why do this in public?</strong> Because I want to build an audience. Because I want to meet people who also like building cool shit. Because I want lot’s of Twitter followers. Because I want people to see me succeed. I dunno, lots of vain reasons.</p>
    <p><strong>When is the first update?</strong> 1st of August 2021. That will be the introduction update and will probably be about me picking/validating ideas. Updates will come every Sunday.</p>
    <p><strong>What if you fail?</strong> I doubt a fail will be an outright fail. Through this I will have 1) learned a lot and improved my skills, 2) made more friends / improved my network, and 3) it’s very likely I would have gotten to at least some bit of revenue.</p>
    <p><strong>Anything else?</strong> While this is definitely about the revenue, I genuinely enjoy building cool software. The idea of designing, strategizing and building is invigorating to me. So for me to now finally be able to focus on this full time is pretty exciting. If you have the same love for craftsmanship or have any other questions, please email me at <code>first_name @ ycparak.com</code>, I’d love to hear from you.</p>
  </div>
</template>

<script>
export default {
  name: 'Challenge',
}
</script>

<style lang="scss" scoped>
hr {
  border-color: var(--line);
  width: 25%;
  margin-top: 40px;
  margin-bottom: 40px;
}
.challenge {
  border-radius: 8px;
  margin-bottom: 32px;
  > * {
    padding: 0 var(--margin);
  }
  @media (max-width: 912px) {
    padding: 0;
    > * {
      padding: 0;
    }
  }
}
strong {
  line-height: 1;
  font-size: 16px;
  color: var(--subtle-text);
  font-weight: 400;
  margin-top: 8px;
  padding: 0;
  font-style: italic;
  transition: all .1s ease-in-out;
}
.pre-newsletter {
  margin-bottom: 12px;
}
.post-newsletter {
  margin-top: 34px;
}
</style>
