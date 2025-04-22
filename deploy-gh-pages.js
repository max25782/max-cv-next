const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const REPO_URL = 'https://github.com/max25782/max-cv-next.git';
const BRANCH = 'gh-pages';
const BUILD_DIR = 'out';
const TEMP_DIR = 'temp-gh-pages';

console.log('🚀 Starting deployment to GitHub Pages...');

try {
  // Create a temporary directory
  console.log('📁 Creating temporary directory...');
  if (fs.existsSync(TEMP_DIR)) {
    fs.rmSync(TEMP_DIR, { recursive: true, force: true });
  }
  fs.mkdirSync(TEMP_DIR);

  // Build the Next.js app
  console.log('🔨 Building Next.js app...');
  execSync('npm run build', { stdio: 'inherit' });

  // Copy the build output to the temporary directory
  console.log('📋 Copying build output...');
  fs.cpSync(BUILD_DIR, path.join(TEMP_DIR, '.'), { recursive: true });

  // Initialize a new git repository in the temporary directory
  console.log('🔧 Initializing git repository...');
  execSync(`cd ${TEMP_DIR} && git init`, { stdio: 'inherit' });

  // Configure git
  console.log('⚙️ Configuring git...');
  execSync(`cd ${TEMP_DIR} && git config user.name "GitHub Actions"`, { stdio: 'inherit' });
  execSync(`cd ${TEMP_DIR} && git config user.email "actions@github.com"`, { stdio: 'inherit' });

  // Add all files to git
  console.log('➕ Adding files to git...');
  execSync(`cd ${TEMP_DIR} && git add .`, { stdio: 'inherit' });

  // Commit the changes
  console.log('💾 Committing changes...');
  execSync(`cd ${TEMP_DIR} && git commit -m "Deploy to GitHub Pages"`, { stdio: 'inherit' });

  // Add the remote repository
  console.log('🔗 Adding remote repository...');
  execSync(`cd ${TEMP_DIR} && git remote add origin ${REPO_URL}`, { stdio: 'inherit' });

  // Push to the gh-pages branch
  console.log('⬆️ Pushing to GitHub Pages...');
  execSync(`cd ${TEMP_DIR} && git push -f origin master:${BRANCH}`, { stdio: 'inherit' });
  
  console.log('✅ Deployment successful!');
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
} finally {
  // Clean up
  console.log('🧹 Cleaning up...');
  if (fs.existsSync(TEMP_DIR)) {
    fs.rmSync(TEMP_DIR, { recursive: true, force: true });
  }
}

console.log('🎉 Deployment process completed!');
console.log(`🌐 Your site should be available at: https://max25782.github.io/max-cv-next/`); 