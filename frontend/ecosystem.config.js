require('dotenv').config({ path: '.env.deploy' });

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_FOLDER, DEPLOY_REF = 'origin/main',
} = process.env;

module.exports = {
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: 'git@github.com:Galdenysh/web-plus-pm2-deploy.git',
      path: DEPLOY_PATH,
      'post-deploy': `cd ~${DEPLOY_FOLDER}/source/frontend && npm i && npm run build`,
    },
  },
};
