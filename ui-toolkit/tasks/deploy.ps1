Param(
    $Url = "https://skylinespark.sharepoint.com/sites/apps",
    [switch] $SkipBuild,
    [ValidateSet("Site", "Tenant")]
    $Scope = "Tenant"
)

if (!$SkipBuild) {
    Write-Host "Building App..."
    npm run build
}

Write-Host "Connecting to " $Url "..."
Connect-PnPOnline -Url $Url

# Write-Host "Deploying to " $Url
# $file = Get-Item .\sharepoint\solution\*.sppkg
# Add-PnPApp -Path $file.FullName -Scope $Scope -Publish -Overwrite -SkipFeatureDeployment

Write-Host "Uploading the ClientSideAssets..."
Get-ChildItem -Path "ClientSideAssets" | ForEach-Object {
    Add-PnPFile -Path  $_.FullName -Folder "ClientSideAssets/ui-toolkit"
}
