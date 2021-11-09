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
    _id
    name
    rating
    address
  }
}`;

const CUSTOMER_ME= gql `
query Query {
  Customer_me {
    _id
    name
    contact_no
    email
  }
}
`;
const GET_DISTRICTS=gql `
query Query {
  showDistricts {
    districtName
  }
}`;

const GET_SERVICES=gql `
query Query {
  getServices {
    service_name
  }
}`;

const GET_UNIQUE_SP = gql `
query Query($provider: ID!) {
  UniqueSearchSP(provider: $provider) {
    name
    address
    contact_no
    email
    rating
    no_of_vote
    owner {
      owner_name
    }
    membership {
      membership_name
    }
    workingRange
  }
}`;

const WORK_PROGRESS=gql `
query Query {
  customer_getMyOngoingWorks {
    booking {
      to {
        name
      }
      workStationAddress
      workStationDistrict
      description
      date
    }
    cost
    worker {
      name
      contact_no
    }
    starting_date
    duration
    state
  }
}`;

const FINISHED_WORKS=gql `
query Query {
  customer_getMyFinishedWorks {
    paid
    booking {
      to {
        name
      }
      description
    }
    starting_date
    duration
    state
    finish_date
    appointment_id
    cost
  }
}`;

const GET_SP_REVIEW = gql `
query Query($provider: ID!) {
  getReviewsOfServiceProviders(provider: $provider) {
    by {
      name
    }
    createdAt
    content
  }
}`;

export {IS_LOGGED_IN,GET_FILTERED_SP_LIST,CUSTOMER_ME, GET_DISTRICTS, GET_SERVICES,GET_UNIQUE_SP,WORK_PROGRESS,FINISHED_WORKS, GET_SP_REVIEW};