import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = ({ onAdd, onCancel }) => {
  const Title = useRef();
  const Description = useRef();
  const DueDate = useRef();
  const modal = useRef();

  const HandleSave = () => {
    const enteredTitle = Title.current.value;
    const enteredDescription = Description.current.value;
    const enteredDueDate = DueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      Title: enteredTitle,
      Description: enteredDescription,
      DueDate: enteredDueDate,
    });
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-900 my-4 ">
          Invalid input
        </h2>
        <p className="text-stone-600 mb-4">Oops... enter a value</p>
        <p className="text-stone-600 mb-4">Provide a valid value</p>
      </Modal>
      <div className="w-[35rem] mt-16 ">
        <menu className="flex items-center justify-end gap-4 my-4">
          <button
            className="text-stone-800 hover:text-stone-950"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md"
            onClick={HandleSave}
          >
            Save
          </button>
        </menu>
        <div>
          <Input type="text" ref={Title} label="Title" />
          <Input ref={Description} label="Description" textarea={true} />
          <Input type="date" ref={DueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
};

export default NewProject;
