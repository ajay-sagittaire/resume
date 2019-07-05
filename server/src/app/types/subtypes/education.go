package subtypes
import (
	"github.com/graphql-go/graphql"
)

var Education = graphql.NewObject(graphql.ObjectConfig {
	Name: "Education",
	Fields: graphql.Fields{
		"institution": &graphql.Field{
			Type: graphql.String,
		},
		"area": &graphql.Field{
			Type: graphql.String,
		},
		"studytype": &graphql.Field{
			Type: graphql.String,
		},
		"startdate": &graphql.Field{
			Type: graphql.String,
		},
		"enddate": &graphql.Field{
			Type: graphql.String,
		},
		"gpa": &graphql.Field{
			Type: graphql.String,
		},
		"courses": &graphql.Field{
			Type: graphql.NewList(graphql.String),
		},
	},
})