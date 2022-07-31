

interface StastsAreaProps {
  repos: string;
  followers: string;
  following: string;
}

export const StartArea = ({ repos, followers, following }: StastsAreaProps) => {
  return (
    <Container>
      <Data>
        <span>Repos</span>
        <strong>{repos}</strong>
      </Data>

      <Data>
        <span>Followers</span>
        <strong>{followers}</strong>
      </Data>

      <Data>
      <span>Following</span>
        <strong>{following}</strong>
      </Data>
    </Container>
  );
};