import Database from './database';
const db = new Database();

export const getConnectionDB = async () => {
  const connection = await db.connect();
  console.log(connection);
};

