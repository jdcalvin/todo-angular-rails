class List < ActiveRecord::Base
	before_save {self.title = title.capitalize}
	has_many :tasks
end
