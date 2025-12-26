import { useEffect, useState } from 'react';
import './App.css';
import { PostItem, type Post } from './components/post-item';



const test = { "domain": "https://gpmloginapp.com", "categorySlugs": [], "page": 1, "limit": 9, "langCode": "vi" }

function App() {
  const [count, setCount] = useState(0)

  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await fetch("https://api-blog.gpmsoftwares.com/api/v1/posts/public/list", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(test)
      })
      if (result.ok) {
        const _posts = await result.json()
        console.log(_posts.data.data)
        setPosts(_posts.data.data)
      }
    }

    fetchPosts()
  }, [])

  return (
    <div className='container mx-auto px-4'>
      <div className='grid grid-cols-3 gap-6'>
        {posts.map(post => (<PostItem key={post.id} post={post}/>))}
      </div>
    </div>
  )
}

export default App
