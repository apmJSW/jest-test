import { describe, beforeEach, afterEach, expect, test } from '@jest/globals';
import { join } from '../userSerivce';
import { isCorrectPassowrd } from '../userUtil';

describe( 'main', () => {
  describe( 'join', () => {
    let repository;
  
    beforeEach( () => {
      repository = new ( class Repository {
        users;
        constructor() { this.users=[];}
        save = ( email, password ) => {
          const user = { email, password };
          this.users.push( user );
          return user;
        }
        findByEmail = ( email ) => {
          return this.users.find( user => user.email === email );
        }
      })();
    });
    afterEach( () => {
      repository = null;
    });

    test( '', async () => {
      const email = 'abc@test.com';
      const password = '1234';
      const joined = await join( email, password, repository );
  
      const isCorrect = await isCorrectPassowrd( password, joined.password );
  
      expect( isCorrect ).toBe( true );
      expect.assertions( 2 );
      await expect( join( email, 1234, repository ) ).rejects.toEqual( Error( 'not string' ) );
    });
  });
});
