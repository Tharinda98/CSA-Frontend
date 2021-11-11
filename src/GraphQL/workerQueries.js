import {gql} from '@apollo/client';



const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`;



const GET_ME = gql`
query Query {
  worker_me {
    _id
    username
    name
  }
}
`

const WORKER_CARD = gql`
  query Query {
    worker_me {
      _id
      username
      name
      email
      contact_no
      left_date
    }
  }
`






const GET_WORKER_ME = gql`
query Query($offset: Int!, $page: Int!) {
  worker_getMyNotification(offset: $offset, page: $page) {
    message
    date
    state
  }
  worker_me {
    _id
    username
    name
    email
    contact_no
    nic
    address
    rating
    profile
    no_of_vote
    left_date
  }

}
`

const GET_WORKER_ONGOINGWORK = gql`
query Query($offset: Int!, $page: Int!) {
  worker_getMyOngoingWorks(offset: $offset, page: $page) {
    _id
    appointment_id
    duration
    starting_date
    booking {
      workStationAddress
      description
    }
  }
}
`

const GET_WORKER_SEARCH_ONGOINGWORK = gql`
query Query(
    $workId: String!) {
    worker_SearchMyOngoingWorks(id: $workId) {
      _id
      booking {
        description
      }
      appointment_id
      starting_date
      duration
    }
  }
`

const GET_WORKER_FINISHEDWORK = gql`
query Query($offset: Int!, $page: Int!) {
  worker_getMyFinishedWorks(offset: $offset, page: $page) {
    _id
    paid
    appointment_id
    booking {
      workStationAddress
      description
    }
    starting_date
  }
  getCountAssignedAppointments {
    _id
    Count
  }
}
`

const GET_WORKER_NOTIFICATION = gql`
query Query($offset: Int!, $page: Int!) {
  worker_getMyNotification(offset: $offset, page: $page) {
    
    message
    date
    state
    _id
  }
  getCountNotification {
    _id
    Count
  }
}
`

const WORK_PROFILE = gql`
query Query($id: ID!) {
  UniqueSearchAppointment(appointment: $id) {
    _id
    booking {
      by {
        username
        name
        contact_no
        email
        no_of_vote
        rating
      }
      state
      workStationDistrict
      workStationAddress
      description
      date
    }
    appointment_id
    starting_date
    state
    paid
    cost
  }
}
`

const HOME_PAGE = gql`
query Query($offset: Int!, $page: Int!) {
  worker_getMyNotification(offset: $offset, page: $page) {
    message
    date
    state
    _id
  }
  worker_me {
    rating
    _id
  }
  worker_workStats {
    _id
    Count
  }
  getMyMessages(offset: $offset, page: $page) {
    _id
    to
    message
    read
    received_date
  }
  getMyRole

  
}

`

const PROFILE = gql`
query Query($offset: Int!, $page: Int!) {
  worker_me {
    rating
    _id
    username
    name
    email
    contact_no
    nic
    address
    profile
    no_of_vote
    left_date
  }
  worker_getMyNotification(offset: $offset, page: $page) {
    _id
    message
    date
    state
  }
}

`






















const GET_WORKER_MESSAGES = gql`
query Query(
  $offset: Int!, 
  $page: Int!) {

  getMyMessages(
    offset: $offset, 
    page: $page) {

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
}
`







const GET_ONGOINGWORK = gql`
  query Query(
    $offSet: Int!, 
    $page: Int!) {
      
    getMyOngoingWorks(
      offset: $offSet, 
      page: $page) {
      _id
      appointment_id
      starting_date
      state
      duration
      paid
    }
  }
`



const GET_WORKER_SEARCH_FININISHEDWORK = gql`
query Query(
  $workId: String!) {

    worker_SearchMyFinishedWorks(id: $workId) {
      _id
      appointment_id
      starting_date
      booking {
        description
      }
      paid
    }
  }
`























export {
    
    IS_LOGGED_IN,

    GET_WORKER_ME,
    GET_WORKER_NOTIFICATION,
    GET_WORKER_ONGOINGWORK,
    GET_WORKER_FINISHEDWORK,
    GET_WORKER_MESSAGES,
    HOME_PAGE,
 
    GET_WORKER_SEARCH_FININISHEDWORK,
    GET_WORKER_SEARCH_ONGOINGWORK,
  
    WORK_PROFILE,

    GET_ME,
    PROFILE,
    WORKER_CARD

}