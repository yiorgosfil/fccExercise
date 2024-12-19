import mongoose from 'mongoose'

export const userSchema = mongoose.Schema(
  {
    username: String,
    required: true,
  }
)

const User = mongoose.model('User', userSchema)

