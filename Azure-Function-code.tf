#T Terraform code to create an azure function app

# Provider block
provider "azurerm" {
  features {}
}

# Resource Group
resource "azurerm_resource_group" "rg" {
  name     = "example-resources"
  location = "West Europe"
}

# Storage Account

resource "azurerm_storage_account" "storage" {
  name                     = "examplestorageacct"
  resource_group_name      = azurerm_resource_group.rg.name
  location                 = azurerm_resource_group.rg.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
}

# App Service Plan
resource "azurerm_app_service_plan" "app_service_plan" {
  name                = "example-app-service-plan"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  kind                = "FunctionApp"
  sku {
    tier = "Dynamic"
    size = "Y1"
  }
}

# Function App
resource "azurerm_function_app" "function_app" {
  name                       = "example-function-app"
  location                   = azurerm_resource_group.rg.location
  resource_group_name        = azurerm_resource_group.rg.name
  app_service_plan_id        = azurerm_app_service_plan.app_service_plan.id
  storage_account_name       = azurerm_storage_account.storage.name
  storage_account_access_key = azurerm_storage_account.storage.primary_access_key
  version                    = "~3"

  app_settings = {
    FUNCTIONS_WORKER_RUNTIME = "dotnet"
    WEBSITE_RUN_FROM_PACKAGE = "1"
  }
}

# Output the Function App default hostname
output "function_app_default_hostname" {
  value = azurerm_function_app.function_app.default_hostname
}   
