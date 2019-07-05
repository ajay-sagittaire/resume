package subtypes
import (
	"github.com/graphql-go/graphql"
)
var Profiles = graphql.NewObject(graphql.ObjectConfig {
	Name: "Profiles",
	Fields: graphql.Fields{
		"network": &graphql.Field{
			Type: graphql.String,
		},
		"url": &graphql.Field{
			Type: graphql.String,
		},
	},
})