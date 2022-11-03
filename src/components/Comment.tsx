import { ThumbsUp } from 'phosphor-react';
import { Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface ComentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment ({content, onDeleteComment}: ComentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(content)
    }

    function handleLikeComment(){
       setLikeCount((state) => {
        return state + 1
       });
    }

    return(
        <div className={styles.comment}>
        <Avatar 
            hasBorder={false}
            src="https://github.com/jonierthal.png" 
            alt=""
            
        />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Jonathan Erthal</strong>
                            <time title="11 de Outubro as 12:48" dateTime="2022-11-10 12:47:30">Cerca de 2h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}