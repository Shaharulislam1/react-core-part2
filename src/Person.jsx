export default function Person({ person }) {
  const { name, username, email, address } = person;
  const { street, suite, city, zipcode } = address;
  
  return (
    <div className="card">
      <h3>Name: {name}</h3>
      <p>User Name: {username}</p>
      <h4>Gmail: {email}</h4>
      <div className="card">
        <h4>Address:</h4>
        <p>{street}, {suite}</p>
        <p>{city}, {zipcode}</p>
      </div>
    </div>
  );
}
