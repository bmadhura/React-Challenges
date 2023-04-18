import "./Friend.module.scss";

interface IFriendProps {
  id: string;
  name: string;
  onClickEdit: (id: string) => void;
  onClickDelete: (id: string) => void;
}

const Friend = ({ id, name, onClickEdit, onClickDelete }: IFriendProps) => {
  const onEditClickHandler = () => onClickEdit(id);
  const onDeleteClickHandler = () => onClickDelete(id);

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>
        <button onClick={onEditClickHandler}>Edit</button>
      </td>
      <td>
        <button onClick={onDeleteClickHandler}>Delete</button>
      </td>
    </tr>
  );
};

export default Friend;
