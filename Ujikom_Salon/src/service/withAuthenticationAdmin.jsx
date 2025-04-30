const withAuthenticationAdmin = (WrappedComponent) => {
  const AuthenticatedComponent = (props) => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));

    console.log('Token:', token);
    console.log('User:', user);

    if (!token || token === "") {
      return <Navigate to="/login" />;
    }

    // Ganti role check dengan email check
    if (!user || user.email !== "admin@gmail.com") {
      return <Navigate to="/" />; // Atau rute user biasa
    }

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};
export default withAuthenticationAdmin;
