$projectId = "your-gcp-project-id"
$region = "us-central1"

$serviceName = "web-app-service"
$version = "v1"

$webAppPath = "C:\Path\To\Your\WebApp"

gcloud auth login

gcloud config set project $projectId

gcloud app create --region=$region

gcloud app deploy --project=$projectId --version=$version $webAppPath --no-promote --stop-previous-version --quiet $webAppPath

gcloud app services set-traffic $serviceName --splits $version=1 --quiet

Write-Host "Deployment of web application to GCP App Engine completed successfully. Access it at: https://$projectId.appspot.com"

#Please document this code and include inline comments in the code in French.