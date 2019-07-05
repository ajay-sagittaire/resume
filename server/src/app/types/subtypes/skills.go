package subtypes
import (
	"github.com/graphql-go/graphql"
)

var Skills = graphql.NewObject(graphql.ObjectConfig {
	Name: "Skills",
	Fields: graphql.Fields{
		"name": &graphql.Field{
			Type: graphql.String,
		},
		"level": &graphql.Field{
			Type: graphql.String,
		},
		"keywords": &graphql.Field{
			Type: graphql.NewList(graphql.String),
		},
	},
})