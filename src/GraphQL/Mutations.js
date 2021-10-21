import {useQuery,gql} from '@apollo/client';

const SIGNIN_CUSTOMER = gql`
mutation SignINCustomerMutation($username: String!, $password: String!) {
  signINCustomer(username: $username, password: $password)
}
`;
export {SIGNIN_CUSTOMER};