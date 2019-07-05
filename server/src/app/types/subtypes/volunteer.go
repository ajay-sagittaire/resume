package subtypes
import (
	"github.com/graphql-go/graphql"
)

var Volunteer = graphql.NewObject(graphql.ObjectConfig {
	Name: "Volunteer",
	Fields: graphql.Fields{
		"organization": &graphql.Field{
			Type: graphql.String,
		},
		"position": &graphql.Field{
			Type: graphql.String,
		},
		"website": &graphql.Field{
			Type: graphql.String,
		},
		"startdate": &graphql.Field{
			Type: graphql.String,
		},
		"enddate": &graphql.Field{
			Type: graphql.String,
		},
		"summary": &graphql.Field{
			Type: graphql.String,
		},
		"highlights": &graphql.Field{
			Type: graphql.NewList(graphql.String),
		},
	},
})