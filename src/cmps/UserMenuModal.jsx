

export function UserMenuModal({ user}) {


    return (
        <>
        <div className='user-menu'>
        <p>{user.name}</p>
        <p>coins: {user.coins}</p>
      </div>
        </>
    )




}



