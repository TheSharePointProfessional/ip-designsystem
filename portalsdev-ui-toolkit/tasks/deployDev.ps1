gulp clean
gulp bundle --ship
gulp package-solution --ship

Connect-PnPOnline https://skylinespark.sharepoint.com/sites/devshowcase
Add-PnPApp -Path ./sharepoint/solution/portalsdev-designsystem.sppkg -Scope Site -Publish -Overwrite -SkipFeatureDeployment