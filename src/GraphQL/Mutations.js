import { gql } from '@apollo/client';



const SIGNUP_SP = gql`
  mutation Mutation(
    $username: String!, 
    $password: String!, 
    $name: String!, 
    $address: String!, 
    $contactNo: [String!]!, 
    $email: String!, 
    $bankAccNo: String!, 
    $owner: ID!, 
    $service: [String!]!, 
    $membership: ID!, 
    $workingRange: [String]!) {

    signUPSP(
      username: $username, 
      password: $password, 
      name: $name, 
      address: $address, 
      contact_no: $contactNo, 
      email: $email, 
      bank_acc_no: $bankAccNo, 
      owner: $owner, 
      service: $service, 
      membership: $membership, 
      workingRange: $workingRange) {
      _id
    }
  }
`

const SIGNIN_MOD_SP = gql`
  mutation Mutation(
    $workerId: String!, 
    $password: String!) {

    signINModSP(
      username: $workerId, 
      password: $password)
  }
`

const ADD_OWNER = gql`
mutation Mutation(
  $ownerName: String!, 
  $ownerNic: String!, 
  $contactNo: String!) {

  addOwner(
    owner_name: $ownerName, 
    owner_NIC: $ownerNic, 
    contact_no: $contactNo) {
    _id
  }
}
`


const SIGN_INSP = gql`
  mutation SignINSPMutation(
    $workerId: String!, 
    $password: String!) {

    signINSP(
      username: $workerId, 
      password: $password
      )
  }
`

const SIGNIN_MODERATOR= gql`
  mutation Mutation(
    $workerId: String!, 
    $password: String!) {
    signINModerator(
      username: $workerId, 
      password: $password)
  }
`

const ADD_MODERATOR = gql`
  mutation SignINSPMutation(
    $id: String!, 
    $password: String!, 
    $name: String!, 
    $nic: String!, 
    $email: String!, 
    $phone: String!, 
    $address: String!
    ) {
    addModerator(
      username: $id, 
      password: $password, 
      name: $name, 
      nic: $nic, 
      email: $email, 
      contact_no: $phone, 
      address: $address) {
      _id
    }
  }

`

const ADD_WORKER = gql`
  mutation Mutation(
    $id: String!, 
    $password: String!, 
    $name: String!, 
    $nic: String!, 
    $email: String!, 
    $phone: String!, 
    $address: String!
    ) {
    addWorker(
      username: $id, 
      password: $password, 
      name: $name, 
      nic: $nic, 
      email: $email, 
      contact_no: $phone, 
      address: $address) {
        _id 
    }
  }
`

const REJECT_BOOKING = gql`
  mutation CancelBookingMutation($ID: ID!) {
    cancelBooking(id: $ID)
  }
`

const UPDATE_READ = gql`
  mutation ReadMessageMutation(
    $readMessageId: ID) {
    readMessage(id: $readMessageId)
  }
`

const SEND_MESSAGE = gql`
  mutation SendMessageMutation(
    $to: String!,
    $message: String!) {

    sendMessage(
      to: $to, 
      message: $message) {
      _id
    }
  }
` 


const REMOVE_WORKER  = gql`
  mutation Mutation($workerId: ID!) {
    removeWorker(worker: $workerId)
  }
`

const REMOVE_MODERATOR = gql`
  mutation Mutation($workerId: ID!) {
    removeModerator(moderator: $workerId)
  }
`

const ADD_WORK = gql`
  mutation AppointmentMutation(
    $bookingID: ID!, 
    $workId: String!, 
    $date: Date!, 
    $estimation: String!, 
    $estimation_cost:Float!,
    $workers: [ID]) {

    appointment(
      booking: $bookingID, 
      appointment_id: $workId, 
      starting_date: $date, 
      duration: $estimation, 
      worker: $workers
      cost:$estimation_cost) {
      _id
      appointment_id
    }
    confirmBooking(id: $bookingID)
  }
`






const ADD_SERVICE = gql`
  mutation Mutation($service: String!) {
    pushService(service: $service)
  }
`

const REMOVE_SERVICE = gql`
mutation RemoveServiceMutation($service: String!) {
  RemoveService(service: $service)
}
`

const ADD_DISTRICT = gql`
  mutation Mutation($district: String!) {
    pushDistrict(district: $district)
  }
`
const REMOVE_DISTRICT = gql`
  mutation RemoveServiceMutation($district: String!) {
    RemoveDistrict(district: $district)
  }
`



const EDIT_INFO = gql`
  mutation Mutation(
    $email: String, 
    $contactNo: String, 
    $address: String) {

    editInfo(
      email: $email, 
      contact_no: $contactNo, 
      address: $address)
  }
`

const ASSIGN_WORKER = gql`
mutation Mutation(
  $appointment: ID!,
   $worker: ID!) {

  assignWorker(
    appointment: $appointment, 
    worker: $worker)
}
`

const EDIT_PASSWORD = gql`
  mutation Mutation(
      $password: String!) {

    setPassword(password: $password)
  }
`


const INITIATE_APPOINTMENT = gql`
  mutation InitiateAppointment(
    $ID: String!) {

    initiateAppointment(
      appointment_id: $ID)
  }
`























// const UPLOAD_IMAGE = gql``

// const UPLOAD_WORK_IMAGE = gql``


export {

    SIGNUP_SP,
    ADD_OWNER,

    SIGN_INSP,
    SIGNIN_MOD_SP,

    ADD_MODERATOR,
    ADD_WORKER,

    REMOVE_MODERATOR,
    REMOVE_WORKER,

    REJECT_BOOKING,

    ADD_WORK,

    UPDATE_READ,
    SEND_MESSAGE,

    ADD_SERVICE,
    REMOVE_SERVICE,

    ADD_DISTRICT,
    REMOVE_DISTRICT,
    
    EDIT_PASSWORD,


    EDIT_INFO,

    ASSIGN_WORKER,

    INITIATE_APPOINTMENT,


    // UPLOAD_IMAGE,
    // UPLOAD_WORK_IMAGE,
    
    
}