import { bitcoinService } from "../services/bitcoin-service"
import { UserMenuModal } from "./UserMenuModal"

export function UserInfo({ user, onOpenMenu}) {


    return (
        <>
        <section className="user-container" onClick={() => onOpenMenu()}>
            {/* <div>{user.name} coins:{user.coins}</div>  */}
            <img src="../svg/menu.svg" alt="" />
            <img src="../svg/login.svg"></img>
        </section>
        </>
    )




}