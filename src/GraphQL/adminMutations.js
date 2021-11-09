import { gql } from '@apollo/client';

const SIGN_IN_ADMIN= gql `
mutation SignINAdmin(
    $workerId: String!, 
    $password: String!) {

    signINAdmin(
      username: $workerId, 
      password: $password)
}`;
export{
    SIGN_IN_ADMIN,
}