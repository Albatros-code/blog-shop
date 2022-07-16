
interface PostProps {
    title: string
    image: {
        file: {
            url: string
        },
        description: string
    }
    date: string
    text?: string
}

const Post = ({ date, image, title }: PostProps) => {
    let { file, description } = image
  
    return (
      <div className="post">
        <img alt={description} src={`https:${file.url}`} />
        <div className="description">{description}</div>
        <div className="text">
          <h2>{title}</h2>
          <h3>{date.substring(0, 10)}</h3>
        </div>
      </div>
    )
  }
  
  export default Post