import { ref } from 'vue';

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      const data = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!data.ok) throw Error("500 — couldn't retrieve posts from the server");
      posts.value = await data.json();
    } catch (err) {
      error.value = err;
      console.error(err);
    }
  };

  return { posts, error, load };
};

export default getPosts;
