# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_08_26_174228) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "electronics", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.string "imageUrl"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "repair_guides", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "electronic_id", null: false
    t.string "image_url"
    t.string "title"
    t.text "steps"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["electronic_id"], name: "index_repair_guides_on_electronic_id"
    t.index ["user_id"], name: "index_repair_guides_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "repair_guides", "electronics"
  add_foreign_key "repair_guides", "users"
end
