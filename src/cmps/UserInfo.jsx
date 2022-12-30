import { bitcoinService } from "../services/bitcoin-service"
import { UserMenuModal } from "./UserMenuModal"

export function UserInfo({ user, onOpenMenu}) {


    return (
        <>
        <section className="user-container" onClick={() => onOpenMenu()}>
            {/* <div>{user.name} coins:{user.coins}</div>  */}
            <img src="https://res.cloudinary.com/dirvusyaz/image/upload/v1672414286/menu_mvjd2w.svg" alt="" />
            <img src="https://res.cloudinary.com/dirvusyaz/image/upload/v1672414295/login_e5hmrq.svg"></img>
        </section>
        </>
    )




}