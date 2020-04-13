# REBUILD THE PACKAGE
Write-Host "Cleaning..."
gulp clean
Write-Host "Running codegen..."
npm run codegen
Write-Host "Packaging Standalone App..."
npm run build:app

Write-Host "Bundling SPFx..."
# gulp bundle --ship
Write-Host "Packaging SPFx..."
# gulp package-solution --ship

# # GET THE CURRENT VERSION TO CREATE THE FOLDER PATH
# $packageJson = Get-Content -Raw -Path "package.json" | ConvertFrom-Json
# $packageFolder = "packages/" + $packageJson.version

# # TRY CREATE THE FOLDER, THEN COPY ANY .SPPKG FILES INTO IT
# New-Item -ItemType Directory -Force -Path $packageFolder
# Copy-Item -Path sharepoint/solution/*.sppkg -Destination $packageFolder -Verbose