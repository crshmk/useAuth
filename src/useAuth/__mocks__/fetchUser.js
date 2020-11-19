import mockUser from './mockUser'

let fetchUser = cb => () => cb(mockUser)

export default fetchUser
