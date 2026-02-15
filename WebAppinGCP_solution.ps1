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
# Configuration des variables du projet GCP
$projectId = "your-gcp-project-id"
$region = "us-central1"

# Configuration du service et de la version
$serviceName = "web-app-service"
$version = "v1"

# Chemin local vers l'application web
$webAppPath = "C:\Path\To\Your\WebApp"

# Authentification auprès de Google Cloud Platform
gcloud auth login

# Définir le projet GCP actif
gcloud config set project $projectId

# Créer une nouvelle application App Engine dans la région spécifiée
gcloud app create --region=$region

# Déployer l'application web sur App Engine avec les paramètres spécifiés
# --no-promote: ne pas diriger le trafic vers cette version immédiatement
# --stop-previous-version: arrêter la version précédente
# --quiet: mode silencieux sans confirmation
gcloud app deploy --project=$projectId --version=$version $webAppPath --no-promote --stop-previous-version --quiet $webAppPath

# Configurer le trafic pour diriger 100% du trafic vers la nouvelle version
gcloud app services set-traffic $serviceName --splits $version=1 --quiet

# Afficher un message de succès avec l'URL d'accès à l'application
Write-Host "Deployment of web application to GCP App Engine completed successfully. Access it at: https://$projectId.appspot.com"

