Write-Host "Starting deployment to GitHub Pages..." -ForegroundColor Green
node deploy-gh-pages.js
Write-Host "Press any key to continue..." -ForegroundColor Yellow
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown") 