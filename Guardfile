# A sample Guardfile
# More info at https://github.com/guard/guard#readme

# Guard::Compass
#
# You don't need to configure watchers for guard 'compass' declaration as they generated
# from your Compass configuration file. You might need to define the Compass working directory
# and point to the configuration file depending of your project structure.
#
# Available options:
#
# * :workging_directory => Define the Compass working directory, relative to the Guardfile directory
# * :configuration_file => Path to the Compass configuration file, relative to :project_path
#
# Like usual, the Compass configuration path are relative to the :project_path

# guard 'compass', :project_path => 'not_current_dir', :configuration_file => 'path/to/my/compass_config.rb'
guard :compass

guard 'livereload' do
  watch(%r{.+\.(css|html|js)$})
end

# guard 'sass', :input => 'sass', :output => 'css'

guard 'jslint-on-rails' do
  # watch for changes to application javascript files
  watch(%r{^javascripts/.*\.js$})
end

# verify that application Javascript files are lintable
# see https://github.com/psionides/jslint_on_rails
guard 'jslint-on-rails' do
  # watch for changes to application javascript files
  watch(%r{^app/assets/javascripts/.*\.js$})
  # watch for changes to the JSLint configuration
  watch('config/jslint.yml')
end
