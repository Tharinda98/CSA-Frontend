import {gql} from '@apollo/client';



const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`;

const CHECK_USER = gql`
query Query($username: String!) {
  CheckUsername(username: $username)
}
`




const GET_WORKERS=gql`
  query Query(
    $offset: Int!, 
    $page: Int!) {

    getMyWorkers(
      offset: $offset, 
      page: $page) {

      _id
      username
      name
      email
      contact_no
      left_date
    }

    getCountWorkers {
      Count
    }
  }
`

const GET_WORKER=gql`
query Query($workerId: ID!) {
  UniqueSearchWorker(worker: $workerId) {
    nic
    _id
    username
    name
    email
    contact_no
    left_date
  }
}
`

const GET_SEARCH_WORKER = gql`
query Query($workerId: String!) {
  getWorker(username: $workerId) {
    _id
    username
    name
    email
    contact_no
    left_date
  }
}
`

const GET_WORKER_PROFILE = gql`
query Query($worker: ID!, $offset: Int!, $page: Int!) {
  UniqueSearchWorker(worker: $worker) {
    _id
    username
    name
    contact_no
    email
    nic
    address
    rating
    profile
    no_of_vote
    left_date
  }
  getWorkerNotification(worker: $worker, offset: $offset, page: $page) {
    _id
    message
    date
    state
  }
}
`

const GET_WORKER_NOTIFICATION = gql`
  query Query($worker: ID!, $offset: Int!, $page: Int!) {
    getWorkerNotification(worker: $worker, offset: $offset, page: $page) {
      message
      date
      state
      _id
    }
  }
`



const GET_ASSIGNWORKER = gql`
  query Query($id: ID!) {
    UniqueSearchAppointment(appointment: $id) {
      _id
      state
      worker {
        _id
        username
        name
        contact_no
        rating
      }
    }
  }
`

const GET_MODERATORS = gql`
  query Query(
    $offSet: Int!,
     $page: Int!) {

    getMyModerators(
      offset: $offSet,
       page: $page) {

      _id
      username
      name
      email
      contact_no
      left_date
    }

    getCountModerators {
      Count
    }
  }
`

const GET_MODERATOR = gql`
query Query($workerId: ID!) {
  UniqueSearchModerator(moderator: $workerId) {
    nic
    _id
    username
    name
    email
    contact_no
    left_date
  }
}
`

const GET_SEARCH_MODERATOR = gql`
query Query($workerId: String!) {
  getModerator(username: $workerId) {
    _id
    username
    name
    email
    contact_no
    left_date
  }
}
`

const GET_MODERATOR_PROFILE = gql`
query Query($moderator: ID!, $offset: Int!, $page: Int!) {
  UniqueSearchModerator(moderator: $moderator) {
    _id
    username
    name
    email
    nic
    contact_no
    address
    rating
    profile
    no_of_vote
    left_date
  }
  getMyNotification(offset: $offset, page: $page) {
    _id
    message
    date
    state
  }
}
`

const SP_DASHBOARD = gql`
query Query($offset: Int!, $page: Int!) {
  getMyMessages(offset: $offset, page: $page) {
    _id
    by
    message
    read
    received_date
  }
  workStats {
    _id
    Count
  }
  getMyNotification(offset: $offset, page: $page) {
    _id
    message
    date
    state
  }
  bookingFeed {
    _id
    Count
  }
  ratingStats {
    Count
    _id
  }
  finishedWorkStats {
    _id
    Count
  }
  getMyRole
}
`

const GET_FINISHEDWORK = gql`
query Query($workId: String!) {
  searchFinishAppointment(id: $workId) {
        _id
        starting_date
        appointment_id
        state
        booking {
          description
          by {
            username
          }
        }
        duration
  }
}
`
const GET_FINISHEDWORKS = gql`
  query Query(
    $offset: Int!, 
    $page: Int!) {

    getMyFinishedWorks(
      offset: $offset, 
      page: $page) {
        _id
        starting_date
        appointment_id
        state
        booking {
          description
          by {
            username
          }
        }
        duration
    }
    getCountAppointments {
      Count
      _id
    }
  }
` 

const GET_ONGOINGWORKS= gql`
query Query($offset: Int!, $page: Int!) {
  getMyOngoingWorks(offset: $offset, page: $page) {
    _id
    starting_date
    appointment_id
    booking {
      description
      by {
        username
      }
    }
    duration
  }
  getCountAppointments {
    Count
    _id
  }
}
`

const GET_ONGOINGWORK = gql`
query Query($workId: String!) {
  searchOpenAppointment(id: $workId) {
    _id
    duration
    starting_date
    appointment_id
    booking {
      workStationAddress
      description
      by {
        username
      }
    }
  }
}
`

const GET_NEWBOOKINGS = gql`
query Query($offset: Int!, $page: Int!) {
  getMyBooking(offset: $offset, page: $page) {
    by {
      username
    }
    date
    description
    workStationDistrict
    _id
  }
  getCountBooking {
    Count
    _id
  }
}
`

const GET_SEARCH_BOOKING = gql`
query Query($id: String!) {
  searchBooking(username: $id) {
    _id
    workStationAddress
    state
    workStationDistrict
    description
    date
    by {
      username
    }
  }
}
`

const WORK_PROFILE = gql`
query Query($id: ID!) {
  UniqueSearchAppointment(appointment: $id) {
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

const CHECK_WORK = gql`
  query Query(
    $appointmentId: String!) {

    CheckAppointmentID(
      appointment_id: $appointmentId)
  }
`

const GET_SPPROFILE = gql`
query Query($offset: Int!, $page: Int!){
  getMySP {
    username
    name
    address
    contact_no
    email
    no_of_vote
    rating
    service
    bank_acc_no
    owner {
      owner_name
      owner_NIC
      contact_no
      profile
    }
    membership {
      membership_name
      membership_period
      membership_value
      description
    }
    workingRange
    joined_at
    state
    profile
  }
  ratingStats {
    Count
    _id
  }
  getMyNotification(offset: $offset, page: $page) {
    _id
    message
    date
    state
  }
}
`

const GET_SPSERVICE = gql`
  query Query {
    getMySP {
      service
      workingRange
    }
    getServices {
      _id
      service_name
    }
    showDistricts {
      _id
      districtName
    }
  }
`

const GET_SPNOTIFICATION = gql`
query Query($offset: Int!, $page: Int!) {
  getMyNotification(offset: $offset, page: $page) {
      _id
      message
      date
      state
    }
    getCountNotification {
      Count
    }
  }
`

const GET_MESSAGES = gql`
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
  Count
  }
}

`

const GET_REVIEW = gql`
  query Query($offset: Int!, $page: Int!) {
    getMyReviews(offset: $offset, page: $page) {
      _id
      content
      rating
      by {
        username
      }
      createdAt
    }
    getCountReviews {
      Count
      _id
    }
  }
`

const GET_SEARCH_REVIEW = gql`
  query Query($customerId: String!) {
    getCustomerReview(username: $customerId) {
      _id
      by {
        username
      }
      createdAt
      content
      rating
    }
  }
`

const GET_SIGNUP = gql`
  query Query {
    showDistricts {
      _id
      districtName
    }
    getServices {
      _id
      service_name
    }  
    getMemberships {
      _id
      membership_name
      membership_period
      membership_value
      description
    }
  }
`


const GET_ROLE = gql`
  query Query {
    getMyRole
  }
`

const GET_SPME = gql`
  query Query {
    SP_me {
      username
      name
    }
  }
`

const GET_ME = gql`
query GetMe {
  getMe {
    _id
    username
    role
  }
}
`




const PROVIDER_CARD = gql`
query GetMySP {
  getMySP {
    _id
    username
    address
    name
    contact_no
    email
  }
}
`





// const GET_WORKIMAGE = gql``

export {
    
    IS_LOGGED_IN,

    GET_SIGNUP,
    CHECK_USER,

    GET_MODERATOR,
    GET_MODERATORS,
    GET_SEARCH_MODERATOR,
    GET_MODERATOR_PROFILE,

    GET_WORKERS,
    GET_WORKER,
    GET_SEARCH_WORKER,
    GET_WORKER_PROFILE,
    GET_WORKER_NOTIFICATION,
    GET_ASSIGNWORKER,
    
    SP_DASHBOARD,

    CHECK_WORK,

    GET_FINISHEDWORK,
    GET_FINISHEDWORKS,

    GET_ONGOINGWORK,
    GET_ONGOINGWORKS,

    GET_NEWBOOKINGS,
    GET_SEARCH_BOOKING,

    WORK_PROFILE,

    GET_SPPROFILE,
    GET_SPNOTIFICATION,
    GET_SPSERVICE,

    GET_REVIEW,
    GET_SEARCH_REVIEW,

    PROVIDER_CARD,


    GET_ROLE,

    GET_SPME,
     
  
    GET_ME,

    GET_MESSAGES,


   
    // GET_WORKIMAGE
}