class Task < ActiveRecord::Base
	before_save {self.title = title.capitalize}
end
