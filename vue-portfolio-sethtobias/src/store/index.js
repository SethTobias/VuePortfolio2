import { createStore } from "vuex";
const gitHubPages = "https://github.com/SethTobias/VuePortfolioData/blob/main/index.json";


const fetchData = async (url, mutation, dataProperty, context) => {
  context.commit('setLoading', true);

  try {
    const response = await fetch(url);
    const data = await response.json();
    context.commit(mutation, data[dataProperty]);
  } catch (error) {
    context.commit('setError', true);
    alert(`Error 404 Not Found!`);
  } finally {
    context.commit('setLoading', false);
  }
};

export default createStore({
  state: {
    projects: null,
    testimonial: null,
    experience: null,
    loading: false,
    error: false,
  },
  mutations: {
    setProjects: (state, projects) => {
      state.projects = projects;
    },
    setTestimonials: (state, testimonial) => {
      state.testimonial = testimonial;
    },
    setExperience: (state, experience) => {
      state.experience = experience;
    },
    setLoading: (state, value) => {
      state.loading = value;
    },
    setError: (state, value) => {
      state.error = value;
    },
  },
  actions: {
    fetchData: async (context, { url, mutation, dataProperty }) => {
      await fetchData(url, mutation, dataProperty, context);
    },
    getProjects: async (context) => context.dispatch('fetchData', {
      url: gitHubPages,
      mutation: "setProjects",
      dataProperty: "projects",
    }),
    getTestimonial: async (context) => context.dispatch('fetchData', {
      url: gitHubPages,
      mutation: "setTestimonial",
      dataProperty: "testimonial",
    }),
    getResume: async (context) => context.dispatch('fetchData', {
      url: gitHubPages,
      mutation: "setExperience",
      dataProperty: "experience",
    }),
  },
});
