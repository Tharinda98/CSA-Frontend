import {useQuery,gql} from '@apollo/client';

const SIGNIN_CUSTOMER = gql`
mutation SignINCustomerMutation($username: String!, $password: String!) {
  signINCustomer(username: $username, password: $password)
}
`;

const BOOKING = gql `
mutation BookingMutation($to: ID!, $workStationAddress: String!, $workStationDistrict: String!, $description: String!) {
  booking(to: $to, workStationAddress: $workStationAddress, workStationDistrict: $workStationDistrict, description: $description)
}`
export {SIGNIN_CUSTOMER, BOOKING};