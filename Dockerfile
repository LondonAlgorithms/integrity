FROM ruby:latest

WORKDIR /usr/integrity
ADD Gemfile /usr/integrity
ADD Gemfile.lock /usr/integrity
RUN bundle install

ADD app.rb /usr/integrity
ADD public/ /usr/integrity/public

EXPOSE 4444
