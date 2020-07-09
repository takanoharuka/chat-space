# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
##usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|name|string|null: false|
###Association
- has_many :groups, through: :groups_users
- belong_to :group

##groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
###Association
- has_many :users, through: :groups_users
- has_many :groups_users

##groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|users_id|integer|null: false, foreign_key: true|
|groups_id|integer|null: false, foreign_key: true|
###Association
- belong_to :user
- belong_to :group


##chatsテーブル
|Column|Type|Options|
|------|----|-------|
|message|text|null: false|
|image|img|null: false|
|user_id|integer|null: false, foreign_key: true|
###Association
- belong_to :user
- has_many :images
- has_many :groups


