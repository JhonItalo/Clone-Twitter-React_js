//componentes
import React from 'react';
import Feed from '../Feed/Feed';
import ListPost from '../Posts/Listposts';
//css
import styles from './MainHome.module.scss'
//hooks
import { useState } from 'react'
//data
import { Posts } from '../PostsData'

const MainHome = () => {
    const [feedPost, setFeedPost] = useState(Posts);

    return (
        <main className={styles.main}>
            <Feed addPost={setFeedPost} posts={feedPost} />
            <ListPost feed={feedPost} />
        </main>

    );

}

export default MainHome;