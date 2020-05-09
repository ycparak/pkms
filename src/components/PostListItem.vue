<template>
  <div class="post">
    <a
      v-if="post.link"
      class="post__link"
      :class="{
        essay: post.collection.toLowerCase() === 'essay',
        active: isActive,
      }" 
      :href="post.link"
      target="_blank"
      @mouseover.stop.prevent="mouseoverArticle(post)"
      @mouseleave.stop.prevent="mouseleaveArticle()">
      <PostListItemCard
        :post="post"
        :collection="collection"
        :isActive="isActive"
        :actively-selected="activelySelected"
      />
    </a>
    <g-link
      v-else
      class="post__link"
      :class="{
        essay: post.collection.toLowerCase() === 'essay',
        active: isActive,
      }" 
      :to="post.link ? post.link : post.path"
      @mouseover.native.stop.prevent="mouseoverArticle(post)"
      @mouseleave.native.stop.prevent="mouseleaveArticle()">
      <PostListItemCard
        :post="post"
        :collection="collection"
        :isActive="isActive"
        :actively-selected="activelySelected"
      />
    </g-link>
  </div>
</template>

<script>
import PostListItemCard from '@/components/PostListItemCard';

export default {
  name: 'PostListItem',
  props: [
    'post',
    'collection',
    'collectionNext',
    'hoveredPost',
    'setNextCollection',
    'setHoveredPost',
    'revertCollection'
  ],
  components: {
    PostListItemCard,
  },
  computed: {
    isActive() {
      if (this.collection === this.collectionNext || this.collectionNext === 'all') {
        return true;
      }
      else if (this.hoveredPost && this.hoveredPost.id === this.post.id) {
        return true;
      }
      else if (this.hoveredPost && this.collectionNext === this.post.collection.toLowerCase()) {
        return false;
      }
      else if (this.hoveredPost === null && this.collectionNext === this.post.collection.toLowerCase()) {
        return true;
      }
      return false;
    },
    activelySelected() {
      if (this.isActive && this.collection !== this.collectionNext && this.collectionNext !== 'all') return 'active';
      return ''
    },
  },
  methods: {
    mouseoverArticle(post) {
      console.log(post.collection);
      this.setNextCollection(post.collection.toLowerCase())
      this.setHoveredPost(post)
    },
    mouseleaveArticle() {
      this.revertCollection();
      this.setHoveredPost(null)
    },
  }
}
</script>

<style lang="scss" scoped>
.post {
  border-bottom: 1px solid var(--accent-color);
  @include daynight;
  &:first-child { margin-top: -24px; }
  &:last-child { margin-bottom: 0; }
}

.post__link {
  display: block;
  position: relative;
  color: var(--text-color);
  border-radius: 2px;
  padding: 28px 0;
  cursor: pointer;

  &.active { opacity: 1; }
  &:not(.active) { opacity: .2 }

  &:hover, &:focus, &:active {
    outline: none;
    box-shadow: none;
  }
}
</style>