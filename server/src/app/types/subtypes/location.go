package subtypes
import (
	"github.com/graphql-go/graphql"
)
var Location = graphql.NewObject(graphql.ObjectConfig {
	Name: "Location",
	Fields: graphql.Fields{
		"address": &graphql.Field{
			Type: graphql.String,
		},
		"postalcode": &graphql.Field{
			Type: graphql.String,
		},
		"city": &graphql.Field{
			Type: graphql.String,
		},
		"countrycode": &graphql.Field{
			Type: graphql.String,
		},
		"region": &graphql.Field{
			Type: graphql.String,
		},
	},
})