package types
import (
	"github.com/graphql-go/graphql"
	subtypes "app/types/subtypes"
)

var CV = graphql.NewObject(graphql.ObjectConfig {
	Name: "CV",
	Fields: graphql.Fields{
		"userid": &graphql.Field{
            Type: graphql.NewNonNull(graphql.String),
		},
		"lang": &graphql.Field{
            Type: graphql.NewNonNull(graphql.String),
        },
		"basics": &graphql.Field{
			Type: subtypes.Basics,
		},
		"work": &graphql.Field{
			Type: graphql.NewList(subtypes.Work),
		},
		"volunteer": &graphql.Field{
			Type: graphql.NewList(subtypes.Volunteer),
		},
		"education": &graphql.Field{
			Type: graphql.NewList(subtypes.Education),
		},
		"awards": &graphql.Field{
			Type: graphql.NewList(subtypes.Awards),
		},
		"publications": &graphql.Field{
			Type: graphql.NewList(subtypes.Publications),
		},
		"skills": &graphql.Field{
			Type: graphql.NewList(subtypes.Skills),
		},
		"languages": &graphql.Field{
			Type: graphql.NewList(subtypes.Languages),
		},
		"interests": &graphql.Field{
			Type: graphql.NewList(subtypes.Interests),
		},
		"references": &graphql.Field{
			Type: graphql.NewList(subtypes.References),
		},
	},
})