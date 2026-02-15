package main

import (
	"fmt"
	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/aws/session"
	"github.com/aws/aws-sdk-go-v2/service/ec2"
)

func main() {
	sess, err := session.NewSession(&aws.Config{
        Region: aws.String("us-west-2"),
    })
    if err != nil {
        fmt.Println("Error creating session:", err)
        return
    }

	svc := ec2.New(sess)

	vpcParams := &ec2.CreateVpcInput{
		CidrBlock: aws.String("10.0.0.0/16"),
	}
	
	result, err := svc.CreateVpc(vpcParams)
	if err != nil {
		fmt.Println("Error creating VPC:", err)
		return
	}
	
	fmt.Println("Created VPC with ID:", *result.Vpc.VpcId)
}