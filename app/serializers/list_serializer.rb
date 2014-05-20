class ListSerializer < ActiveModel::Serializer
  attributes :id, :title, :tasks
end
