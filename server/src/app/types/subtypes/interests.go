package subtypes
import (
	"github.com/graphql-go/graphql"
)

var Interests = graphql.NewObject(graphql.ObjectConfig {
	Name: "Interests",
	Fields: graphql.Fields{
		"name": &graphql.Field{
			Type: graphql.String,
		},
		"keywords": &graphql.Field{
			Type: graphql.NewList(graphql.String),
		},
	},
})