package subtypes
import (
	"github.com/graphql-go/graphql"
)

var Awards = graphql.NewObject(graphql.ObjectConfig {
	Name: "Awards",
	Fields: graphql.Fields{
		"title": &graphql.Field{
			Type: graphql.String,
		},
		"date": &graphql.Field{
			Type: graphql.String,
		},
		"awarder": &graphql.Field{
			Type: graphql.String,
		},
		"summary": &graphql.Field{
			Type: graphql.String,
		},
	},
})