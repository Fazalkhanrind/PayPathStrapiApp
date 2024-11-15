// src/middlewares/landing-page-populate.js

module.exports = (config, { strapi }) => {
    return async (ctx, next) => {
      // Check if the request is for the landing-page content type
      if (ctx.request.url.startsWith('/api/landing-pages') && !ctx.query.populate) {
        ctx.query.populate = '*'; // Auto-populate all fields
      }
      await next();
    };
  };
  