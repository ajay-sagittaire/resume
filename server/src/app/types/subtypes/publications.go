package subtypes
import (
	"github.com/graphql-go/graphql"
)

var Publications = graphql.NewObject(graphql.ObjectConfig {
	Name: "Publications",
	Fields: graphql.Fields{
		"name": &graphql.Field{
			Type: graphql.String,
		},
		"publisher": &graphql.Field{
			Type: graphql.String,
		},
		"releasedate": &graphql.Field{
			Type: graphql.String,
		},
		"website": &graphql.Field{
			Type: graphql.String,
		},
		"summary": &graphql.Field{
			Type: graphql.String,
		},
	},
})