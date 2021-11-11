import { gql } from '@apollo/client';

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

const SIGNIN_WORKER = gql`
  mutation Mutation(
    $workerId: String!, 
    $password: String!
    ) {

    signINWorker(
      username: $workerId, 
      password: $password)
  }
`

const SIGNIN_MODERATOR = gql`
  mutation SignINSPMutation(
    $workerId: String!, 
    $password: String!) {

    signINSP(
      username: $workerId, 
      password: $password
      )
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
      id
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
      id
    }
  }
`

const SEND_MESSAGE = gql`
  mutation SendMessageMutation($to: String!,
     $message: String!) {

    sendMessage(
      to: $to, 
      message: $message) {
      _id
    }
  }
` 

const UPDATE_READ = gql`
  mutation ReadMessageMutation(
    $readMessageId: ID) {
    readMessage(id: $readMessageId)
  }
`






























const EDIT_INFO = gql`
  mutation EditInfo(
    $email: String, 
    $contactNo: String, 
    $address: String) {

    editInfo(
      email: $email, 
      contact_no: $contactNo, 
      address: $address)
  }

`

const EDIT_PASSWORD = gql`
  mutation Mutation(
      $password: String!) {

    setPassword(password: $password)
  }
`

// const UPLOAD_IMAGE = gql``

// const UPDATE_PASSWORD = gql``

// const ASSIGN_WORKER = gql``



// const UPDATE_READ = gql``

// const UPLOAD_WORK_IMAGE = gql``


export {

    SIGNIN_WORKER,
    UPDATE_READ,
    SIGN_INSP,


    ADD_MODERATOR,
    ADD_WORKER,
    SIGNIN_MODERATOR,


  
    EDIT_INFO,

    EDIT_PASSWORD,

    

    // UPLOAD_IMAGE,
    // UPLOAD_WORK_IMAGE,
    // UPDATE_PASSWORD,
    // ASSIGN_WORKER,

    SEND_MESSAGE,
    // UPDATE_READ,
}