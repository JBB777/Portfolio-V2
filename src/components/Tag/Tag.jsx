import './Tag.scss';

function Tag({ name, idx }) {
  return (
    <div className="tag" key={idx}>
      {name}
    </div>
  );
}

export default Tag;
