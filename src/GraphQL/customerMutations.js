import { gql } from '@apollo/client';

const SIGN_IN_CUSTOMER =gql `
mutation SignINCustomer(
    $workerId: String!, 
    $password: String!) {

    signINCustomer(
      username: $workerId, 
      password: $password
    )
}`;

const BOOKING = gql `
mutation Mutation($to: ID!, $workStationAddress: String!, $workStationDistrict: String!, $description: String!) {
  booking(to: $to, workStationAddress: $workStationAddress, workStationDistrict: $workStationDistrict, description: $description) {
    _id
  }
}`;

const REVIEW_SP= gql`
mutation SendReview($to: ID!, $rating: Float!, $content: String) {
  sendReview(to: $to, rating: $rating, content: $content) {
    _id
  }
}`;

const PAYMENT_DETAILS = gql `
mutation SendReview($from: String!, $to: String!, $appointment: ID!, $amount: Float!) {
  payment(from: $from, to: $to, appointment: $appointment, amount: $amount) {
    _id
  }
}`;

const CONFIRM_PAYMENT = gql`
mutation Mutation($appointment: ID!) {
  confirmPayment(appointment: $appointment)
}`;

const SIGNUP_CUSTOMER= gql`
mutation Mutation(
  $username: String!, 
  $password: String!, 
  $name: String!, 
  $contactNo: String!, 
  $email: String!) {

  signUPCustomer(
    username: $username, 
    password: $password, 
    name: $name, 
    contact_no: $contactNo, 
    email: $email) {
    _id
  }
}
`

export{
    SIGN_IN_CUSTOMER,
    BOOKING,
    REVIEW_SP,
    PAYMENT_DETAILS,
    CONFIRM_PAYMENT,
    SIGNUP_CUSTOMER,
}