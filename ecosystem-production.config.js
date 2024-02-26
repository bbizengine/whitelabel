module.exports = {
  apps: [
    {
      name: "production-whitelabel",
      script: "yarn",
      args: "start:prod",
      cwd: "/var/www/whitelabel/landing/",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
    },
  ],
};
