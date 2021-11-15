import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("Component Added!")
let logger = new MongoLogger()
let userService = new UserService(logger)

let user1 = new User(1, "Mehmet Çağatay", "ALSANCAK", "Kırıkkale")
let user2 = new User(2, "Timuçin", "ALSANCAK", "Kırıkkale")

userService.add(user1)
userService.add(user2)

userService.getById(1)
console.log(userService.list())

let customer = {
    id: 1,
    firstName: "Mehmet Çağatay"
}

console.log(customer)
// Prototyping 
customer.lastName = "ALSANCAK"

console.log(customer)

