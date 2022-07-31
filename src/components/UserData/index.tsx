import Header from "../Header"
import { TopArea } from "../TopArea"
import LinksArea from "../LinksArea"
import {StartArea} from "../StartArea"
import { UserDataProps } from "../../types"
import * as C from './styles';

export const  UserData = ({user}: UserDataProps) => {
  return (
    <C.Container>
      <C.Pfp src={user.pfp} alt={user.name} />

      <C.SideArea>
        <TopArea
          username={user.username}
          bio={user.bio}
          name={user.name}
          joinedAt={user.joinedAt}
          pfp={user.pfp}
        />

        <StartArea
          repos={user.repos}
          followers={user.followers}
          following={user.following}
        />

        <LinksArea links={user.links}/>
      </C.SideArea>
    </C.Container>
  );
};
