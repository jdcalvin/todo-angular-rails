class Task < ActiveRecord::Base
	before_save {self.title = title.capitalize}
	belongs_to :list
end
