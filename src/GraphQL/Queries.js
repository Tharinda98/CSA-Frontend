import {useQuery,gql} from '@apollo/client';
const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`;

//newest one to get sp list filered by district and service
const GET_FILTERED_SP_LIST= gql`
query Query($district: String!, $service: String!) {
  getServiceProviderByDistrictService(district: $district, service: $service) {
    name
    rating
    address
  }
}`

const ME= gql `
query Query {
  Customer_me {
    name
  }
}
`

export {IS_LOGGED_IN,GET_FILTERED_SP_LIST,ME};