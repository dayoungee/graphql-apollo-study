const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    equipmentAdvs: [EquipmentAdv]
    equipments: [Equipment]
    supplies: [Supply]
  }
`;

module.exports = typeDefs;
