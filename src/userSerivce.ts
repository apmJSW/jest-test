import {hash} from './userUtil'

class Repository {
  db;
  constructor() { this.db=[];}
  save = (email, password) => {
    const user = {email, password};
    this.db.push(user);
    return user;
  }
  findByEmail = (email) => {
    return this.db.find(user => user.email === email);
  }
}

export const join = async (email, password, repository=new Repository()) => {
  if (typeof email !== 'string' || typeof password !== 'string') {
    throw Error('not string');
  }
  if (repository.findByEmail(email)) {
    throw Error('already registered');
  }

  return repository.save(email, await hash(password));
};
