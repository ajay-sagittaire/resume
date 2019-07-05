package subtypes
import (
	"github.com/graphql-go/graphql"
	// subtypes "app/types/subtypes"
)

var Basics = graphql.NewObject(graphql.ObjectConfig {
	Name: "Basics",
	Fields: graphql.Fields{
		"name": &graphql.Field{
			Type: graphql.String,
		},
		"label": &graphql.Field{
			Type: graphql.String,
		},
		"picture": &graphql.Field{
			Type: graphql.String,
		},
		"email": &graphql.Field{
			Type: graphql.String,
		},
		"phone": &graphql.Field{
			Type: graphql.String,
		},
		"website": &graphql.Field{
			Type: graphql.String,
		},
		"summary": &graphql.Field{
			Type: graphql.String,
		},
		"location": &graphql.Field{
			Type: Location,
		},
		"profiles": &graphql.Field{
			Type: graphql.NewList(Profiles),
		},
	},
})