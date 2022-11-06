import { useMember } from "../hooks";

export const Content = () => {
  const { members, isError, isLoading } = useMember();
  if (!members || isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  return (
    <div>
      {members.map((member) => (
        <div key={member.id}>
          <hr />
          <div>ID: {member.id}</div>
          <div>Name: {member.name}</div>
          <div>Age: {member.age}</div>
        </div>
      ))}
    </div>
  );
};
