export default function Friend({ friend }) {
 
  const { title, id, } = friend;
  return (
    <div className="card">
      <h3>Title: {title}</h3>
      <h4>id: {id}</h4>
    </div>
  );
}
