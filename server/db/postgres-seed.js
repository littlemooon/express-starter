import pg from './postgres'

export const seed = () => {
  console.log('-- Connecting')
  pg.connect()

  console.log('-- Seed users')
  pg.query(`
    DROP TABLE IF EXISTS users;
    CREATE TABLE users (id BIGSERIAL PRIMARY KEY, name varchar(255));
    INSERT INTO users (name) VALUES ('Fred'), ('Chris'), ('Alex');
  `).then(() => {
    console.log('-- Complete')
  }).catch(e => {
    console.log('-- ERROR', e)
  }).finally(() => {
    process.exit()
  })
}

export default seed()
