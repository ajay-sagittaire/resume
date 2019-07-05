package queries
import (
	"context"
	"github.com/graphql-go/graphql"
	"github.com/mongodb/mongo-go-driver/bson"
	"log"
	"app/data"
	structQueries "app/queries/struct"
	types "app/types"
)
type CVStruct struct {
	USERID   string `json:"userid"`
	LANG string `json:"lang"`
	BASICS   structQueries.Basics `json:"basics"`
	WORK   []structQueries.Work `json:"work"`
	VOLUNTEER   []structQueries.Volunteer `json:"volunteer"`
	EDUCATION   []structQueries.Education `json:"education"`
	AWARDS   []structQueries.Awards `json:"awards"`
	PUBLICATIONS   []structQueries.Publications `json:"publications"`
	SKILLS   []structQueries.Skills `json:"skills"`
	LANGUAGES []structQueries.Languages `json:"languages"`
	INTERESTS []structQueries.Interests `json:"interests"`
	REFERENCES []structQueries.References `json:"references"`
}
var GetCV = &graphql.Field {
	Type:        types.CV,
	Description: "Get a CV",
	Args: graphql.FieldConfigArgument{
		"userid": &graphql.ArgumentConfig{
			Type: graphql.String,
		},
		"lang": &graphql.ArgumentConfig{
			Type: graphql.String,
			DefaultValue: "uk",
		},
	},
	Resolve: func(params graphql.ResolveParams) (interface{}, error) {
		userId, _ := params.Args["userid"].(string)
		log.Println(userId)
		lang, _ := params.Args["lang"].(string)
		log.Println(lang)
		filter := bson.M{"userid": userId, "lang": lang}
		cvCollection := mongo.Client.Database("cv").Collection("Cv")
		var cv CVStruct
		err := cvCollection.FindOne(context.Background(), filter).Decode(&cv)
		log.Println(cv)
		if err != nil {
			panic(err) 
		}
		return cv, nil
	},
}