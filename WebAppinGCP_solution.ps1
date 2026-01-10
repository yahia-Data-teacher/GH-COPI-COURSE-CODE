<#
.SYNOPSIS
Déploie une application web sur Google Cloud Platform (GCP) App Engine.

.DESCRIPTION
Ce script automatise le déploiement d'une application web vers GCP App Engine.
Il configure le projet GCP, authentifie l'utilisateur, crée une application App Engine,
déploie la version spécifiée et configure le trafic.

.PARAMETER projectId
L'ID du projet GCP cible pour le déploiement.

.PARAMETER region
La région GCP où l'application sera créée (par défaut: us-central1).

.PARAMETER serviceName
Le nom du service App Engine (par défaut: web-app-service).

.PARAMETER version
La version de l'application à déployer (par défaut: v1).

.PARAMETER webAppPath
Le chemin local vers le répertoire contenant l'application web à déployer.

.EXAMPLE
$projectId = "mon-projet-gcp"
$webAppPath = "C:\Applications\MonAppWeb"
# Exécuter le script pour déployer l'application

.NOTES
Prérequis:
- Google Cloud SDK doit être installé et accessible
- L'utilisateur doit avoir les permissions nécessaires dans le projet GCP
- Le répertoire de l'application doit contenir un fichier app.yaml

.FUNCTIONALITY
Déploiement d'application web sur Google Cloud Platform App Engine
#>
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

