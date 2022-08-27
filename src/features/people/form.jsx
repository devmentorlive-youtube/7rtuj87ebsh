import Modal from "@/ui/modal";
import TextField from "@/ui/forms/text-field";
import SmallButton from "@/ui/buttons/small";

export default function PersonForm({
  value,
  onChange = () => {},
  onSave = () => {},
  close = () => {},
  renderTitle = () => {},
}) {
  if (!value) return "";

  return (
    <Modal isOpen={Boolean(value)} close={close}>
      <div className="text-gray-800">
        {renderTitle()}

        <TextField
          value={value?.name}
          onChange={(name) =>
            onChange({
              ...value,
              name,
            })
          }
        />

        <TextField
          value={value.email}
          onChange={(email) =>
            onChange({
              ...value,
              email,
            })
          }
        />

        <SmallButton onClick={onSave}>Save</SmallButton>
      </div>
    </Modal>
  );
}
