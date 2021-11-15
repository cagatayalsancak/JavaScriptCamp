export class BaseLogger{
    log(data){
        console.log("Default Logger : " + data)
    }
}

export class ElasticLogger extends BaseLogger{
    log(data){
        console.log(data + " logged to Elastic!")
    }
}

export class FirebaseLogger extends BaseLogger{
    log(data){
        console.log(data + " logged to Firebase!")
    }
}

export class MongoLogger extends BaseLogger{
    log(data){
        console.log(data + " logged to Mongo!")
    }
    
}
