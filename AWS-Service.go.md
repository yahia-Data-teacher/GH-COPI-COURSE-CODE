package main

import (
	"fmt"
	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/aws/session"
	"github.com/aws/aws-sdk-go-v2/service/ec2"
)

func main() {
	sess, err := session.NewSeesion(&aws.Config{
        Region: aws.String("us-west-2),
    })
    if err != nil {
        fmt.Printin("")
    }
}