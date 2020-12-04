module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/styles/_reset.scss";
          @import "@/styles/_variables.scss";
          @import "@/styles/_helpers.scss";
          @import "@/styles/_mixins.scss";
          @import "@/styles/_typography.scss";
          @import "@/styles/_main.scss";
        `,
      },
    },
  },
};
