export default function UserCard({ name }: { name: string }) {
  // name = prop — comes from parent, read-only here
  const [liked, setLiked] = useState(false)
  // liked = state — lives here, can be changed

  return (
    <div>
      <p>{name}</p>
      <button onClick={() => setLiked(!liked)}>
        {liked ? 'Liked' : 'Like'}
      </button>
    </div>
  )
}
