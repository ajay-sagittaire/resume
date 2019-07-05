package mongo
import (
  "context"
  "fmt"
  "os"
  "time"
  "go.mongodb.org/mongo-driver/mongo"
  "go.mongodb.org/mongo-driver/mongo/options"
)
var ctx, _ = context.WithTimeout(context.Background(), 10*time.Second)
var uri = fmt.Sprintf(`mongodb://%s:%s@%s/%s`,
  os.Getenv("MONGO_GO_USER"),
  os.Getenv("MONGO_GO_PASSWORD"),
  os.Getenv("MONGO_GO_HOST"),
  os.Getenv("MONGO_GO_DB"),
)
var Client, err = mongo.Connect(ctx, options.Client().ApplyURI(uri))