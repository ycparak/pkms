import { ref } from 'vue';

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      if (!data.ok) throw Error("500 — couldn't retrieve post from the server");
      post.value = await data.json();
    } catch (err) {
      error.value = err;
      console.error(err);
    }
  };

  return { post, error, load };
};

export default getPost;
