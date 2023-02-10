module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :users, [Types::UserType], null:false

    def users 
        User.all
    end
  end
end
# first need to set up graphql server (set up schema + types [endpoints])
# then query using an apollo client (gatewya between two. im slepy)