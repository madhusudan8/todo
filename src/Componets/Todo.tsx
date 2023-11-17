import React, { useRef, useState } from "react";

const Todo = () => {
  const [task, setTask] = useState<string[]>([]);
  const [value, setValue] = useState<string>("");
  const [update, setUpdate] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  //   type Todo = {
  //     value: string;
  //     task: string[];
  //     update: boolean;
  //   };
  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    if (value) {
      setTask([...task, value]);
    }
    setValue("");
    setUpdate(false);
  };
  const handleDelete = (id: number) => {
    let filteredItem = task.filter((_ele, sanu) => {
      return id !== sanu;
    });
    setTask(filteredItem);
  };

  const handleRemoveAll = () => {
    setTask([]);
    inputRef.current!.focus();
  };

  const handleEdit = (key: number) => {
    let notFilteredItem: any = task.filter((_ele, sanu) => {
      return key === sanu;
    });
    setValue(notFilteredItem);
    let filteredItem = task.filter((_ele, sanu) => {
      return key !== sanu;
    });
    setTask(filteredItem);
    setUpdate(true);
  };
  return (
    <div>
      <div className="h-screen flex items-center justify-center">
        <div>
          <div className="flex items-center justify-center">
            <div className="w-52">
              <input
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-42 p-2.5 white:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                value={value}
                onChange={handleChange}
                ref={inputRef}
              />
            </div>
            <div className="ml-4">
              {update ? (
                <button
                  className="bg-sky-700  px-4 py-2  text-white hover:bg-sky-800 sm:px-8 sm:py-3"
                  onClick={handleClick}
                >
                  Update
                </button>
              ) : (
                <button
                  className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3"
                  onClick={handleClick}
                >
                  Submit
                </button>
              )}
              <button
                className="bg-sky-700 px-4 ml-3.5 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3"
                onClick={handleRemoveAll}
              >
                Remove All
              </button>
            </div>
          </div>
          <div className="flex items-center justify-start mt-4">
            <div>
              {task.map((items, key) => (
                <div
                  key={key}
                  className="flex items-center justify-center mt-2"
                >
                  <div className="w-52">
                    <li>&nbsp; {items}</li>
                  </div>
                  <div className="ml-4">
                    <button
                      className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3"
                      onClick={() => handleDelete(key)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-sky-700 ml-3.5 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3"
                      // value={update}
                      onClick={() => handleEdit(key)}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
