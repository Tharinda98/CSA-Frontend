import {useQuery,gql} from '@apollo/client';

//not used
const GET_PROVINCES =gql `
query Query {
  showProvinces {
    _id
    provinceName
  }
}
`;
//not used
const GET_SERVICES =gql`
query Query {
  getServices {
    service_name
  }
}
`;
//this one is used to get services provinces and also SP list without filtering
const GET_PROVINCES_SERVICES_SPS =gql `
query Query {
  getServices {
    service_name
  }
  showProvinces {
    provinceName
  }
  showServiceProviders {
    name
    contact_no
    rating
    membership {
      membership_name
    }
    address
  }
}`;

export {GET_PROVINCES, GET_SERVICES,GET_PROVINCES_SERVICES_SPS};