import { execSync } from 'child_process';
import { existsSync, writeFileSync } from 'fs';
import { resolve } from 'path';

console.log('🚀 Building production bundle...');
execSync('npm run build', { stdio: 'inherit' });

const distDir = resolve('dist');
const noJekyllPath = resolve(distDir, '.nojekyll');
if (!existsSync(noJekyllPath)) {
  writeFileSync(noJekyllPath, '');
}

console.log('📦 Deploying dist/ to gh-pages branch...');
try {
  execSync('git init', { cwd: distDir, stdio: 'inherit' });
  execSync('git checkout -B gh-pages', { cwd: distDir, stdio: 'inherit' });
  execSync('git add -A', { cwd: distDir, stdio: 'inherit' });
  execSync('git commit -m "Deploy production build to gh-pages"', { cwd: distDir, stdio: 'inherit' });
  execSync('git remote add origin https://github.com/Chandu1123/Wedding_invitation.git', { cwd: distDir, stdio: 'inherit' });
  execSync('git push -f origin gh-pages', { cwd: distDir, stdio: 'inherit' });
  console.log('✅ Successfully deployed to GitHub Pages (gh-pages branch)!');
} catch (err) {
  console.error('❌ Deployment error:', err.message);
} finally {
  try {
    const gitDir = resolve(distDir, '.git');
    if (existsSync(gitDir)) {
      execSync(`rmdir /s /q "${gitDir}"`, { stdio: 'ignore' });
    }
  } catch (e) {}
}
