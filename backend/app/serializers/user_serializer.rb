class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :password
  has_many :lists, except: [:updated_at, :created_at]

end
