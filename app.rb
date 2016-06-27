require 'fileutils'
require 'sinatra'
require 'json'

set :bind, '0.0.0.0'

get "/:dir" do
  content_type :json
  files = filter_files(params[:dir])
  {files: files}.to_json
end

def filter_files(dir)
  Dir.
    entries("public/#{dir}").
    reject { |x| [".","..", ".DS_Store"].include?(x) }.
    collect { |q| "#{dir}/" + q }
end
