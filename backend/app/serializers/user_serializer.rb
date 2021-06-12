class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :password, :first_name, :last_name
  has_many :lists, except: [:updated_at, :created_at]

end
