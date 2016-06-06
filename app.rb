require 'fileutils'
require 'sinatra'
require 'json'

set :bind, '0.0.0.0'

get "/greedy-javascript" do
  content_type :json
  files = Dir.
            entries("public/greedy-javascript/").
            reject { |x| [".","..", ".DS_Store"].include?(x) }.
            collect { |q| "greedy-javascript/" + q }

  {files: files}.to_json
end


get "/pathfinding-javascript" do
  content_type :json
  files = Dir.
            entries("public/pathfinding-javascript/").
            reject { |x| [".","..", ".DS_Store"].include?(x) }.
            collect { |q| "pathfinding-javascript/" + q }

  {files: files}.to_json
end

