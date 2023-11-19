<section class="homepage">
  <div class="about">
    <p>Hey, I’m Yusuf. I’m a Product Designer and Software Engineer. The broad through line of my work is an attempt to balance my love for designing, building, and crafting novel computer interfaces with my equally strong desire to build software (or software-adjacent) businesses. I’m at my happiest working on things that let me do both — thoughtfully.</p>
    <p>I’m particularly interested in prototyping new interfaces for creative knowledge work; utilising advancements in hardware, software, and design to build native-like, local-first applications; and figuring out how to make the world around us and the tools we use more interpretable without falling into the traps of legibility.</p>
    <p>Previously, I created Pinched.io, a sourcing tool built on top of Twitter’s social graph, backed by Pioneer. Before that, I was a design engineer at Thinkst where I worked on Canary, a tool used by security teams to detect attackers on their networks. In university, I studied Computer Science.</p>
    <hr />
    <p>Hey, I’m Yusuf. I’m a Product Designer and Software Engineer. The broad through line of my work is an attempt to balance my love for designing, building, and crafting novel computer interfaces with my equally strong desire to build software (or software-adjacent) businesses. I’m at my happiest working on things that let me do both — thoughtfully.</p>
    <p>I’m particularly interested in prototyping new interfaces for creative knowledge work; utilising advancements in hardware, software, and design to build native-like, local-first applications; and figuring out how to make the world around us and the tools we use more interpretable without falling into the traps of legibility.</p>
    <p>Previously, I created Pinched.io, a sourcing tool built on top of Twitter’s social graph, backed by Pioneer. Before that, I was a design engineer at Thinkst where I worked on Canary, a tool used by security teams to detect attackers on their networks. In university, I studied Computer Science.</p>
  </div>
  <div class="archive"></div>
</section>

<style lang="scss">
  .homepage {
    height: fit-content;
    width: 100%;
    margin: functions.toRem(112px) 0 functions.toRem(224px) 0;
  }

  .about {
    max-width: functions.toRem(672px);
    padding: 0 functions.toRem(20px);
    margin: 0 auto;
    p {
      font-size: functions.toRem(24.1275px);
      line-height: functions.toRem(35px);
      letter-spacing: -0.01em;
      font-style: normal;
      font-weight: 400;
      margin-bottom: functions.toRem(56px);
      color: #222;
      &::before {
        content: "";
        margin-bottom: -0.3943em;
        display: table;
      }
      &::after {
        content: "";
        margin-top: -0.3518em;
        display: table;
      }
      &:last-of-type {
        margin-bottom: 0;
      }
    }
    hr {
      margin: functions.toRem(56px) 0;
    }
  }
</style>