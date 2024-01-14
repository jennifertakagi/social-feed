import { Header } from '../../components/Header';
import { Post } from '../../components/Post';
import { Sidebar } from '../../components/Sidebar';

import { posts } from '../../data/posts';

import '../../styles/global.css';
import styles from './Home.module.css';

export const Home = () => {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post =>
            <Post
              author={post.author}
              content={post.content}
              key={post.id}
              publishedAt={post.publishedAt}
            />
          )}
        </main>

      </div>
    </>
  )
}
