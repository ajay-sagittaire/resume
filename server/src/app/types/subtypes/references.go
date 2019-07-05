package subtypes
import (
	"github.com/graphql-go/graphql"
)

var References = graphql.NewObject(graphql.ObjectConfig {
	Name: "References",
	Fields: graphql.Fields{
		"name": &graphql.Field{
			Type: graphql.String,
		},
		"reference": &graphql.Field{
			Type: graphql.String,
		},
	},
})