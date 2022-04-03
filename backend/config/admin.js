module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '88745c7da98deec73525ddd019113047'),
  },
});
