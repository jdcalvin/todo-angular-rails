class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :completed, :list_id
end
