package subtypes
import (
	"github.com/graphql-go/graphql"
)

var Languages = graphql.NewObject(graphql.ObjectConfig {
	Name: "Languages",
	Fields: graphql.Fields{
		"language": &graphql.Field{
			Type: graphql.String,
		},
		"fluency": &graphql.Field{
			Type: graphql.String,
		},
	},
})