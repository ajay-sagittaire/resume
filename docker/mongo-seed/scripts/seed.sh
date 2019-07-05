#!/bin/bash

echo $MONGO_INITDB_ROOT_USERNAME
echo $MONGO_INITDB_ROOT_PASSWORD

echo "Seeding..."
SEEDER_FILES=`ls -1 *.json`
for FILE in ${SEEDER_FILES}
do
    COLLECTION="${FILE%%.*}"
    echo "Creating ${COLLECTION}..."
    mongoimport --db ${MONGO_INITDB_DATABASE} --username ${MONGO_INITDB_ROOT_USERNAME} \
        --password ${MONGO_INITDB_ROOT_PASSWORD} --collection ${COLLECTION^} --type json --file ${FILE} --jsonArray
done




# mongoimport --host mongo --db ${MONGO_INITDB_DATABASE} --username ${MONGO_INITDB_ROOT_USERNAME} \
#     --password ${MONGO_INITDB_ROOT_PASSWORD} --collection Diplomas --type json --file /diploma.json --jsonArray

# mongoimport --host mongo --db ${MONGO_INITDB_DATABASE} --username ${MONGO_INITDB_ROOT_USERNAME} \
#     --password ${MONGO_INITDB_ROOT_PASSWORD} --collection Experiences --type json --file /experience.json --jsonArray

# mongoimport --host mongo --db ${MONGO_INITDB_DATABASE} --username ${MONGO_INITDB_ROOT_USERNAME} \
#     --password ${MONGO_INITDB_ROOT_PASSWORD} --collection Skills --type json --file /skill.json --jsonArray

# mongoimport --host mongo --db ${MONGO_INITDB_DATABASE} --username ${MONGO_INITDB_ROOT_USERNAME} \
#     --password ${MONGO_INITDB_ROOT_PASSWORD}--collection Trainings --type json --file /training.json --jsonArray

# mongoimport --host mongo --db ${MONGO_INITDB_DATABASE} --username ${MONGO_INITDB_ROOT_USERNAME} \
#     --password ${MONGO_INITDB_ROOT_PASSWORD}--collection Hobbies --type json --file /hobby.json --jsonArray

echo "End of seeding."
