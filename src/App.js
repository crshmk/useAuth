import { AuthProvider } from './useAuth'
import User from './User'
import UserName from './User/Name'
import UserEmail from './User/Email'

function App() {
  return (
    <AuthProvider>
      <User>
        <UserName />
        <UserEmail />
      </User>
    </AuthProvider>
  );
}

export default App;
