import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';
const dbName = 'myproject';

class Database {
  client: MongoClient;
  async connect (){
    this.client = await MongoClient.connect(url);
    return await this.client.db(dbName);
  }
}
export default Database;