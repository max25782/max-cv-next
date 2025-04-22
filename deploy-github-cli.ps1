Write-Host "Starting deployment to GitHub Pages..." -ForegroundColor Green

# Build the Next.js app
Write-Host "Building Next.js app..." -ForegroundColor Yellow
npm run build

# Check if gh CLI is installed
try {
    $ghVersion = gh --version
    Write-Host "GitHub CLI is installed: $ghVersion" -ForegroundColor Green
} catch {
    Write-Host "GitHub CLI is not installed. Please install it from https://cli.github.com/" -ForegroundColor Red
    exit 1
}

# Create a temporary directory
$tempDir = "temp-gh-pages"
if (Test-Path $tempDir) {
    Remove-Item -Recurse -Force $tempDir
}
New-Item -ItemType Directory -Path $tempDir

# Copy the build output to the temporary directory
Write-Host "Copying build output..." -ForegroundColor Yellow
Copy-Item -Path "out\*" -Destination $tempDir -Recurse

# Initialize a new git repository in the temporary directory
Write-Host "Initializing git repository..." -ForegroundColor Yellow
Set-Location $tempDir
git init
git config user.name "GitHub Actions"
git config user.email "actions@github.com"

# Add all files to git
Write-Host "Adding files to git..." -ForegroundColor Yellow
git add .

# Commit the changes
Write-Host "Committing changes..." -ForegroundColor Yellow
git commit -m "Deploy to GitHub Pages"

# Push to the gh-pages branch using GitHub CLI
Write-Host "Pushing to GitHub Pages..." -ForegroundColor Yellow
gh auth status
if ($LASTEXITCODE -eq 0) {
    gh repo sync
    git push -f origin master:gh-pages
} else {
    Write-Host "You need to authenticate with GitHub CLI. Please run 'gh auth login' first." -ForegroundColor Red
    exit 1
}

# Clean up
Write-Host "Cleaning up..." -ForegroundColor Yellow
Set-Location ..
Remove-Item -Recurse -Force $tempDir

Write-Host "Deployment process completed!" -ForegroundColor Green
Write-Host "Your site should be available at: https://max25782.github.io/max-cv-next/" -ForegroundColor Cyan 