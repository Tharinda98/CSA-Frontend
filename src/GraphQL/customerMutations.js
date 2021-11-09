import { gql } from '@apollo/client';

const SIGN_IN_CUSTOMER =gql `
mutation SignINCustomer(
    $workerId: String!, 
    $password: String!) {

    signINCustomer(
      username: $workerId, 
      password: $password
    )
}`;

const BOOKING = gql `
mutation BookingMutation($to: ID!, $workStationAddress: String!, $workStationDistrict: String!, $description: String!) {
  booking(to: $to, workStationAddress: $workStationAddress, workStationDistrict: $workStationDistrict, description: $description)
}`;


export{
    SIGN_IN_CUSTOMER,
    BOOKING,
}