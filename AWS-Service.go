// AWS-Service.go provides functionality to create and manage AWS EC2 Virtual Private Cloud (VPC) resources.
//
// The package demonstrates how to:
// - Load AWS SDK v2 configuration using default credentials and settings
// - Initialize an EC2 service client for AWS interactions
// - Create a VPC with a specified CIDR block and tags
//
// main() is the entry point that orchestrates VPC creation and displays the results
// including VPC ID, CIDR block, and current state.
//
// createVPC() is a helper function that constructs and sends a CreateVpc request to AWS,
// with a custom tag ("Name": "My-VPC") for resource identification.
// It accepts a context for cancellation support and an EC2 client, returning the VPC creation response or an error.
package main

import (
	"context"
	"fmt"
	"log"

	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/service/ec2"
	"github.com/aws/aws-sdk-go-v2/service/ec2/types"
)

func main() {
	// Load AWS configuration
	cfg, err := config.LoadDefaultConfig(context.TODO())
	if err != nil {
		log.Fatalf("Unable to load SDK config: %v", err)
	}

	// Create EC2 client
	client := ec2.NewFromConfig(cfg)

	// Create VPC
	vpc, err := createVPC(context.TODO(), client)
	if err != nil {
		log.Fatalf("Failed to create VPC: %v", err)
	}

	fmt.Printf("VPC created successfully!\n")
	fmt.Printf("VPC ID: %s\n", *vpc.Vpc.VpcId)
	fmt.Printf("CIDR Block: %s\n", *vpc.Vpc.CidrBlock)
	fmt.Printf("State: %s\n", vpc.Vpc.State)
}

func createVPC(ctx context.Context, client *ec2.Client) (*ec2.CreateVpcOutput, error) {
	input := &ec2.CreateVpcInput{
		CidrBlock: "10.0.0.0/16",
		TagSpecifications: []types.TagSpecification{
			{
				ResourceType: types.ResourceTypeVpc,
				Tags: []types.Tag{
					{
						Key:   "Name",
						Value: "My-VPC",
					},
				},
			},
		},
	}

	return client.CreateVpc(ctx, input)
}