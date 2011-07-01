# bundler bootstrap
require 'bundler/capistrano'

# main details
set :application, "smsflow"
role :web, "peta.alabs.es"
role :app, "peta.alabs.es"
role :db,  "peta.alabs.es", :primary => true

# server details
default_run_options[:pty] = true
ssh_options[:forward_agent] = true
set :deploy_to, "/var/www/ruby-apps/sms.alabs.es"
set :deploy_via, :remote_cache
set :user, "ruby-data"
set :use_sudo, false

# repo details
set :scm, :git
set :scm_username, "ruby-data"
set :repository, "git@git.alabs.es:smsflow.git"
set :branch, "master"
set :git_enable_submodules, 1

# tasks
namespace :deploy do
  task :start, :roles => :app do
    run "touch #{current_path}/tmp/restart.txt"
  end

  task :stop, :roles => :app do
    # Do nothing.
  end

  desc "Restart Application"
  task :restart, :roles => :app do
    run "touch #{current_path}/tmp/restart.txt"
  end
end
