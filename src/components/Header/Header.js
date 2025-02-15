
import TransitionsCreatePostModal from './ModalCreatePost'
import ButtonSizes from './ButtonSizes'
import AvatarModal from '../AvatarModal/AvatarModal'

const Header = ({ date, comment, authValues, setAuthValues, description, setDescription, image, setImage, onPostCreated, userId }) => {


    return (
        <header className='header'>

            <div className="header__left">
                <img src='img/icon-left-font-cropped.png' className="header-logo" alt="logo" />
            </div>

            <div className='header__middle'>
                <ButtonSizes variant="contained" text="Hot" color='primary' />
                <ButtonSizes variant="outlined" text="Popular" color='#4C7490' />
                <ButtonSizes variant="outlined" text="New" color='blue' />
            </div>

            <div className='header__right'>
                <TransitionsCreatePostModal
                    // post={post} setPost={setPost} 
                    description={description} setDescription={setDescription}
                    comment={comment}
                    image={image} setImage={setImage}
                    onPostCreated={onPostCreated}
                    date={date} userId={userId}
                    
                />
                <AvatarModal
                    authValues={authValues}
                    setAuthValues={setAuthValues}
                />
            </div>
        </header>
    )
}

export default Header
