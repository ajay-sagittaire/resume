package subtypes
import (
	"github.com/graphql-go/graphql"
)

var Work = graphql.NewObject(graphql.ObjectConfig {
	Name: "Work",
	Fields: graphql.Fields{
		"company": &graphql.Field{
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