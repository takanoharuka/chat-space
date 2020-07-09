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
|username|string|null: false|
###Association
- has_many :chats
- has_many :groups

##groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false|
###Association
- has_many :users
- has_many :chats

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


##imagesテーブル
|Column|Type|Options|
|------|----|-------|
|image|img|null: false|
|user_id|integer|null: false, :foreign_key: true|
|chats_id|integer|null: false, :foreign_key: true|
###Association
- belong_to :chat
- belong_to :user

##users_imagesテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, :foreign_key: true|
|image_id|integer|null: false, foreign_key: true|
###Association
- belong_to :user
- belong_to :image
