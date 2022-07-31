import * as C from './styles';

interface StastsAreaProps {
  repos: string;
  followers: string;
  following: string;
}

export const StartArea = ({ repos, followers, following }: StastsAreaProps) => {
  return (
    <C.Container>
      <C.Data>
        <span>Repos</span>
        <strong>{repos}</strong>
      </C.Data>

      <C.Data>
        <span>Followers</span>
        <strong>{followers}</strong>
      </C.Data>

      <C.Data>
      <span>Following</span>
        <strong>{following}</strong>
      </C.Data>
    </C.Container>
  );
};