import { gql } from '@apollo/client';

const SIGN_IN_ADMIN= gql `
mutation SignINAdmin(
    $workerId: String!, 
    $password: String!) {

    signINAdmin(
      username: $workerId, 
      password: $password)
}`;

const APPROVE_SP= gql `
mutation Mutation(
    $username: String!) {

  approveServiceProvider(
    username: $username)
}`;

const BLOCK_SP= gql `
mutation BlockServiceProvider(
    $username: String!) {

  blockServiceProvider(
      username: $username)
}`;


export{
    SIGN_IN_ADMIN,
    APPROVE_SP,
    BLOCK_SP,
}