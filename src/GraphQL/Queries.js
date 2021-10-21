import {useQuery,gql} from '@apollo/client';

const GET_PROVINCES = gql`
query Query {
  showProvinces {
    id
    provinceName
  }
}
`;

export {GET_PROVINCES};