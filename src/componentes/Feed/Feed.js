//css
import styles from './Feed.module.scss'
import Tweetar from '../Tweetar/Tweetar';

const Feed = ({ addPost, posts }) => {
    return (
        <div className={styles.feed}>
            <h1>Tweetes Mais Recentes</h1>
            <Tweetar addPost={addPost} posts={posts} />
        </div>
    )
}

export default Feed;