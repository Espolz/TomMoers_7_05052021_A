import { ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import Like from '../like/Like'
import './feedInteraction.scss'

export default function FeedInteraction({like, comment}) {
    return (
        <div className="feed-interaction">
            <Like />
            <div className="feed-interaction__right">
                <span className="feed-interaction__right--number">{comment} </span>
                <span className="feed-interaction__right--comments"> Comments</span>
            </div>
        </div>
    )
}
