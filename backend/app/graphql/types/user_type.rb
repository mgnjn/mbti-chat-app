module Types
    class UserType < Types::BaseObject
        field :id, ID, null: true
        field :firstName, String, null: true
        field :lastName, String, null: true
        field :mbti, String, null: false
        field :country, String, null: false
        field :province, String, null: false
        field :city, String, null: false
        field :age, Int, null: false
    end
end