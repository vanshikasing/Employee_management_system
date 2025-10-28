import React, { useContext, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authdata = useContext(AuthContext)

  const handleLogin = (email, password) => {
    console.log('Auth data from context:', authdata) // ✅ helps in debugging

    // ✅ Admin login
    if (email === 'admin@me.com' && password === '123') {
      setUser({ role: 'admin' })
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
      return
    }

    // ✅ Employee login
    if (authdata && Array.isArray(authdata.employees)) {
      const employee = authdata.employees.find(
        (e) => e.email === email && e.password === password
      )

      if (employee) {
        setUser({ role: 'employee' })
        setLoggedInUserData(employee)
        localStorage.setItem(
          'loggedInUser',
          JSON.stringify({ role: 'employee', data: employee })
        )
        return
      }
    }

    // ❌ Invalid credentials
    alert('Invalid Credentials')
  }

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user.role === 'admin' ? (
        <AdminDashboard />
      ) : user.role === 'employee' ? (
        <EmployeeDashboard data={loggedInUserData} />
      ) : null}
    </>
  )
}

export default App
