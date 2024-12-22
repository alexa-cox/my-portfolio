import { BLOGS } from './BLOGS';

export const selectRandomBlogs = (count = 8) => {
  const blogs = [...BLOGS];
  const selectedBlogs = [];

  while (selectedBlogs.length < count && blogs.length > 0) {
    const weights = blogs.map((blog) => blog.priority || 1);
    const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
    let random = Math.random() * totalWeight;

    for (let i = 0; i < blogs.length; i++) {
      random -= weights[i];
      if (random <= 0) {
        selectedBlogs.push(blogs.splice(i, 1)[0]);
        break;
      }
    }
  }

  return selectedBlogs;
};
