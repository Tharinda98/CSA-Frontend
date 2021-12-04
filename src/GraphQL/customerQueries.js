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
    membership {
      membership_name
    }
  }
}`;

const CUSTOMER_ME= gql `
query Query {
  Customer_me {
    _id
    username
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
        _id
        name
      }
      description
    }
    starting_date
    duration
    state
    finish_date
    _id
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

const GET_CUSTOMER_MESSAGES= gql `
query Query($offset: Int!, $page: Int!) {
  getMyMessages(offset: $offset, page: $page) {
    _id
    by
    to
    message
    read
    received_date
  }
  getCountMessages {
    _id
    Count
  }
}`;

const GET_CUSTOMER_NOTIFICATION = gql `
query Customer_getMyNotification {
  customer_getMyNotification {
    message
    date
    state
    _id
  }
  getCountNotification {
    _id
    Count
  }
}`;

const CHECK_USERNAME = gql`
query Query($username: String!) {
  CheckUsername(username: $username)
}
`;

export {IS_LOGGED_IN,
  GET_FILTERED_SP_LIST,
  CUSTOMER_ME, GET_DISTRICTS, 
  GET_SERVICES,
  GET_UNIQUE_SP,
  WORK_PROGRESS,
  FINISHED_WORKS, 
  GET_SP_REVIEW,
  CHECK_USERNAME,
GET_CUSTOMER_MESSAGES,
GET_CUSTOMER_NOTIFICATION};