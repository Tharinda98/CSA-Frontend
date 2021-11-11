import {useQuery,gql} from '@apollo/client';

const GET_SP_REQUESTS= gql `
query Admin_getOpenSP {
  admin_getOpenSP {
    username
    name
    address
    contact_no
    email
    bank_acc_no
    owner {
      owner_name
      owner_NIC
    }
    joined_at
    _id
    membership {
      membership_name
    }
  }
}
`;

const GET_SP_DETAILS = gql `
query Query {
  showServiceProviders {
    username
    name
    address
    contact_no
    email
    state
    owner {
      owner_name
      owner_NIC
      contact_no
    }
  }
}`;

export {GET_SP_REQUESTS,GET_SP_DETAILS};