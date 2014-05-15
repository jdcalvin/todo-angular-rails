class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :completed, :created_at
end
