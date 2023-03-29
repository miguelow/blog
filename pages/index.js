import styles from '../styles/Home.module.css';
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Home page</h1>
      <h2>Read <Link href="/posts/first-post">one of our blog posts</Link></h2>
    </div>
  )
}
