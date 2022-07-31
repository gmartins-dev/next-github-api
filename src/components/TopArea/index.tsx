import styled from "styled-components";
import * as C from './styles';

interface TopAreaProps {
  username: string;
  bio: string;
  name: string;
  joinedAt: string;
  pfp: string;
}

export const TopArea = ({
  username,
  name,
  joinedAt,
  bio,
  pfp,
}: TopAreaProps) => {
  return (
    <>
      <C.Info>
        <C.Pfp src={pfp} alt={name} />
        <C.SideInfo>
          <C.Name>{name}</C.Name>
          <C.Username>
            <a href={`https://github.com/${username}`}>@{username}</a>
          </C.Username>
          <C.JoinedAt>{joinedAt}</C.JoinedAt>
        </C.SideInfo>
      </C.Info>
      <C.Bio>{bio}</C.Bio>
    </>
  );
};