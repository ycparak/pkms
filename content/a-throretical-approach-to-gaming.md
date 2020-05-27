---
title: A Theoretical Approach to Gamification
date: 2020-04-06
abstract: b
excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis."
collection: Essay
collections: Essays
tags: ['Startups', 'Product',]
---
If we can design applications that help people solve their long term goals, we can increase human output. This seems rather wishy-washy, and yet it’s perfectly reasonable, <inter-link href='/notetaking' space-after="true">Notetaking</inter-link> when you think about it, to come to the conclusion that something like Ruby on Rails has helped increase human output. It’s obviously created thousands (millions?) of jobs. It’s helped people create great companies like Github, Airbnb and Twitter. It’s changed people’s lives. I suspect that [DHH](https://en.wikipedia.org/wiki/David_Heinemeier_Hansson) when creating Rails never thought that his baby could change the world quite like it has. <inter-link href='/make'>Make</inter-link>.



Rails made it easy for developers to build web applications really quickly. Much quicker and easier than before. It’s interesting to think about what other things can help people solve hard problems more easily. Usually it’s some new technological break through, like Rails. Occasionally it’s a UX breakthrough <inter-link href='/turning-side-projects-into-profitable-startups/'>Turning Side Projects into Profitable Startups</inter-link>, like GUI’s instead of the command line. But I think there’s a more under-appreciated one. A psychological breakthrough, through the use of gamification.

Game developers seem to have figured out how gamification works. Most people wouldn’t think resource allocation problems are fun, and yet people really seem to enjoy playing Age of Empires. So fun in fact that kids risk the ire of their parents to spend 5+ hours solving these technical problems. 

There’s something really interesting about this. And yet we haven’t really applied the same techniques used in games to everyday applications. Imagine kids being _that_ interested in learning physics. Or adults being _that_ interested in paying off their student loans. It begs the question, how can we use the techniques from games to improve everyday applications?

## Engagement == Fun
Why are games so engaging? That’s easy, any kid can answer that. It’s because games are so _fun_. Fun—you don’t hear ‘grown ups’ use that word much. It seems that when you grow up, you become serious. You sacrifice having fun for serious things only grown ups do, like working. The dictionary says fun is “a behaviour or activity that is enjoyable or entertaining”, interestingly though, the opposite of fun, is not _serious,_ but _boring_.
When we build products that aren’t fun, we’re not designing towards a more serious experience, we’re designing towards a more boring one. And since we know from games that fun is engaging, by not designing for fun, we’re ipso facto not designing for engagement. 
It would be interesting to think about, for example, a learning system that is actually _engaging_. We know that only about 5.5% of the 81 million online students complete the online courses they enrol in. How would the world change if that number doubled? I suspect it could have an even bigger impact than Rails had on the world.

## How
So how do you design applications to be more engaging? Well, we’ve established that games are engaging because they’re so fun. Thus to make applications more engaging, we’d just have to make them more like games. That’s what gamification is.

    Gamification = the process of adding elements from games to non-game applications.

And I think I’ve figured out a process, that’s more science than art, for how to do it. It’s a model derived from studying the habit loops of games and the relevant [scientific literature](https://www.researchgate.net/publication/270273830_Gamification_in_Education_A_Systematic_Mapping_Study). There’s seven components to it. All applications with a modicum of user engagement implement at least one component. Most games implement all seven.

### 1. Goals
Set goals for users, they give a sense of purpose to the system. In games, goals are levels or missions. When we complete a mission, in games or the real world, they give us a sense of accomplishment and pleasure. With each success, our brain releases a chemical called dopamine. When dopamine flows into the brain's reward pathway (the part responsible for pleasure, learning and motivation), we not only feel greater concentration but are inspired to re-experience the activity that caused the chemical release in the first place. Thereby creating a positive feedback loop. 
In games, goals become progressively harder, always adjusting for a users level of ability. If a goal is trivial to achieve, we don’t get the same sense of accomplishment. If a goal is too hard to achieve, we give up. Design goals to always challenge users accordingly.

### 2. Rules
Agree on the rules of the ‘game’. This is the core action(s) you want your users to complete, like taking lessons in a learning application, or completing tasks in a productivity application. Too many actions or rules and you risk confusing your users leading to lack of engagement. The best type of rules are simple to understand and to execute and require minimal or no input from users. `Engagement = Desire - Labour - Confusion`.

Incidentally this is why adding features to an already failing application won’t increase engagement. If users aren’t completing the core action of your product, adding more features won’t help. It’s like adding water to a leaky bucket. You have to patch the holes in the bucket first.
This is also why it’s better to launch with just your core product really quickly. You’ll be able to tell immediately if you’ve built something users actually want.

### 3. Feedback
Give feedback to users, specifically progress feedback. Users need to see how well they are doing in the context of the goals you set for them and the rules that they’ve agreed to. The best games give you feedback from two sources: feedback from the game, in the form of progress bars and levels, and feedback from the in-game community, in the form of leaderboards and in-game social peer groups. 

### 4. Rewards
Offer rewards to users. Reward users for positive actions they take and for playing according to the rules. Rewards can be anything from virtual badges, points, trophies, coins, stickers, avatars, to actual material gains like money. 
There is a rewards system that works for everything. If you’re trying to design a system with gamification, keep it simple and use it. It’s called the _BPL system_ (Badges, Points and Leaderboards):

1. A points system that quantifies the performance of users.
2. Badges awarded for special achievements.
3. And, leaderboards that rank users based on the previous two. 

### 5. Motivation
Offer motivation for users to act. There are two types: intrinsic motivation, that comes from within us like curiosity, pride or a sense of achievement, and extrinsic motivation, that comes from outside us like money, grades or praises. Research shows that intrinsic motivation is a lot more powerful than extrinsic motivation. You want users to feel intrinsically motivated to use your product. And the feeling of rush right after we accomplish something, is considered to be the ultimate intrinsic motivator. So design products that allow users to experience winning. Each in-app goal completion should feel like a win.

### 6. Freedom of choice
A system will be fun only when users choose to voluntarily participate in it, and follow the goals and rules. Not when they’re forced or tricked into it. 
A lot of free mobile games make this mistake. They’ll usually force you to watch an advert in exchange for something you need in the game. This is usually an [anti-pattern](https://en.wikipedia.org/wiki/Anti-pattern) that negatively affects games in the long run by frustrating users.

### 7. Freedom to fail
Failing without consequences keeps users more engaged than when they’re getting punished because they can try again. Denying them that, hinders their involvement. 
This is like a game that lets you fail a level multiple times without resetting you back to the beginning of the game.

---

Not implementing any of the components is a guarantee of failure. A product that implements all seven will probably succeed. 
And that’s kind of exciting, when you think about it, because all seven are doable. Hard, but doable. And since a product that does this well, will have the same kind of impact rails had on the world, that implies changing the world is doable too. Hard, but doable.
